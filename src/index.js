import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider } from 'react-redux';
import {configureStore} from './store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';

const indexStore=configureStore();
const indexPersistor=persistStore(indexStore);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <PersistGate
        loading={<div>Loading SpaceX data, great power and fortune will come...</div>}
        persistor={indexPersistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
