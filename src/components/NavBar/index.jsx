import React from "react";
import "../NavBar/styles.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";



function NavScrollExample() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Rick and Morty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/category/human">
              Humanos
            </Nav.Link>
            <Nav.Link as={Link} to="/category/alien">
              Aliens
            </Nav.Link>
            <NavDropdown title="Location" id="navbarScrollingDropdown">
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown.Item>
              <CartWidget />
            </NavDropdown.Item>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Find a Character</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
