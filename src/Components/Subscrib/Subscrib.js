import React from 'react'
import { Container } from 'react-bootstrap';
import './Subscrib.css'

const Subscrib = () => {
    return (
        <div className="sub-bg p-4">
            <Container className="d-flex mt-5 flex-column w-50 m-auto">
                <div className="w-50 text-white">
                    <h1>Newslatters</h1>
                    <p>Sign up to receive the best offers.</p>
                </div>
                <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </div>
            </Container>
        </div>
    )
}

export default Subscrib;