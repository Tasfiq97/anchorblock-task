import Header from '../../../components/common/Header/Header'
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