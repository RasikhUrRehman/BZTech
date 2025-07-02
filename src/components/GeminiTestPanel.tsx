import React, { useState } from 'react';
import { testGeminiConnection, getModelInfo } from '../utils/geminiTest';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

const GeminiTestPanel: React.FC = () => {
  const [testResult, setTestResult] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const modelInfo = getModelInfo();

  const runTest = async () => {
    setIsLoading(true);
    setTestResult(null);
    
    try {
      const result = await testGeminiConnection();
      setTestResult(result);
    } catch (error) {
      setTestResult(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-4 left-4 bg-white rounded-lg shadow-lg border p-4 z-50 max-w-sm">
      <h3 className="text-lg font-semibold mb-3">Gemini AI Status</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Model:</span>
          <span className="font-mono">{modelInfo.model}</span>
        </div>
        <div className="flex justify-between">
          <span>API Key:</span>
          <span className={`font-mono ${modelInfo.hasApiKey ? 'text-green-600' : 'text-red-600'}`}>
            {modelInfo.hasApiKey ? `Configured (${modelInfo.apiKeyLength} chars)` : 'Missing'}
          </span>
        </div>
      </div>

      <button
        onClick={runTest}
        disabled={isLoading || !modelInfo.hasApiKey}
        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <Loader className="h-4 w-4 animate-spin" />
            <span>Testing...</span>
          </>
        ) : (
          <span>Test Connection</span>
        )}
      </button>

      {testResult !== null && (
        <div className={`mt-3 p-2 rounded flex items-center space-x-2 ${
          testResult ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {testResult ? (
            <>
              <CheckCircle className="h-4 w-4" />
              <span>Connection successful!</span>
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4" />
              <span>Connection failed</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiTestPanel;
