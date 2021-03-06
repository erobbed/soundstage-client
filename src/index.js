import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/usersReducer';
import concertsReducer from './reducers/concertsReducer';
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({users: usersReducer, concerts: concertsReducer, auth: authReducer});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
