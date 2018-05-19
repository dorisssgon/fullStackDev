// create store
import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
//counter is a reducer, according to the old state and action, return an new state
export function counter(state = 0, action){
  switch (action.type){
    case "add the gun":
        return state+1
    case "reduce the gun":
        return state-1
    default:
        return 10
  }
}
// create store
// const store= createStore(counter ,applyMiddleware(thunk));
// const init = store.getState();

// // dispatch event pass action   可以没有payload？
// store.dispatch({type:"add the gun"})  
//action creator
export function addGun(){
    return {type:'add the gun'};
}
export function removeGun(){
    return {type:'reduce the gun'};
}
// the difference between non-async is that it return an function
// deal with async

// when use addGunAsync(), should return a function called function(dispatch) why return the result? because thunk?
export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}
// const store= createStore(counter);
// reactDom.render(<App store = {store}/>, document.getElementById('root'));
//执行之后还要订阅  store.subscribe(render)  才行