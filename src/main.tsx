import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppProvider } from './context/AppContext.jsx';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <ToastContainer />
      </AppProvider>
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>,
)
