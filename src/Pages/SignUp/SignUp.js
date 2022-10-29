import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoWhite from '../../images/logo2.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        HookError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    })

    const handleName = (e) => {
        if (e.target.value !== "") {
            setUserInfo({ ...userInfo, name: e.target.value });
            setErrors({ ...errors, nameError: "" })
        }
        else {
            setErrors({ ...errors, nameError: "Name is required." })
            setUserInfo({ ...userInfo, name: "" });
        }
    }

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

    const handleConfirmPassrd = (e) => {
        if (userInfo.password === e.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, confirmPasswordError: "" });
        }
        else {
            setErrors({ ...errors, confirmPasswordError: "Password Mismatch" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }

    }

    const handleForm = (e) => {
        e.preventDefault()
        if (userInfo.password === userInfo.confirmPassword) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }

    }

    useEffect(() => {
        if (user) {
            navigate('/')
            toast.success('Signup Successfully!')
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
                            <input onBlur={handleName} type="text" placeholder='Name' />
                        </div>
                        {errors.nameError && <p className='error-message'>{errors.nameError}</p>}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleEmail} type="email" placeholder='Email' />
                        </div>
                        {errors.emailError && <p className='error-message'>{errors.emailError}</p>}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handlePassword} type="password" placeholder='Password' />
                        </div>
                        {errors.passwordError && <p className='error-message'>{errors.passwordError}</p>}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleConfirmPassrd} type="password" placeholder='Confirm Password' />
                        </div>
                        {errors.confirmPasswordError && <p className='error-message'>{errors.confirmPasswordError}</p>}
                    </div>

                    <div className="input-field">
                        <input type="submit" value="Signup" />
                    </div>
                </form>
            </div>
            <Link to='/login'>Already have an account?</Link>
        </div>
    );
};

export default SignUp;