import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgrPlugin()],
  base: '/layout_test/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
