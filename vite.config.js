import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import {fileURLToPath} from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,"./src"),
      '@components': path.resolve(__dirname,"./src/components"),
      '@assets': path.resolve(__dirname,"./src/assets"),
      '@pages': path.resolve(__dirname,"./src/pages"),
      '@stories': path.resolve(__dirname,"./src/stories"),
    }
  }
})
