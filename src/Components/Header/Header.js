import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomNavLink from '../../Utilities/CustomNavLink/CustomNavLink';

const Header = () => {
    const [user] = useAuthState(auth);

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
                        {
                            user ?
                                <Nav.Link onClick={() => signOut(auth)}>Sign Out</Nav.Link> :
                                <>
                                    <Nav.Link as={CustomNavLink} to="login">Login</Nav.Link>
                                    <Nav.Link as={CustomNavLink} to="register">Register</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;