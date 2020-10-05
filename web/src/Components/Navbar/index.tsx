import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Nav from 'react-bootstrap/esm/Nav';
import './style.css'

const Header = () => {
    return (
        <>
            <Navbar className="navbarColor" expand="lg">
                <Navbar.Brand href="#home" className="titleNav">Swing Trader</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="colorNav">Dashboard</Nav.Link>
                        <Nav.Link href="#link" className="colorNav">Controle</Nav.Link>
                        <NavDropdown title="Configurações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className="colorNav">Aplicação de Taxas</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

}

export default Header;