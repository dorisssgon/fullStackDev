import {combineReducers} from 'redux'
import {counter} from "/store"
import {Auth} from "./Auth"


export default combineReducers({counter,Auth})