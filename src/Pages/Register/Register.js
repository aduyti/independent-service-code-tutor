import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const checkRegister = data => {
        const { registerEmail, registerPassword } = data;
        console.log(registerEmail, registerPassword);
    }
    return (
        <div className="container text-start">
            <h1 className="text-primary text-center">Register</h1>
            <Form className="w-50 mx-auto" onSubmit={handleSubmit(checkRegister)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        {...register("registerEmail",
                            { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                    {errors.registerEmail?.type === "pattern" && (<p className="text-danger">Enter a valid email</p>)}
                    {errors.registerEmail?.type === "required" && (<p className="text-danger">Email required</p>)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        {...register("registerPassword",
                            { required: true, minLength: 6 })} />
                    {errors.registerPassword?.type === "required" && (<p className="text-danger">Password required</p>)}
                    {errors.registerPassword?.type === "minLength" && (<p className="text-danger">Password must be at least 6 characters</p>)}
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Register
                </Button>
            </Form>
            <p className="text-center">Already Registered? <Link to="/login" className="text-decoration-none">Please Login</Link></p>
        </div >
    );
};

export default Register;