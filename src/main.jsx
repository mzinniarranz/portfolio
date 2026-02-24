import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from './context/ThemeContext.jsx'
import './i18n/config.js'
import './index.css'
import App from './App.jsx'

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
