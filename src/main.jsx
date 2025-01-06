import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WebDataProvider from './Store/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebDataProvider>
    <App />
    </WebDataProvider>
  </StrictMode>,
)
