import initializationAuthentication from "../firebase/firebase.init";
import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

initializationAuthentication();

const auth = getAuth();

export { auth };