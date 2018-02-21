
// точка входа 
require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Main from './containers/Main';
import { Provider } from 'react-redux';
import reducer from './reducers'
import {configureStore} from './helpers/configureStore';


const store = configureStore(reducer);

ReactDOM.render( 
  <Provider store={store}>
    <Main />
  </Provider>,
   document.getElementById('root'));

