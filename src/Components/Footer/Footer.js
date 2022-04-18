import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="mt-5 p-3 bg-light">
            <Container>
                <Row style={{ color: "darkgray" }}>
                    <Col md={10} className="my-auto">Copyright &copy; {year} Code Tutor</Col>
                    <Col md={2} className="text-md-start py-3">
                        <p>Contacts:</p>
                        <p>+010101001010</p>
                        <p>tutor@codetutor.edu</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;