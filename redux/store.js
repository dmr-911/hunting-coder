import { createStore } from "redux";
import buyCakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";

export const store = createStore(rootReducer);