import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {UpdatesingleUser } from '../features/ContactsDetails';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const {id}=useParams()
    const [single,setSingle]=useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user,loading}=useSelector((state)=>state.app);
    // const start = () => {
    //     if (id && user) {
    //       const singleUser = user.filter((ele) => ele.id === id);
    //       setSingle(singleUser[0]);
    //     }
    //   };
    
    useEffect(() => {
        if (id ) {
            const singleUser = user.filter((ele) => ele.id === id);
            setSingle(singleUser[0]);
          }
       
    },[]);
    console.log(single);

    const  newdata = (e)=>{
        setSingle({...single,[e.target.name]:e.target.value})
    }
    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(UpdatesingleUser(single))
        navigate("read")
    }
   
    if(loading){
        return(
          <>
          <h2>Loading</h2>
          </>
        )
      }
  return (
    <>
      <form className='container-sm my-30px' 
      onSubmit={handleUpdate} 
    //    style={myStyles}
       >
        <h1 >Edite the data</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" name='name' className="form-control" id="exampleInputPassword1" 
    onChange={newdata}
    value={single && single.name}
    />
  </div>
  {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" name='address' className="form-control" id="exampleInputPassword1" onChange={getuserdata}/>
  </div> */}
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
    <input type="Number" name='PhoneNumber' className="form-control" id="exampleInputPassword1"
     onChange={newdata}
    value={single && single.PhoneNumber}
     />
  </div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    onChange={newdata}
    value={single && single.email}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>


  <button type="submit" className="btn btn-primary"
//    onSubmit={handlSubmit} 
   >Submit</button>
</form>
    </>
  )
}
