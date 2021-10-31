import React from 'react';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import axios from 'axios'; 

function Addservice() {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:4000/services', data )
        .then((res)=> {
            if(res.data.insertedId){
                alert('data insert success !')
                reset()
            }

            
          })
    };
    

    return (
        <div className="my-5">
        <Container>
            <h2 className="mt-5">Add service</h2>
            <form className="mt-5 d-flex flex-column w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-3 " {...register("name")} type="text" placeholder="Service Name"/>
                <textarea rows='3' className="mt-3" {...register("details")} type="text" placeholder="Service Details"/>
                <input className="mt-3" {...register("price")} type="number" placeholder="Service Price"/>
                <input className="mt-3" {...register("img")} type="text" placeholder="Image url"/>
                
                <input className="mt-3" type="submit" />
            </form>
            </Container>
        </div>
    )
}

export default Addservice;
