import React, { useRef,useState,useEffect } from 'react'
import { Container } from 'react-bootstrap';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import './Contact.css'

const Contact = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoicHVsYWszMzUiLCJhIjoiY2t2ZXd0azF3MTh6ZjJ4bzhleTY4amVvbiJ9.kaLnDYKE5Oswp3gg9tGKkg';

    const mapContainer = useRef(null);
    //const [map, setMap] = useState('null');
    const [lng, setLng] = useState(90.365417);
    const [lat, setLat] = useState(23.822350);
    const [zoom, setZoom] = useState(9);

    var map = null;

    useEffect(() => {
        if (map) return; // initialize map only once
        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
        });

    return (
        <Container className="my-5">
            <h1>Get In Touch</h1>

            <div className="d-flex justify-content-between ">

            <div className="w-50">

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-info w-25">Send</button>
            </div>
  
          </div>
  
          <div className="w-100 ms-3">
              <h1>Location</h1>
              <div ref={mapContainer} className="map-container" />
              
          </div>
            </div>
        </Container>
    )
}

export default Contact