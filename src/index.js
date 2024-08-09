import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ModalProvider, AuthProvider, GeneralErrorProvider } from './contexts';
import store from './store';
import App from './App';
import './tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GeneralErrorProvider>
        <ModalProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ModalProvider>
      </GeneralErrorProvider>
    </AuthProvider>
  </React.StrictMode>,
);
