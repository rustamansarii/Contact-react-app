import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{showUser,deleteUser}from '../features/ContactsDetails'
import { Link } from 'react-router-dom';


export default function Read() {
  const dispatch =useDispatch();
  const {user,loading,searchData}=useSelector((state)=>state.app)
  const [id,setId]=useState();
 
console.log(id);
console.log(searchData+"read");

useEffect(()=>{
dispatch(showUser());
},[])
  // if (loading) {
  //   return (
  //     <div>
  //       <h1>Loading</h1>
  //     </div>
  //   );
  // }
  if(loading){
    return(
      <>
      <h2>Loading</h2>
      </>
    )
  }
  return (
    <div className="container-sm">
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Edit button</th>
            <th scope="col">Delete button</th>
          </tr>
        </thead>
        <tbody>
          {user &&
          user
          .filter((ele)=>{
            if(searchData.lenght ===0){
              return ele
            }else{
              return ele.name.toLowerCase().includes(searchData.toLowerCase())
            }
          })
          .map((ele) => (
            <tr key={ele.id}>
              <th scope="row">{ele.id}</th>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.PhoneNumber}</td>
              <td>
              <Link className="nav-link active" onChange={()=>setId(ele.id)} aria-current="page" to={`/edit/${ele.id}`}><button type="button" className="btn btn-secondary">Edit</button></Link>
                 </td>
              <td>
              <Link onClick={()=>dispatch(deleteUser(ele.id))} className="nav-link active" aria-current="page" href="*"><button type="button" className="btn btn-danger">Delete</button></Link>
              
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
