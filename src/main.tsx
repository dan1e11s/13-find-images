import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import PhotosContextProvider from './context/PhotosContextProvider.tsx';
import ThemeContextProvider from './context/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PhotosContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </PhotosContextProvider>
  </React.StrictMode>
);
