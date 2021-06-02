import React, { useState } from 'react';
import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    return (
        <Navbar className="shadow" collapseOnSelect expand="sm" bg="dark" variant="dark"  >
            <Navbar.Brand href="/" className='m-2 brand'>TODO LIST</Navbar.Brand>
            <Navbar.Toggle className="" aria-controls="responsive-navbar-nav">
                <img width="30" height="30" src="https://img.icons8.com/clouds/100/000000/menu.png" />            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%", paddingRight: 19 }}>
                    <Nav.Link href="#login">Login </Nav.Link>
                    <Nav.Link href="#login">Sign Up </Nav.Link>

                </Nav>
            </Navbar.Collapse>


        </Navbar>



    )
}

{/* <nav id="navbar" classNameNameName="">
                <div classNameNameName="nav-wrapper">
                    <div classNameNameName="logo">
                        <a href="#home"><i classNameNameName="fas fa-chess-knight"></i> ToDo List</a>
                    </div>

                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div classNameNameName="menuIcon">
                <span classNameNameName="icon icon-bars"></span>
                <span classNameNameName="icon icon-bars overlay"></span>
            </div>


            <div classNameNameName="overlay-menu">
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div> */}

