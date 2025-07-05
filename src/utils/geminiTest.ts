import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_CONFIG } from '../config/chatbot';

/**
 * Test Gemini AI connection and response
 */
export const testGeminiConnection = async (): Promise<boolean> => {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_CONFIG.apiKey);
    const model = genAI.getGenerativeModel({ model: GEMINI_CONFIG.model });
    
    const result = await model.generateContent('Test connection - respond with "Connected"');
    const response = await result.response;
    const text = response.text();
    
    console.log('Gemini AI Test Response:', text);
    return text.toLowerCase().includes('connected');
  } catch (error) {
    console.error('Gemini AI Connection Test Failed:', error);
    return false;
  }
};

/**
 * Get Gemini model configuration
 */
export const getModelInfo = () => {
  return {
    model: GEMINI_CONFIG.model,
    hasApiKey: !!GEMINI_CONFIG.apiKey,
    apiKeyLength: GEMINI_CONFIG.apiKey?.length || 0,
  };
};

export default {
  testGeminiConnection,
  getModelInfo,
};
