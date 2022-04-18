import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">CODE TUTOR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={CustomNavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={CustomNavLink} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomNavLink} to="about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomNavLink} to="login">Login</Nav.Link>
                        <Nav.Link as={CustomNavLink} to="register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;