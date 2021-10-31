import React from 'react';

import { Container } from 'react-bootstrap';

import { useForm } from "react-hook-form"



const Booking = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        reset()
    };
    
    return (

        <Container className="my-5">
        <h1>Get Your Tour Book Now</h1>
        <form className="mt-5 d-flex flex-column w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
        <input className="mt-3 " {...register("name")} type="text" placeholder="Your Name"/>
        <input className="mt-3 " {...register("email")} type="email" placeholder="Your Email"/>
        <input className="mt-3 " {...register("phone")} type="number" placeholder="Your Number"/>
        <input className="mt-3 " {...register("guest")} type="number" placeholder="Guest Number"/>
        <input className="mt-3 " {...register("address")} type="number" placeholder="Address"/>
        
        <select className="my-3 " {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
        </form>
        </Container>
    )
}

export default Booking;