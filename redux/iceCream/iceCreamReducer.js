import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCream : 33
};
export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICE_CREAM :
            return {
                ...initialState,
                numOfIceCream : state.numOfIceCream - 1
            }
        default : return state
    }
};