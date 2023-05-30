import React from 'react'
import { Outlet } from 'react-router-dom'
import NavScrollExample from '../NavBar'


const Root = () => {
  return (
    <>
     <NavScrollExample />
     <Outlet/>
    </>
        
  )
}

export default Root