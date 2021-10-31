import React,{useState,useEffect} from 'react';

import { Container } from 'react-bootstrap';

import './TopCover.css';

function TopCover() {


    const [countrys, setCountrys] = useState([])

    useEffect(() => {
      fetch('https://restcountries.com/v2/all')
      .then(res=>res.json())
      .then(data => setCountrys(data))
    }, [])
    return (
        <div className="cover-bg ">
            <Container className="d-flex justify-content-between align-items-center">
            <div className=" p-5 mt-5 w-50">
            <h1>Planing Trip To Anywhere in The World?</h1>
        </div>


        <div className=" p-5 mt-5 w-50">
            <h3>Book Your Trip</h3>

            <form>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label text-white">Your Name</label>
                <input type="text" className="form-control" placeholder=""/>
            </div>
            <div className="mb-3">
            <label for="inputState" className="form-label text-white">Activities</label>
                <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Hiking</option>
                <option>Swiming</option>
                <option>Caving</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label text-white">Destination</label>
                <select id="inputState" className="form-select">
                {
                    countrys.map(country => <option>{country.name}</option>)
                }
                </select>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label text-white">Date Travel</label>
                <input type="date" className="form-control" placeholder=""/>
            </div>
            <div className="mb-3">
                <input type="button" className='btn btn-success' value="Submit" />
            </div>


            </form>
        </div>
            </Container>
        </div>
    )
}

export default TopCover
