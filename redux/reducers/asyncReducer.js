import { REQUEST_API_USERS, REQUEST_FAILURE, REQUEST_SUCCESS } from "../types";

const initialState = {
    loading : true,
    users : [],
    error : ''
};

export const requestApiUsersReducer = (state = initialState, action) =>{
    switch(action.types){
        case REQUEST_API_USERS :
        return {
            ...state, 
            loading : true
        };

        case REQUEST_SUCCESS : 
        return {
            ...state,
            loading : false,
            users : action.payload,
            error : ''
        };

        case REQUEST_FAILURE :
            return{
                ...state,
                loading : false,
                users : [],
                error : action.payload
            };

        default : return state;
    }
}