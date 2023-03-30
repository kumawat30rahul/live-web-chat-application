import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Component/Context/AuthContext';
import { ChatContextProvider } from './Component/Context/ChatContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
    <App />
    </ChatContextProvider>
  </AuthContextProvider>
);


