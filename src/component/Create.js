import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createContact } from '../features/ContactsDetails';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [users,setUsers]=useState({})
    const navigate = useNavigate()
    const dispatch=useDispatch();
    const getuserdata=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value})
        // console.log(users);
    }
   const handlSubmit = (e) =>{
    e.preventDefault();
    console.log(users);
    dispatch(createContact(users))
    navigate("read")

   }
   const myStyles = {
    margin:"50px"
    // ... add more styles as needed
  };

   
  return (
    <>
      <form className='container-sm my-30px' onSubmit={handlSubmit}  style={myStyles}>
        <h1 >Fill the data</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" name='name' className="form-control" id="exampleInputPassword1" onChange={getuserdata}/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
    <input type="Number" name='PhoneNumber' className="form-control" id="exampleInputPassword1" onChange={getuserdata}/>
  </div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getuserdata}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>


  <button type="submit" className="btn btn-primary" onSubmit={handlSubmit} >Submit</button>
</form>
    </>
  )
}
