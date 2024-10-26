import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0', // Allow access from any machine
//     port: 8080, // You can choose any port you prefer
//   },
// });