import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import tikLogo from '../../assets/img/tikLogo.png';

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={tikLogo} className="" alt="logo" width="150px" />
      </Navbar.Brand>
        <Navbar.Toggle aria_controls = "basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/tickets">
              <Nav.Link>Tickets</Nav.Link>
            </LinkContainer>

            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};
