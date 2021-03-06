import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducers } from './reducers/cartReducers'

const reducer = combineReducers({
    cart:cartReducers
})

let initialState={
    //cartItems come from cartAction setItem
    cart:{
        cartItems:localStorage.getItem('cartItems')?
        JSON.parse(localStorage.getItem('cartItems')):[],
    }
    
   
}
  
const middleware =[thunk]

const store=createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store