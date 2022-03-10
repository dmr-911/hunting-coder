import { auth } from "../../services/auth";
import * as types from "../types";
import { GoogleAuthProvider, updateProfile, signInWithPopup, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect } from "react";

const newAuth = getAuth();

//login user
export const login = (email, password) => async (dispatch) => {
  try {
    await signInWithEmailAndPassword(email, password);
    dispatch({ type: types.LOGIN, payload: auth.currentUser });
  } catch (error) {
    console.log(error);
  }
};

//logout user
export const logout = () => async (dispatch) => {
  dispatch({ type: types.LOGOUT });
};

//register user
export const registration = (name, email, password) => async (dispatch) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    dispatch({ type: types.SIGNUP, payload: auth.currentUser });
  } catch (error) {
    console.log(error);
  }
};

// google sign in
const googleProvider = new GoogleAuthProvider();
export const googleSignIn = async (dispatch) =>{
    try{    
        await signInWithPopup(newAuth, googleProvider)
        .then((user) => {
         dispatch({type: types.GOOGLE_SIGN_IN, payload : user})
        }).catch(error=>{
            console.log(error.message);
        })
    }
    catch(error){
        console.log(error.message);
    }
};

