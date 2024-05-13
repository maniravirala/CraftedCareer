import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './contexts/Theme/DarkModeContext';
import { AuthProvider } from './contexts/authContext/AuthContext';
import { FormDataProvider } from './contexts/Data/FormDataContext';
import { TemplateOrderProvider } from './contexts/Data/TemplateOrderContext';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { Toaster } from 'react-hot-toast';

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <AuthProvider>
        <FormDataProvider>
          <TemplateOrderProvider>
          <DarkModeProvider>
            <BrowserRouter>
              <App />
              <Toaster
                toastOptions={{
                  style: {
                  },
                  className: 'text-red-500 rounded-lg shadow-lg !px-4 !py-2 text-sm font-medium !dark:bg-slate-700 !dark:text-gray-200 !bg-white !text-gray-800',
                }}
              />
            </BrowserRouter>
          </DarkModeProvider>
          </TemplateOrderProvider>
        </FormDataProvider>
      </AuthProvider>
    </PrimeReactProvider>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
