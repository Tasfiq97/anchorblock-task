import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAuthentication = () => {
  return (
    <div className='font-inter'><Outlet></Outlet></div>
  )
}

export default LayoutAuthentication