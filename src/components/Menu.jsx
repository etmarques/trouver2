import React from 'react'
import { Container , Nav , Navbar , NavDropdown} from 'react-bootstrap'
import logo from '../assets/img/trouverLogoBlack.svg'
import { NavLink as LinkRoute} from 'react-router-dom'

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../components/SignInButton";
import { SignOutButton } from "./SignOutButton";

const Menu = () => {

    const isAuthenticated = useIsAuthenticated();
    const classMenuItem = 'text-decoration-none text-secondary navLinkItem'

    return (    
            <Navbar bg="light" className='shadow' expand="false" >
                <Container fluid>
                    <LinkRoute to='/'>
                        <img
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top img-fluid"
                            alt="React Bootstrap logo"
                        />
                    </LinkRoute>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto customNav mt-3">
                            <LinkRoute className={`${classMenuItem} pb-3`} to='/'>Home</LinkRoute>
                            <LinkRoute className={`${classMenuItem} pb-2`} to='/'>BI - dashboards</LinkRoute>
                            <NavDropdown className={`${classMenuItem} customDropDown text-secondary`} title="Formulários de Atesto" id="basic-nav-dropdown">
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Form</LinkRoute>
                            </NavDropdown>
                            <NavDropdown className={`${classMenuItem} customDropDown text-secondary`} title="Matriz de Risco" id="basic-nav-dropdown">
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Matriz</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Matriz</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Matriz</LinkRoute>
                                <LinkRoute className={`${classMenuItem} ps-5 mt-2`} to='#'>Matriz</LinkRoute>
                            </NavDropdown>
                            <LinkRoute className={`${classMenuItem} pb-2`} to='#'>Ajuda</LinkRoute>
                            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
    }

export default Menu