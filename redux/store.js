import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";
import { cakeReducer, iceCreamReducer } from "./reducers/cakeReducer";
import { buyCake } from "./actions/cakeAction";
import logger from 'redux-logger';
import { requestApiUsersReducer } from "./reducers/asyncReducer";

const rootReducer= combineReducers({
    cart : cartReducer,
    auth : authReducer,
    cakeStore : cakeReducer,
    iceReducer : iceCreamReducer,
    users : requestApiUsersReducer
});

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
const store = createStore(rootReducer, applyMiddleware(logger));
const unsubscribe = store.subscribe(()=>console.log(store.getState()));
buyCake();
buyCake();
buyCake();
unsubscribe();


export default store;