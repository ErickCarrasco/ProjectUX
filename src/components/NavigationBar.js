import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'


const Styles = styled.div`
    .navbar {
        background-color: grey;
    }

    .navbar-brand, .navbar-nav . nav-link{
        color #222;
        &:hover{
            color: white;
        }
    }
`;

export const NavigationBar = ()=>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/dummy">CreateProject</Nav.Link></Nav.Item>
                    
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Sign In</Nav.Link></Nav.Item>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        <Nav>
            <div className="container">
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </Nav>
    </Styles>
)