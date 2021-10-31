import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import useAuth from './../../hooks/useAuth';


const Login = () => {
  const { signInGoogle } = useAuth();


    return (
      <div>
        <Container className="d-flex justify-content-center my-5 ">
          <div className="box p-5 w-50">
            <h1 className="p-1 mb-4 ">Login</h1>
            <div>
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
              <div className="d-flex justify-content-between">
                <div>
                  <input type="checkbox" name="Remember Me" id="Remember" />
                  <label htmlFor="Remember"> Remember Me</label>
                </div>
                <Link>Forget Password</Link>
              </div>
              <Button variant="danger" className="w-100 my-3 color-btn">
                Log In
              </Button>

              <p>
                Don’t have an account?{" "}
                <Link to="register"> Create an account</Link>
              </p>
            </div>
            <p>--------------- Or ---------------</p>
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

export default Login;
