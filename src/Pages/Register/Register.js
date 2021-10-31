import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
import UseFirebase from './../../hooks/UseFirebase';

const Register = () => {
    const { signInGoogle } = UseFirebase();
      return (
        <div>
          <Container className="d-flex justify-content-center mt-2">
            <div className="box p-5 w-50">
              <h1 className="p-1 mb-4 ">Create an account</h1>
              <div>
                <div className="cos-input mb-3">
                  <input
                    className="p-2 w-100 border-bottom border-2"
                    type="text"
                    name="name"
                    placeholder="First Name"
                  />
                </div>
                <div className="cos-input mb-3">
                  <input
                    className="p-2 w-100 border-bottom border-2"
                    type="text"
                    name="name"
                    placeholder="Last Name"
                  />
                </div>
                <div className="cos-input mb-3">
                  <input
                    className="p-2 w-100 border-bottom border-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="cos-input mb-3">
                  <input
                    className="p-2 w-100 border-bottom border-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="cos-input mb-3">
                  <input
                    className="p-2 w-100 border-bottom border-2"
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <Button variant="danger" className="w-100 my-3 color-btn">
                  Create an Account
                </Button>
  
                <p>
                  Already have an account?
                  <Link to="login"> Login</Link>
                </p>
              </div>
              <p className="text-center">--------------- Or ---------------</p>
              <div>
                <div className="mb-2">
                </div>
                <div>
                  <button
                    onClick={signInGoogle}
                    className=" w-100 border border-2 rounded-pill">
                    <i className="fab fa-google"></i> Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      );
  };
  
  export default Register;