import React,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap'

const ManageServies = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/services',)
        .then(res=>res.json())
        .then(data => setServices(data))
    }, [])

    const handleDelete=(id) => {
        const uri = `http://localhost:4000/services/${id}`
        fetch(uri,{
            method:'DELETE'
        })

        .then(res=>res.json())
        .then(data=>{
          console.log(data)
  
          if(data.deletedCount){
              alert('deleted')
              const serviceItem = services.filter(service => service._id !== id)
              setServices(serviceItem)
          }
          else {
              alert("Deleted 0 documents.");
            }
        })
      }
    return (
        <Container className="my-5">
        <h1>All manage service</h1>
        {
          services.map(service =>(
            <div key={service._id}>
                <hr></hr>
            <h1>{service._id}</h1>
            <h2>{service.name}</h2>
            <h2>Price:{service.price}</h2>
            <button className="btn btn-danger" onClick={()=>handleDelete(service._id)}>delete</button>
         </div>
          ))
        }
    </Container>
    )
}

export default ManageServies;