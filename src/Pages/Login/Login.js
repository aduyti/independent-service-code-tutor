import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const checkLogin = (data) => {
        const { loginEmail, loginPassword } = data;
        console.log(loginEmail, loginPassword);
    }
    return (
        <div className="container text-start">
            <h1 className="text-primary text-center">Login</h1>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <a className="text-decoration-none" href="#">Forgot your password?</a>
        </div>
    );
};

export default Login;