import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
 ],

 theme: {
  extend: {
    colors: {
      'yelowyael': '#FCFF0F',
      'greenyael' : '#2fc991'
    },
    fontFamily : {
      'Montserrat' : 'Montserrat',
    },
     plugins: [react()],
  server: {
    historyApiFallback: true
  }
    
  },
},
  
})
