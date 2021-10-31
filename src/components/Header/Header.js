import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className='py-2'>
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
            {user.email ? (
              <div className='d-flex'>
                <p className='inline'>{user?.displayName}</p>
                <NavDropdown title='dashboard' id='navbarScrollingDropdown'>
                  <NavDropdown.Item>
                    <NavLink
                      to='/mybookings'
                      className='px-2 text-decoration-none text-color1'>
                      My Bookings
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to='/manageorders'
                      className='px-2 text-decoration-none text-color1'>
                      Manage All Bookings
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to='/addplan'
                      className='px-2 text-decoration-none text-color1'>
                      Add Plan
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Button onClick={logOut}>LogOut</Button>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            ) : (
              <Link to='/login'>
                <Button variant='primary'>Sign In</Button>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
