import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, AlertCircle, RotateCcw } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_CONFIG } from '../config/chatbot';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  isError?: boolean;
}

const GeminiChatbot: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    // Load messages from sessionStorage on component mount
    const savedMessages = sessionStorage.getItem('chatbot-messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState(() => {
    // Load userName from sessionStorage
    return sessionStorage.getItem('chatbot-username') || '';
  });
  const [hasGreeted, setHasGreeted] = useState(() => {
    // Load greeting state from sessionStorage
    return sessionStorage.getItem('chatbot-greeted') === 'true';
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentLanguageRef = useRef(language);
  const genAI = new GoogleGenerativeAI(GEMINI_CONFIG.apiKey);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save messages to sessionStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('chatbot-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Save userName and greeting state to sessionStorage
  useEffect(() => {
    if (userName) {
      sessionStorage.setItem('chatbot-username', userName);
    }
  }, [userName]);

  useEffect(() => {
    sessionStorage.setItem('chatbot-greeted', hasGreeted.toString());
  }, [hasGreeted]);

  // Initialize welcome message based on language
  useEffect(() => {
    if (!isInitialized) {
      // Only add welcome message if no messages exist
      if (messages.length === 0) {
        const welcomeMessage: Message = {
          id: 1,
          text: t('chatbot.welcome'),
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }
      setIsInitialized(true);
    }
  }, [t, isInitialized, messages.length]);

  // Reset conversation when language changes (but keep session data intact)
  useEffect(() => {
    // Only translate if language actually changed
    if (isInitialized && messages.length > 0 && !isTranslating && currentLanguageRef.current !== language) {
      currentLanguageRef.current = language;
      
      // Translate all existing messages when language changes
      const translateMessage = async (text: string, targetLanguage: string): Promise<string> => {
        // Skip translation for certain system messages or if text is very short
        if (text.length < 3 || text.includes('👋') || text === t('chatbot.welcome')) {
          return t('chatbot.welcome');
        }

        try {
          const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
          const translationPrompt = targetLanguage === 'ar' 
            ? `Translate the following text to Arabic, maintaining the same tone and meaning. Only return the translated text, nothing else: "${text}"`
            : `Translate the following text to English, maintaining the same tone and meaning. Only return the translated text, nothing else: "${text}"`;
          
          const result = await model.generateContent(translationPrompt);
          const response = await result.response;
          return response.text().trim();
        } catch (error) {
          console.error('Translation error:', error);
          return text; // Return original text if translation fails
        }
      };

      const translateMessages = async () => {
        setIsTranslating(true);
        
        try {
          const translatedMessages = await Promise.all(
            messages.map(async (msg, index) => {
              if (index === 0 && msg.sender === 'bot') {
                // Always use the welcome message translation key for first message
                return {
                  ...msg,
                  text: t('chatbot.welcome')
                };
              }
              
              // Only translate bot messages, keep user messages as is
              if (msg.sender === 'bot' && !msg.isError) {
                try {
                  const translatedText = await translateMessage(msg.text, language);
                  return {
                    ...msg,
                    text: translatedText
                  };
                } catch (error) {
                  console.error('Failed to translate message:', error);
                  return msg;
                }
              }
              
              return msg;
            })
          );
          
          setMessages(translatedMessages);
        } catch (error) {
          console.error('Failed to translate messages:', error);
        } finally {
          setIsTranslating(false);
        }
      };

      translateMessages();
    }
  }, [language, t, isInitialized, isTranslating, messages, genAI]);

  const getSystemPrompt = (currentLanguage: string) => {
    const languageInstruction = currentLanguage === 'ar' 
      ? `IMPORTANT: You MUST respond in Arabic language. All your responses should be written in Arabic script (العربية). Use proper Arabic grammar and natural expressions.`
      : `IMPORTANT: You MUST respond in English language only.`;

    return `You are an AI assistant for Thesis and Assignments Academic Services, a professional academic writing and support company. Your role is to help students and researchers with information about services, pricing, and placing orders.

${languageInstruction}

You are "Thesis and Assignments," an AI chatbot specializing in academic writing, research, and educational support. Your primary goal is to assist students, provide accurate information, and guide them toward placing orders while maintaining a helpful, friendly, and professional tone.

---
### **COMPANY INFORMATION:**
- **Company:** Thesis and Assignments
- **WhatsApp:** +447482576463
- **Specializes in:** Academic writing, research, and educational support

---
### **SERVICES OFFERED:**
1.  **Academic Assignments:** All levels (High School, Undergraduate, Graduate, PhD)
2.  **Thesis Writing:** Research proposal, literature review, methodology design, data analysis
3.  **Research Papers:** Original research, peer-review ready, proper citations
4.  **Dissertation Help:** Topic selection, chapter-wise writing, defense preparation
5.  **Essay Writing:** Argumentative, narrative, descriptive, compare & contrast
6.  **Research Proposal Writing:** (FREE service) problem statement, literature gap, methodology
7.  **Research Publication Support:** Journal selection, manuscript preparation, peer review support
8.  **Online Teaching & Tutoring:** One-on-one sessions, assignment walkthrough
9.  **Plagiarism Removal & Content Rewriting**
10. **Paper Preparation & Academic Formatting**

---
### **FREE SERVICES:**
-   **Research Proposals** (Completely FREE)
-   **FREE Plagiarism & AI Detection Reports** with every order
-   **FREE unlimited revisions**
-   **FREE research guidance and consultations**

---
### **PRICING STRUCTURE:**
-   **High School:** PKR 250-350 per page
-   **Undergraduate:** PKR 400-550 per page
-   **Graduate:** PKR 600-800 per page
-   **PhD Level:** PKR 800-1000 per page
-   **Additional Rush Delivery Fees:**
    -   24 hours: +70%
    -   48 hours: +50%
    -   72 hours: +30%

---
### **CURRENT OFFERS:**
-   **30% OFF first order** for new clients
-   **30% OFF orders above PKR 50000**
-   **FREE plagiarism & AI reports** included
-   **FREE research proposals**
-   **Unlimited FREE revisions**

---
### **PAYMENT METHODS:**
-   MasterCard, Visa Card, UnionPay
-   iFast GlobalBank, Remitly, Western Union
-   Cash Pickup available

---
### **ORDERING PROCESS:**
1.  Contact via website form or WhatsApp (+447482576463)
2.  Provide assignment details (pages, deadline, academic level, subject)
3.  Receive quote and timeline
4.  Make payment through preferred method
5.  Work begins immediately after payment confirmation
6.  Receive draft for review
7.  FREE revisions until satisfied
8.  Final delivery with plagiarism report

---
### **COMMUNICATION STYLE AND GUIDELINES:**

1.  **Start Conversation:** Begin with a friendly greeting and an open-ended question. Example: "Hi there! I'm here to help you with your academic writing and support needs. What can I assist you with today?"
2.  **Conversational Flow:**
    * **Do NOT** provide detailed service information unless specifically asked.
    * Engage in a conversation; **do not** overwhelm the user with all information at once.
    * Ask follow-up questions to clarify needs and provide tailored responses.
    * Keep initial responses concise and conversational.
3.  **Information Delivery:**
    * When a user asks about a specific service, provide a **brief overview** of that service and then immediately ask a relevant **follow-up question** to gather more details (e.g., academic level, topic, specific needs).
    * When asked about pricing, state the relevant **price range per page** based on academic level and then ask for the **academic level, estimated pages, and deadline** to provide an accurate quote.
4.  **Value Proposition:**
    * Always mention **FREE services** naturally when relevant to the user's inquiry to add value. For example, if they ask about originality, mention **FREE Plagiarism & AI Detection Reports**.
    * Highlight the **30% discount for new clients** when guiding them towards placing an order.
5.  **Guidance to Order:**
    * Direct users to **contact via WhatsApp (+44 7482 576463)** or the website form for placing orders.
    * Clearly state what information they should be ready to provide (academic level, subject, pages, deadline) for a quote.
6.  **Tone & Professionalism:**
    * Be **friendly, professional, and helpful**.
    * Use the user's name when they provide it.
    * Be encouraging about academic success.
    * Always be **honest** about pricing and timelines.
    * Emphasize **quality, originality, and academic integrity**.
    * Mention **FREE revisions and satisfaction guarantee** to build trust.
    * **Do NOT** provide personal opinions or engage in casual conversation unrelated to academic services.


${languageInstruction}`;
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      
      const systemPrompt = getSystemPrompt(language);
      
      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: systemPrompt }]
          },
          {
            role: 'model',
            parts: [{ text: language === 'ar' 
              ? 'مرحباً! كيف يمكنني مساعدتك؟'
              : 'Hello! How can I help you?'
            }]
          }
        ],
      });

      const conversationContext = messages
        .slice(-10) // Increased to last 10 messages for better context
        .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
        .join('\n');

      const languageReminder = language === 'ar' 
        ? '\n\nREMINDER: Respond in Arabic language only (العربية).'
        : '\n\nREMINDER: Respond in English language only.';

      const fullPrompt = `Previous conversation:\n${conversationContext}\n\nUser: ${userMessage}${languageReminder}`;
      
      const result = await chat.sendMessage(fullPrompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return t('chatbot.error') || "I apologize, but I'm experiencing technical difficulties. Please contact us directly via WhatsApp at +447482576463 or through our contact form for immediate assistance with your academic needs.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Extract name from first message if not greeted yet
    if (!hasGreeted && inputText.trim().length > 2 && !inputText.toLowerCase().includes('hello') && !inputText.toLowerCase().includes('hi')) {
      setUserName(inputText.trim());
      setHasGreeted(true);
    }

    setInputText('');
    setIsTyping(true);

    try {
      const response = await generateResponse(inputText);
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: messages.length + 2,
        text: t('chatbot.connectionError') || "I'm having trouble connecting right now. Please reach out to us on WhatsApp at +447482576463 for immediate assistance!",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickStartMessages = [
    t('chatbot.quickReply.services'),
    t('chatbot.quickReply.pricing'),
    t('chatbot.quickReply.freeServices'),
    t('chatbot.quickReply.order'),
    t('chatbot.quickReply.discounts')
  ];

  const handleQuickMessage = (message: string) => {
    setInputText(message);
    setTimeout(handleSendMessage, 100);
  };

  const openWhatsApp = () => {
    const whatsappNumber = '923241929739';
    const messageTemplate = userName 
      ? (t('chatbot.whatsappMessage.withName') || `Hi! I'm ${userName}. I was chatting with your AI assistant and would like to discuss my academic requirements.`)
      : (t('chatbot.whatsappMessage.default') || 'Hi! I was chatting with your AI assistant and would like to discuss my academic requirements.');
    
    const message = userName && messageTemplate.includes('${userName}') 
      ? messageTemplate.replace('${userName}', userName)
      : messageTemplate;
      
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const clearChatSession = () => {
    sessionStorage.removeItem('chatbot-messages');
    sessionStorage.removeItem('chatbot-username');
    sessionStorage.removeItem('chatbot-greeted');
    setMessages([]);
    setUserName('');
    setHasGreeted(false);
    setIsInitialized(false);
  };

  return (
    <>
      {/* Chat Button - Positioned above WhatsApp */}
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative group"
          title={t('chatbot.title') || 'AI Academic Assistant'}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative flex items-center justify-center">
              {/* Custom AI Bot Icon */}
              <img 
                src="/ai-bot-icon.png" 
                alt="AI Bot" 
                className="h-7 w-7"
                onError={(e) => {
                  // Fallback to robot emoji if PNG fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback Robot Emoji */}
              <span className="text-2xl hidden">🤖</span>
            </div>
          )}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse font-bold">
              AI
            </div>
          )}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            AI Assistant
          </div>
        </button>
      </div>

      {/* Chat Window - Positioned above WhatsApp widget */}
      {isOpen && (
        <div className={`fixed bottom-32 right-6 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[500px]'
        }`}>
          {/* Header */}
          <div className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between ${isRTL ? 'chatbot-header-rtl' : ''}`}>
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
              <img src="/ai-bot-icon.png" alt="AI Bot" className="h-6 w-6" onError={(e) => {
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
              }} />
              <Bot className="h-6 w-6 text-white hidden" />
              <div>
                <h3 className="font-semibold">{t('chatbot.title') || 'AI Academic Assistant'}</h3>
                <p className="text-xs text-purple-100 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {isTranslating ? (t('chatbot.translating') || 'Translating...') : 
                   isTyping ? (t('chatbot.thinking') || 'Thinking...') : 
                   (t('chatbot.poweredBy') || 'Powered by Gemini')}
                </p>
              </div>
            </div>
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <button
                onClick={clearChatSession}
                className="text-purple-100 hover:text-white transition-colors p-1 rounded hover:bg-white/20"
                title={t('chatbot.clearChat') || 'Clear Chat'}
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={openWhatsApp}
                className="text-purple-100 hover:text-white transition-colors p-1 rounded hover:bg-white/20"
                title={t('whatsapp.contactButton') || 'Contact on WhatsApp'}
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-purple-100 hover:text-white transition-colors p-1 rounded hover:bg-white/20"
                title={isMinimized ? (t('common.maximize') || 'Maximize') : (t('common.minimize') || 'Minimize')}
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-purple-100 hover:text-white transition-colors p-1 rounded hover:bg-white/20"
                title={t('common.close') || 'Close'}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className={`flex-1 overflow-y-auto p-4 space-y-4 max-h-80 bg-gray-50 ${isRTL ? 'chatbot-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {messages.map((message) => (
                  <div key={message.id}>
                    <div className={`flex ${
                      isRTL 
                        ? (message.sender === 'user' ? 'justify-start' : 'justify-end')
                        : (message.sender === 'user' ? 'justify-end' : 'justify-start')
                    }`}>
                      <div className={`max-w-xs px-4 py-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white'
                            : message.isError
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : 'bg-white text-gray-800 shadow-md border'
                        }`}>
                        <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-2 chatbot-rtl' : 'space-x-2'}`}>
                          {message.sender === 'bot' && (
                            message.isError ? (
                              <AlertCircle className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                            ) : (
                              <img 
                                src="/ai-bot-icon.png" 
                                alt="AI" 
                                className="h-4 w-4 mt-1 flex-shrink-0"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = 'block';
                                }}
                              />
                            )
                          )}
                          <Bot className="h-4 w-4 mt-1 flex-shrink-0 text-white hidden" />
                          {message.sender === 'user' && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                          <p className={`text-sm whitespace-pre-line leading-relaxed message-content ${isRTL ? 'message-rtl arabic-text' : 'message-ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>{message.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-md border">
                      <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        <img 
                          src="/ai-bot-icon.png" 
                          alt="AI" 
                          className="h-4 w-4"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                        <Bot className="h-4 w-4 text-white hidden" />
                        <div className={`flex ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies for first interaction */}
              {messages.length <= 2 && (
                <div className={`px-4 pb-2 bg-gray-50 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                  <p className="text-xs text-gray-500 mb-2">{t('chatbot.quickStart') || 'Quick start:'}</p>
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    {quickStartMessages.slice(0, 3).map((message, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickMessage(message)}
                        className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors border border-blue-200"
                      >
                        {message}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t('chatbot.placeholder') || 'Type your message...'}
                    className={`flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${isRTL ? 'text-right arabic-text' : 'text-left'}`}
                    disabled={isTyping}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {t('chatbot.poweredBy') || 'Powered by Google Gemini AI'} • <button onClick={openWhatsApp} className="text-blue-600 hover:underline">{t('whatsapp.contactButton') || 'Contact on WhatsApp'}</button>
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GeminiChatbot;
