import React from 'react'
import './NavbarMenu.css';
import LogoHorizontal from '../components/img/logo-horizontal.png';
import SearchIcon from '../components/img/search-icon.png';
import UserIcon from '../components/img/user-icon.png';
import SupportIcon from '../components/img/support-icon.png';
import ShoppingIcon from '../components/img/shopping-icon.png';
import MapIcon from '../components/img/map-icon.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavbarMenu = () => {
  return (
    <div className='navbarMenu'>
      <Navbar expand="lg" className="bg-body-tertiary w-100">
        <Container fluid>
          <Navbar.Brand href="#"><img src={LogoHorizontal} height="60px" alt="logo" /></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="WomenSectionScreen">Para ellas</NavDropdown.Item>
              <NavDropdown.Item href="MenSectionScreen">Para ellos</NavDropdown.Item>
              <NavDropdown.Item href="UnisexSectionScreen">FraganciasUnisex</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="ContactScreen">Contacto</NavDropdown.Item>
              <NavDropdown.Item href="AboutUsScreen">Acerca de nosotros</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><img src={SearchIcon}  alt="search-icon" /></Button>
            </Form>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><img src={UserIcon}  alt="user-icon" /></Nav.Link>
              <Nav.Link href="#action2"><img src={SupportIcon}  alt="support-icon" /></Nav.Link>
              <Nav.Link href="#action2"><img src={ShoppingIcon}  alt="shopping-icon" /></Nav.Link>
              <Nav.Link href="#action2"><img src={MapIcon}  alt="map-icon" /></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
