import React from 'react'
import { Container } from 'react-bootstrap';

import { useHistory } from 'react-router';


function Offer() {

    const history = useHistory()
    
    return (

        <Container className="my-5">
        <div>
            <h1>Most Popular Destination</h1>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>


            <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <img src="https://i.insider.com/5d0150e06fc9200b5a05f042?width=1000&format=jpeg&auto=webp" class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">New York,USA</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <button className="btn btn-danger" onClick={()=>history.push('/booking')}>Book Now</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Seoul, Korea</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <button className="btn btn-danger" onClick={()=>history.push('/booking')}>Book Now</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/5H74LZSEFZPA3D3CQD6HUAMH4Q.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Tokyo, Japan</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <button className="btn btn-danger" onClick={()=>history.push('/booking')}>Book Now</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMkMlMjBmcmFuY2V8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Peris,France</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <button className="btn btn-danger" onClick={()=>history.push('/booking')}>Book Now</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://www.wanderluststorytellers.com/wp-content/uploads/2018/07/Things-to-do-in-Nice-France.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Nice,France</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <button className="btn btn-danger" onClick={()=>history.push('/booking')}>Book Now</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUjS_x3IMSdHvhVcJ2DXzWWaKJqUntVgujCbBg94RhkFsLfP_ca7yrGT1JkBzFdymYus&usqp=CAU" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Sydney, Australia</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <button className="btn btn-danger" onClick={()=>history.push('/booking')}>Book Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

        </Container>
    )
}

export default Offer;
