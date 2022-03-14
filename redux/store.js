import { createStore } from "redux";
import buyCakeReducer from "./cake/cakeReducer";

// const rootReducer = () =>{
//     buyCake : buyCakeReducer
// }

export const store = createStore(buyCakeReducer);