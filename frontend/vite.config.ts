import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "static/react",
  },
  define: {
    "process.env": {
      REACT_APP_MERCADO_PAGO_ACCESS_TOKEN: JSON.stringify(
        process.env.REACT_APP_MERCADO_PAGO_ACCESS_TOKEN
      ),
    },
  },
});
