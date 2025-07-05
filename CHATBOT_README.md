# Gemini AI Chatbot Integration

## Overview
This project now includes an advanced AI-powered chatbot using Google's Gemini 1.5 Flash model to provide intelligent assistance for academic services.

## Features

### 🤖 Gemini AI-Powered Chatbot
- **Smart Assistance**: Uses Google Gemini 1.5 Flash for natural language understanding
- **Academic Focus**: Trained with comprehensive knowledge about BZTech Academic Services
- **Context Awareness**: Remembers conversation history for better responses
- **Service Guidance**: Helps users navigate services, pricing, and ordering process

### 🎯 Key Capabilities
- **Service Information**: Detailed information about all academic services offered
- **Pricing Calculator**: Smart pricing guidance based on academic level and requirements
- **Order Assistance**: Step-by-step guidance for placing orders
- **WhatsApp Integration**: Seamless transition to WhatsApp for personal consultation
- **Free Services Promotion**: Highlights FREE services like research proposals and reports

### 📱 User Experience
- **Dual Chat Options**: AI Chatbot + WhatsApp Widget positioned side by side
- **Quick Start**: Pre-defined quick reply buttons for common queries
- **Real-time Responses**: Fast AI-powered responses with typing indicators
- **Error Handling**: Graceful fallback to WhatsApp contact in case of issues
- **Mobile Friendly**: Responsive design for all devices

## Technical Implementation

### Dependencies
```json
{
  "@google/generative-ai": "^0.21.0"
}
```

### Environment Variables
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Components
- **GeminiChatbot.tsx**: Main AI chatbot component
- **WhatsAppWidget.tsx**: WhatsApp contact widget
- **chatbot.ts**: Configuration and constants

### AI Training Data
The chatbot is trained with comprehensive information about:
- All academic services and pricing
- Company policies and processes
- Free service offerings
- Current discounts and promotions
- Contact information and ordering process

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install @google/generative-ai
   ```

2. **Environment Configuration**
   - Create `.env` file in project root
   - Add your Gemini API key: `VITE_GEMINI_API_KEY=your_key_here`

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Usage

### For Users
1. **AI Chatbot**: Click the blue AI assistant button (bottom-right)
2. **WhatsApp**: Click the green WhatsApp button for direct contact
3. **Integration**: AI can transfer conversations to WhatsApp for personalized service

### For Developers
- Modify `src/config/chatbot.ts` to update company information
- Update system prompt in `GeminiChatbot.tsx` for different AI behavior
- Customize UI components for branding

## Features Comparison

| Feature | Old Chatbot | New Gemini Chatbot |
|---------|-------------|-------------------|
| Intelligence | Rule-based responses | AI-powered natural language |
| Context | Limited | Full conversation memory |
| Responses | Pre-programmed | Dynamic and contextual |
| Learning | Static | Adaptive to user needs |
| Integration | Standalone | WhatsApp + Email integration |
| Personalization | Basic | Name recognition + tailored responses |

## Security

- API key stored in environment variables
- `.env` file included in `.gitignore`
- No sensitive data exposed to client
- Graceful error handling

## Future Enhancements

1. **Analytics Integration**: Track user interactions and common queries
2. **Multilingual Support**: Add support for multiple languages
3. **Voice Integration**: Voice input/output capabilities
4. **CRM Integration**: Connect to customer management system
5. **Advanced Personalization**: User accounts and conversation history

## Support

For technical issues or customization requests, contact the development team or refer to the Google Generative AI documentation.
