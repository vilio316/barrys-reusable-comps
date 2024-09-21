import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TestForm } from './TestForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestForm/>
    <App />
  </StrictMode>,
)
