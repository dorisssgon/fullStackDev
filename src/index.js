import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import reducers from './reducer'
import './config'
import Login from './container/login/login.js';
import Register from './container/register/register.js';
import AuthRoute from './component/authroute/authroute.js';
import './index.css';
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
function Boss(){
   return <h2>Boss page</h2>
}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
           <div>
               <AuthRoute></AuthRoute>
               <Route path='/boss' component={Boss}></Route>
               <Route path="/login" component={Login}></Route>
               <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>)
, document.getElementById('root'));

