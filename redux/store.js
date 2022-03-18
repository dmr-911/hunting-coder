import { applyMiddleware, createStore } from "redux";
import buyCakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));