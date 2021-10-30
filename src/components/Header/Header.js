import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=''>
      <Navbar bg='light' variant='light'>
        <Container className='d-flex align-items-center justify-content-between '>
          <NavLink to='/' className='text-decoration-none'>
            <h3 className='text-color1'>TRAVELHOLIC</h3>
          </NavLink>
          <Nav className='px-4'>
            <NavLink
              to='/home'
              className='px-2 text-decoration-none text-color1'>
              Home
            </NavLink>
            <NavLink
              to='/plans'
              className='px-2 text-decoration-none text-color1'>
              Plans
            </NavLink>
            <NavLink
              to='/about'
              className='px-2 text-decoration-none text-color1'>
              About
            </NavLink>
            <NavLink
              to='/contact'
              className='px-2 text-decoration-none text-color1'>
              Contact
            </NavLink>

            <div>
              <Button>LogOut</Button>
              <NavLink to='' className='px-2 text-decoration-none text-color1'>
                Dashboard
              </NavLink>
              <NavLink
                to='/addplan'
                className='px-2 text-decoration-none text-color1'>
                Add Plan
              </NavLink>

              <Button>Log In</Button>
              <Button>Sign Up</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
