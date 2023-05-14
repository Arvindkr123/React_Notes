import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const userName = localStorage.getItem('email') ? localStorage.getItem('email') : 'admin@admin.com'
    const userPassword = localStorage.getItem('password') ? localStorage.getItem('password') : 'admin';
    const submitHandler = e => {
        e.preventDefault();
        if (userName === email && password === userPassword) {
            toast.success('Login Success');
            navigate('/profile');
        } else {
            toast.error('Invalid Email or Password')
        }
    }
    return (
        <>
            <div className="form__container d-flex felx-column align-items-center justify-content-center">
                <form>
                    <h4 className="form__heading">User Management System </h4>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form__signupLink mb-3">
                        <p>
                            Don't Have An Account? <Link to="/">Signup !</Link>
                        </p>
                    </div>
                    <button type="submit" className="form__button" onClick={submitHandler}>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default LoginPage;