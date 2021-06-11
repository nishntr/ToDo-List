import React, { useState } from 'react';
import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { LogoutSuccess } from '../../actions/types';

function Header(props) {

    Header.propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    }
    const dispatch = useDispatch();

    const { isAuthenticated, user } = props.auth;
    const authLinks = (
        <Nav className="justify-content-end" style={{ width: "100%", paddingRight: 19 }}>
            <Nav.Link>
                <a onClick={() => { props.logout(); dispatch({ type: LogoutSuccess }) }} style={{ textDecoration: "none" }}  >
                    Logout</a>
            </Nav.Link>

        </Nav>
    );
    const guestLinks = (
        <Nav className="justify-content-end" style={{ width: "100%", paddingRight: 19 }}>
            <Nav.Link>
                <Link style={{ textDecoration: "none" }} to="/register">Register</Link>
            </Nav.Link>
            <Nav.Link>
                <Link style={{ textDecoration: "none" }} to="/login">Login</Link>
            </Nav.Link>

        </Nav>
    );
    return (
        <Navbar className="shadow" collapseOnSelect expand="sm" bg="dark" variant="dark"  >
            <Navbar.Brand href="/" className='m-2 brand'>TODO LIST</Navbar.Brand>
            <Navbar.Toggle className="" aria-controls="responsive-navbar-nav">
                <img width="30" height="30" src="https://img.icons8.com/clouds/100/000000/menu.png" />            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                {isAuthenticated ? authLinks : guestLinks}
            </Navbar.Collapse>


        </Navbar>



    )
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
