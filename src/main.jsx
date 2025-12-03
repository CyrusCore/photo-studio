import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Pastikan file CSS kita diimpor
import { BrowserRouter } from 'react-router-dom' // Impor Browser Router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Bungkus App dengan BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)