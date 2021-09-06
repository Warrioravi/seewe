import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './redux/rootReducer'

let myStore= createStore(rootReducer,applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>

    
  ,
  document.getElementById('root')
);


