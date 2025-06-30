import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  options?: string[];
}

interface ChatContext {
  topic?: string;
  userInfo?: {
    name?: string;
    service?: string;
    budget?: string;
  };
  conversationStage: 'greeting' | 'service_inquiry' | 'details' | 'quote' | 'general';
}

const Chatbot: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your academic assistant. I can help you with information about our services, pricing, and placing orders. What's your name?",
      sender: 'bot',
      timestamp: new Date(),
      options: []
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ChatContext>({
    conversationStage: 'greeting',
    userInfo: {}
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "What services do you offer?",
    "How much does it cost?",
    "How to place an order?",
    "What are your free services?",
    "Do you offer discounts?"
  ];

  const serviceOptions = [
    "Academic Assignments",
    "Thesis Writing", 
    "Research Papers",
    "Dissertation Help",
    "Essay Writing",
    "Research Publication"
  ];

  const updateContext = (updates: Partial<ChatContext>) => {
    setContext(prev => ({ ...prev, ...updates }));
  };

  const getBotResponse = (input: string, currentContext: ChatContext): { text: string; options?: string[] } => {
    const lowerInput = input.toLowerCase();

    // Greeting stage - collect name
    if (currentContext.conversationStage === 'greeting') {
      if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.length < 3) {
        return {
          text: "Hello! What's your name so I can assist you better?",
          options: []
        };
      } else {
        // Assume input is a name
        updateContext({
          userInfo: { ...currentContext.userInfo, name: input },
          conversationStage: 'service_inquiry'
        });
        return {
          text: `Nice to meet you, ${input}! How can I help you today?`,
          options: [
            "Tell me about your services",
            "I need pricing information", 
            "How do I place an order?",
            "What free services do you offer?"
          ]
        };
      }
    }

    // Service inquiry responses
    if (lowerInput.includes('service') || lowerInput.includes('what do you offer') || lowerInput.includes('tell me about')) {
      updateContext({ conversationStage: 'details' });
      return {
        text: t('chatbot.services'),
        options: serviceOptions
      };
    }

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much') || lowerInput.includes('pricing')) {
      updateContext({ conversationStage: 'quote' });
      return {
        text: t('chatbot.pricing'),
        options: serviceOptions
      };
    }

    if (lowerInput.includes('order') || lowerInput.includes('place') || lowerInput.includes('buy') || lowerInput.includes('how do i')) {
      return {
        text: t('chatbot.order'),
        options: ["Business", "Computer Science", "Literature", "Psychology", "Other"]
      };
    }

    if (lowerInput.includes('free') || lowerInput.includes('complimentary')) {
      return {
        text: t('chatbot.free'),
        options: serviceOptions
      };
    }

    if (lowerInput.includes('discount') || lowerInput.includes('offer') || lowerInput.includes('deal')) {
      return {
        text: "Current offers:\n• 30% OFF first order for new clients\n• 30% OFF orders above $1000\n• FREE plagiarism & AI reports\n• FREE research proposals\n• Unlimited FREE revisions\n\nReady to get started with your first order?",
        options: ["Yes, let's start", "Tell me more about pricing", "What services do you offer?"]
      };
    }

    // Handle service selection
    if (serviceOptions.some(service => lowerInput.includes(service.toLowerCase()))) {
      const selectedService = serviceOptions.find(service => lowerInput.includes(service.toLowerCase()));
      updateContext({ 
        userInfo: { ...currentContext.userInfo, service: selectedService },
        conversationStage: 'quote'
      });
      return {
        text: `Great choice! ${selectedService} is one of our most popular services. To give you an accurate quote, I need a few details:\n\n• How many pages do you need?\n• What's your deadline?\n• What academic level?\n\nOr would you like me to connect you with our team for a detailed consultation?`,
        options: ["Connect me with your team", "I'll provide the details", "Tell me more about this service"]
      };
    }

    if (lowerInput.includes('connect') || lowerInput.includes('contact') || lowerInput.includes('team') || lowerInput.includes('yes')) {
      return {
        text: `Perfect! I've notified our professional team about your inquiry${currentContext.userInfo?.name ? `, ${currentContext.userInfo.name}` : ''}. They will contact you shortly with personalized assistance.\n\nFor faster service, please visit our contact page and provide your details. Is there anything else I can help you with?`,
        options: ["Go to contact page", "Tell me about pricing", "What other services do you offer?"]
      };
    }

    // Handle specific questions about academic levels, subjects, etc.
    if (lowerInput.includes('academic level') || lowerInput.includes('high school') || lowerInput.includes('college') || lowerInput.includes('graduate')) {
      return {
        text: t('chatbot.levels'),
        options: [t('pricing.calculator.level.highSchool'), t('pricing.calculator.level.undergraduate'), t('pricing.calculator.level.graduate'), t('pricing.calculator.level.phd')]
      };
    }

    if (lowerInput.includes('deadline') || lowerInput.includes('urgent') || lowerInput.includes('rush')) {
      return {
        text: t('chatbot.deadlines'),
        options: ["24 hours", "48 hours", "1 week", "2+ weeks"]
      };
    }

    // Default response with context awareness
    const userName = currentContext.userInfo?.name ? `, ${currentContext.userInfo.name}` : '';
    return {
      text: `I'd be happy to help you${userName}! I can provide information about our services, pricing, discounts, and help you place an order. What would you like to know more about?`,
      options: [
        "Services we offer",
        "Pricing information", 
        "Current discounts",
        "How to place an order"
      ]
    };
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response with context
    setTimeout(() => {
      const response = getBotResponse(inputText.toLowerCase(), context);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        options: response.options
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Variable delay for more natural feel
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleOptionClick = (option: string) => {
    handleQuickReply(option);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          {messages.length > 1 && !isOpen && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {messages.filter(m => m.sender === 'bot').length}
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[500px]'
        }`}>
          {/* Header */}
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Academic Assistant</h3>
                <p className="text-xs text-blue-100">
                  {isTyping ? 'Typing...' : 'Online now'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-blue-100 hover:text-white transition-colors"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === 'bot' && <Bot className="h-4 w-4 mt-1 flex-shrink-0" />}
                          {message.sender === 'user' && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Options */}
                    {message.options && message.options.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2 ml-6">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies for first interaction */}
              {messages.length === 1 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.slice(0, 3).map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={t('chatbot.placeholder')}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;