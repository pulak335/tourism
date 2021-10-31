import React from 'react'

const Service = (props) => {

    const {name,details,price,img}=props.service;
    return (
        <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{details}</p>
            <h5 className="card-text text-danger">$ {price}</h5>
          </div>
          <div>
            <button className="btn btn-info w-100">Buy Service</button>
          </div>
        </div>
      </div>
    )
}

export default Service;