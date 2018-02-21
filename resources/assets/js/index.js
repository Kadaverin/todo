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



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,  compose(  applyMiddleware(thunk,
//       window.devToolsExtension ? window.devToolsExtension() : f => f)));

// РАБОТАЕТ , НО СТРАННО 
// let devtools = window['devToolsExtension'] ? window['devToolsExtension']() : (f)=>f;
// let middleware = applyMiddleware(thunk);
// const store = middleware(devtools(createStore))(reducer, init);

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
