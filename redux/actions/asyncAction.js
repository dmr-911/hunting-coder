import { REQUEST_API_USERS, REQUEST_FAILURE, REQUEST_SUCCESS } from "../types"

export const requestApiUsers = () =>{
    return{

        type : REQUEST_API_USERS
    }
};

export const requestSuccess = (users) =>{
    return {
        type : REQUEST_SUCCESS,
        payload : users
    }
};

export const requestFailure = error =>{
    return {
        type : REQUEST_FAILURE,
        payload : error
    }
};