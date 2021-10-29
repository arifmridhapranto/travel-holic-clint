import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=''>
      <Navbar bg='light' variant='light'>
        <Container className='d-flex align-items-center justify-content-between'>
          <NavLink to='/home' className=''>
            <h3>TRAVELHOLIC</h3>
          </NavLink>
          <Nav className='px-4'>
            <NavLink to='/home' className='px-2'>
              Home
            </NavLink>
            <NavLink to='/plans' className='px-2'>
              Plans
            </NavLink>
            <NavLink to='/about' className='px-2'>
              About
            </NavLink>
            <NavLink to='/contact' className='px-2'>
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
