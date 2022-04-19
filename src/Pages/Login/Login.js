import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const checkLogin = data => {
        const { loginEmail, loginPassword } = data;
        signInWithEmailAndPassword(loginEmail, loginPassword)
    }
    const forgotPasswordClick = event => {
        console.log("fgp");
    }

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="container text-start">
            <h1 className="text-primary text-center">Login</h1>
            {loading && <Loading />}
            {error && <p className="text-center text-danger">{error.message}</p>}
            <Form className="w-50 mx-auto" onSubmit={handleSubmit(checkLogin)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        {...register("loginEmail",
                            { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                    {errors.loginEmail?.type === "pattern" && (<p className="text-danger">Enter a valid email</p>)}
                    {errors.loginEmail?.type === "required" && (<p className="text-danger">Email required</p>)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        {...register("loginPassword",
                            { required: true })} />
                    {errors.loginPassword?.type === "required" && (<p className="text-danger">Password required</p>)}
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Login
                </Button>
            </Form>
            <Button variant="link" type="" className="d-block mx-auto text-decoration-none" onClick={forgotPasswordClick} >Forgot your password?</Button>
            <p className="text-center">New Here? <Link to="/register" className="text-decoration-none">Please Register</Link></p>
        </div>
    );
};

export default Login;