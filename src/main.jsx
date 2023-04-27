import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Head from './head'
import './index.css'
import ReactGA from "react-ga4"

ReactGA.initialize("API_KEY_HERE")
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>
)
