import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import store from './Redux/Store';
import { store } from './Redux/ReduxStore';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="947375194288-qlt1e90isusp9c7ipqggqv6diivgfafp.apps.googleusercontent.com">
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

reportWebVitals();
