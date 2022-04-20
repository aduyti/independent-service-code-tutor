import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("Thank You for Booking My Course")
        navigate('/');
    }
    return (
        <div className="container">
            <h1 className="text-primary text-center">Fill this Form to Book</h1>

            <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Your Expectation From Me</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Checkout;