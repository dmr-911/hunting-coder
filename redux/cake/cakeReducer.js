import { BUY_CAKE } from "./cakeType";

const initialState = {
    numOfCakes : 10
};

const buyCakeReducer =(state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE :
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
        
        default : return state
    }
};

export default buyCakeReducer;