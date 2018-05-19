import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Link,Switch,Redirect} from 'react-router-dom'
import Auth from "./Auth";
import Dashborad from "./Dashborad";
import {counter} from "./store.js"

const store = createStore(counter, compose(
    applyMiddleware(thunk)),
    window.devToolExtension?window.devToolExtension():f=>f
)
   

ReactDOM.render(
     <Provider store={store}>
        <BrowserRouter>
            <Switch>
             <Route path="/login"exact component={Auth} ></Route>
             <Route path="/dashboard" component={Dashborad} ></Route>
             <Redirect to="/dashboard"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));