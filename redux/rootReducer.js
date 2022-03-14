import { combineReducers } from "redux"
import buyCakeReducer from "./cake/cakeReducer"
import { iceCreamReducer } from "./iceCream/iceCreamReducer"

const rootReducer = combineReducers({
    cake : buyCakeReducer, 
    iceCream : iceCreamReducer});

export default rootReducer;