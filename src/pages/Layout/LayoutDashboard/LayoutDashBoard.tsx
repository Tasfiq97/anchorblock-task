import React from 'react'
import Header from '../../../components/common/Header/Header'
import Dashboard from '../../Dashboard/Dashboard'
import { Outlet } from 'react-router-dom'

const LayoutDashBoard = () => {
  return (
 <div>
  <Header/>
  <div>
   <Outlet></Outlet>
  </div>
 </div>
  )
}

export default LayoutDashBoard