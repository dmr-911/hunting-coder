import * as types from "../types";

const initialState = {
    user: [],
    loginUser: {},
    isAuthenticated: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.SIGNUP:
        return {
          ...state,
          loginUser: action.payload,
          isAuthenticated: true,
        };
  
      case types.LOGIN:
        return {
          ...state,
          loginUser: action.payload,
          isAuthenticated: true,
          success: true,
        };

      case types.GOOGLE_SIGN_IN:
        return {
          ...state,
          user : action.payload,
          loginUser: action.payload.displayName,
          isAuthenticated: true
        };
  
      case types.LOGOUT:
        return {
          ...state,
          loginUser: {},
          isAuthenticated: false,
        };
        
      case types.USER:
        return {
          ...state,
          user: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;