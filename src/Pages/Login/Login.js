import React, { useEffect, useState } from 'react';
import './Login.css'
import logoWhite from '../../images/logo2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import toast from 'react-hot-toast';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        HookError,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";


    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    })


    const handleEmail = (e) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        const validEmail = emailRegEx.test(e.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, emailError: "" });
        }
        else {
            setErrors({ ...errors, emailError: "Enter a valid Email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }

    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, passwordError: "" });
        }
        else {
            setErrors({ ...errors, passwordError: "Password must be 6 character" });
            setUserInfo({ ...userInfo, password: "" });
        }

    }
    const handleForm = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)

    }

    useEffect(() => {
        if (user) {
            toast.success('Login Successfully!')
            navigate(from, { replace: true });
        }
    }, [user])

    useEffect(() => {
        const dbError = HookError;
        if (dbError) {
            switch (dbError?.message) {
                case "auth/invalid-email":
                    toast.error("Invalid Email")
                    break;
                case "auth/invalid-password":
                    toast.error("Wrong Password")
                    break;
                default:
                    toast.error("Something wrong. Try again.")
            }
        }
    }, [HookError])

    return (
        <div className='form'>
            <div className="form-container">
                <img src={logoWhite} alt="" />
                <form onSubmit={handleForm}>
                    <div>
                        <div className="input-field">
                            <input onBlur={handleEmail} type="email" placeholder='Email' />
                        </div>
                        {errors.emailError && <p className='error-message'>{errors.emailError}</p>}
                    </div>

                    <div>
                        <div onBlur={handlePassword} className="input-field">
                            <input type="password" placeholder='Password' />
                        </div>
                        {errors.passwordError && <p className='error-message'>{errors.passwordError}</p>}
                    </div>


                    <div className="input-field">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
            <Link to='/signup'>Don't have any account?</Link>
        </div>
    );
};

export default Login;