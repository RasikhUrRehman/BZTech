import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your academic assistant. I can help you with information about our services, pricing, and placing orders. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "What services do you offer?",
    "How much does it cost?",
    "How to place an order?",
    "What are your free services?",
    "Do you offer discounts?"
  ];

  const botResponses: { [key: string]: string } = {
    "services": "We offer comprehensive academic services including:\n• Academic Assignments\n• Thesis Writing\n• Research Papers\n• Dissertation Help\n• Essay Writing\n• Research Publication\n• Online Teaching\n• Plagiarism & AI Removal\n\nWould you like to know more about any specific service?",
    "pricing": "Our pricing varies based on:\n• Academic level (High School, College, Graduate)\n• Subject complexity\n• Deadline urgency\n• Additional services\n\nWe also offer:\n• 30% off first orders\n• 30% off orders above $1000\n• Free services: Plagiarism reports, AI reports, Research proposals\n\nWould you like a custom quote?",
    "order": "To place an order:\n1. Contact us with your requirements\n2. Get a personalized quote\n3. Confirm and make payment\n4. Receive your completed work\n\nWould you like me to connect you with our team?",
    "free": "Our FREE services include:\n• Plagiarism & AI detection reports\n• Assignment guidance consultation\n• Research proposal (up to 1 page)\n• Unlimited revisions on paid work\n\nThese are always included at no extra cost!",
    "discounts": "Current offers:\n• 30% OFF first order for new clients\n• 30% OFF orders above $1000\n• FREE plagiarism & AI reports\n• FREE research proposals\n• Unlimited FREE revisions\n\nReady to get started?"
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

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputText.toLowerCase());
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    if (input.includes('service') || input.includes('what do you offer')) {
      return botResponses.services;
    } else if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      return botResponses.pricing;
    } else if (input.includes('order') || input.includes('place') || input.includes('buy')) {
      return botResponses.order;
    } else if (input.includes('free') || input.includes('complimentary')) {
      return botResponses.free;
    } else if (input.includes('discount') || input.includes('offer') || input.includes('deal')) {
      return botResponses.discounts;
    } else if (input.includes('connect') || input.includes('contact') || input.includes('team')) {
      // Simulate sending email
      return "Perfect! I've notified our professional team about your inquiry. They will contact you shortly with personalized assistance. Please provide your details on our contact page for faster service.";
    } else {
      return "I'd be happy to help! I can provide information about our services, pricing, discounts, and help you place an order. What would you like to know more about?";
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex items-center space-x-3">
            <Bot className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Academic Assistant</h3>
              <p className="text-xs text-blue-100">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
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
          </div>

          {/* Quick Replies */}
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
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;