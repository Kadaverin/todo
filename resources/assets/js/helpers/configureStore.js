import { createStore , applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';


const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
export const configureStore = applyMiddleware(thunk)(enhancer);
