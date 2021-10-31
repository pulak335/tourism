import React,{useState,useEffect} from 'react';

import { Container } from 'react-bootstrap';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/services',)
        .then(res=>res.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <Container className="mb-3">
            <h1>Our Services</h1>

            <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
            </div>
        </Container>
    )
}

export default Services;