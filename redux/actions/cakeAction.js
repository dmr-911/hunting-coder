import { BUY_CAKE, BUY_ICE_CREAM } from "../types"

export const buyCake = () =>{
    return{
        type : BUY_CAKE,
        info : 'Cake buyed'
    }
};

export const buyIceCream = () =>{
    return {
        type : BUY_ICE_CREAM,
        info : 'Ice cream buyed'
    }
};