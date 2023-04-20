import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Head from './head'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>
)
