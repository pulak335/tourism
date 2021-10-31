import React from 'react'
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import useAuth from './../../hooks/useAuth';

function Header() {

    const {users, logout} = useAuth();

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Container className="container-fluid">
                <Link className="navbar-brand text-white" to='/'>Travel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-white active" aria-current="page" to='/home'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to='/travel'>Travel tips</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to='/booking'>Booking</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to='/contact'>Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to='/addservice'>Add Service</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to='/manageservice'>Manage Service</Link>
                    </li>
                </ul>
                <form className="d-flex">
                {
                    users.email?
                    <> 
                    <h6 className="text-white d-flex align-items-center me-2">Login as: {users.displayName}</h6> <button onClick={logout} className="btn btn-info">Log Out</button>
                    </>
                    : 
                    <Link to="/login">
                    <button className="btn btn-outline-success"  type="submit">
                        Log In
                    </button>
                </Link>
                }
                </form>
                </div>
            </Container>
            </nav>
    )
}

export default Header
