import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware  } from 'redux';
import reducer from './reducers'
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const middleware = applyMiddleware(thunk)(enhancer);

const store = middleware(reducer);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
