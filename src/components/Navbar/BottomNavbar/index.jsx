import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <Navbar expand="lg" className={styles.bottomNav}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navlinks}>
            <Nav.Link className={styles.active} active href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              className={styles.dropdown}
              title="News"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">All News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Olympia Tournaments
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">E-books</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav.Link href="#home">
          <AiOutlineShoppingCart/> Cart
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
