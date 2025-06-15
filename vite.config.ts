import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Default Vite port
    cors: true, // Enable CORS for all origins
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control',
      'Access-Control-Allow-Credentials': 'true'
    }
  },
  preview: {
    host: '0.0.0.0', // Also enable for preview mode
    port: 4173,
    cors: true
  }
});
