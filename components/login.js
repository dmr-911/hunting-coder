import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { googleSignIn, login } from '../redux/actions/authAction';
import store from '../redux/store';

const LoginCompo = () => {
    console.log(store.getState());
    const dispatch = useDispatch();
    const {handleSubmit, register} = useForm();
    const handleLogin = data => {
        console.log(data.email, data.password);
        dispatch(login(data.email, data.password))
    };
    const handleGoogleSignIn = () =>{
        dispatch(googleSignIn)
    };


    return (
        <div className="container">
            <div className="max-w-2xl rounded-lg bg-slate-300 p-5 mx-auto">
                <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(handleLogin)}>
                    <input type="email" id="" {...register("email")}/>
                    <input type="password" id="" {...register("password")}/>
                    <button type="submit">Login</button>
                </form>
            </div>
            <button onClick={handleGoogleSignIn}>Google signin</button>
        </div>
    );
};

export default LoginCompo;