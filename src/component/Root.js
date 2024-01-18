import React from 'react'
import { Outlet } from 'react-router-dom'
// import Create1 from './Create1'
import Navbar from './Navbar'


export default function Root() {
  return (
    <>
    <Navbar/>
      <Outlet/>
      
    </>
  )
}