import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="mt-5 p-3 bg-light">
            <Row style={{ color: "darkgray" }} className="container mx-auto">
                <Col md={8} className="my-auto">Copyright &copy; {year} Code Tutor</Col>
                <Col md={4} className="text-md-start py-3">
                    <p>Contacts:</p>
                    <p>+010101001010</p>
                    <p>tutor@codetutor.edu</p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;