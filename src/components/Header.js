import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { BiMenuAltRight } from "react-icons/bi";

const Header = ({ close, setClose }) => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid>
        <Nav className="me-auto">
          <BiMenuAltRight
            onClick={() => {
              setClose(!close);
            }}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
