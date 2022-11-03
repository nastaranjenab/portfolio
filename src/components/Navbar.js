import React from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export const Navigation = () => {
    return (
        <div>
            <Navbar className='navbar' expand="lg">
                <Container className='nav-container'>
                    <Navbar.Brand href="#home" className='nav-brand'>Nastaran Jenabali</Navbar.Brand>
                    <Navbar.Toggle className="toggle-bar" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" color="#25edf0" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="#about" color="#25edf0" className="nav-link">About</Nav.Link>
                            <Nav.Link href="#projects" color="#25edf0" className="nav-link">Projects</Nav.Link>
                            <Nav.Link href="#contact" color="#25edf0" className="nav-link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}