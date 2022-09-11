import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from '../../../services/auth.service';

import { navItems } from '../../../data';
import './style.css'

export const Navb = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("user"));
  return (
    <Navbar bg="dark" variant="dark " expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/"><span className="bi">Bi</span>3li</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems && navItems.map((item) => {
              return (<Nav.Link href={item.path}>{item.text}</Nav.Link>)
            })
            }

            {/* <Nav.Link href="#panier"><i className="fa-solid fa-cart-shopping"></i></Nav.Link> */}
          </Nav>
          <Form className="d-flex ">
            <div className='position-relative'>
              <Nav.Link className='cart' variant="dark  ">
                <i className="fa-solid fa-cart-shopping "></i>
                <span style={{left:"18%",bottom:"5px"}} class="position-relative  translate-middle badge rounded-pill bg-danger">
    0
    
  </span>
              </Nav.Link>
            </div>

            {token ? <div >

              <NavDropdown className='drop text-white' title={<span>user <i className="fa-solid fa-circle-user  "></i></span>} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logout} href="/">Logout</NavDropdown.Item>
                <NavDropdown.Item href="/profile">     Profile   </NavDropdown.Item>

              </NavDropdown>


              {/* <Nav.Link variant="dark " className='text-white ' onClick={logout} href="/"> Logout <i className="fa-solid fa-circle-user  "></i></Nav.Link>  */}
            </div>



              : <Nav.Link onClick={() => navigate("/login")} className='cart position-relative' variant="dark "> Login <i className="fa-solid fa-right-to-bracket"></i></Nav.Link>}

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}