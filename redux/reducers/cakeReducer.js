import { BUY_CAKE, BUY_ICE_CREAM } from "../types";

const cakeState = {
    numOfCakes : 10
};
const iceCreamState = {
    numOfIce : 30
}


export const cakeReducer = (state= cakeState, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        default: return state;
    }
};

export const iceCreamReducer = (state = iceCreamState, action) =>{
    switch(action.types){
        case BUY_ICE_CREAM  :
            return{
                ...state,
                numOfIce : state.numOfIce -1
            }
        default : return state;
    }
};