import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import  store, { persistor } from './store';
import './firebase';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* подключение роутинга*/}
      <Provider store={store}> {/* вызов хранилища, хранятся данные о пользователе*/}
        <PersistGate loading = {null} persistor = {persistor}> {/* получает данные о пользователе и хранит их*/}
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

