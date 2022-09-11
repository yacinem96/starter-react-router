import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

export const Navb = () => {
  return (
    <div>
              <Navbar bg="dark" variant="dark">
        <Container>
         <Navbar.Brand as={NavLink} to="/" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink}  to="/admin">Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
