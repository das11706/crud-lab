// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import manageRestaurant from './reducers/manageRestaurant';
// import rootReducer from './reducers/manageRestaurant';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore(rootReducer);


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurant);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);