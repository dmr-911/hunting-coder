import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";
import { cakeReducer, iceCreamReducer } from "./reducers/cakeReducer";
import { buyCake } from "./actions/cakeAction";

const rootReducer= combineReducers({
    cart : cartReducer,
    auth : authReducer,
    cakeStore : cakeReducer,
    iceReducer : iceCreamReducer
})

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
const store = createStore(rootReducer);
const unsubscribe = store.subscribe(()=>console.log(store.getState()));
buyCake();
buyCake();
buyCake();
unsubscribe();


export default store;