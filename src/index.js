import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './contexts/Theme/DarkModeContext';
import { AuthProvider } from './contexts/authContext/AuthContext';
import { FormDataProvider } from './contexts/Data/FormDataContext';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <PrimeReactProvider>
    <AuthProvider>
      <FormDataProvider>
        <DarkModeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DarkModeProvider>
      </FormDataProvider>
    </AuthProvider>
    </PrimeReactProvider>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
