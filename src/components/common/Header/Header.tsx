/* eslint-disable @typescript-eslint/no-explicit-any */
import {  NavLink, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { TbSettings } from "react-icons/tb";
import { GoBell } from "react-icons/go";
import NavLogo from '../../../assets/logo/NavLogo';
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/usersApi/authSlice';
import { useAlert } from 'react-alert'
const Header = () => {
  const dispatch=useDispatch()
  const alert=useAlert()
  const navigate=useNavigate()
    const Links =[
        {name:"Home",link:"dashboard"},
        {name:"Users",link:"user-lists"},
        {name:"Projects",link:"*"},
        {name:"Tasks",link:"*"},
        {name:"Reporting",link:"*"},
      ];
    
      const handleLogout=()=>{
        dispatch<any>(logout()).then(action=>{
          if(action.payload){
            localStorage.clear();
            alert.show("logout successful",{type:"success"})
            navigate("/")
          }
        })
      }
     
  return (
    <div className=' bg-primary text-[#fff] font-inter'>
    <div className='flex w-[1280px] h-[72px] items-center px-[32px] bg-white  mx-auto'>
    <div className='font-bold font-inter text-2xl cursor-pointer flex items-center  
    text-gray-800 w-[15%]'>
     <NavLogo/>
      <h3 className='text-[20px] font-[700] ml-[12px]'>Stack</h3>
    </div>
    <div className='flex justify-between w-[85%]'>
    <ul className='flex justify-between items-center font-inter w-[40%]'>
       {
        Links.map((links)=>
        // <Link key={links.link} to={links.link}><p className='font-[500] leading-6'>{links.name}</p></Link>
        <NavLink
        key={links.link}
        to={links.link}
  className={({ isActive, isPending }) =>
    isPending ? "bg-red" : isActive ? "bg-[#7F56D9] rounded-md" : ""
  }
>
<p className='font-[500] leading-6 px-[12px] py-[8px] rounded-md hover:bg-[#7F56D9] transition-all ease-out 0.3s'>{links.name}</p>
</NavLink>
        )
       }
    </ul>
    <div className='flex items-center justify-end w-[40%] '>
 <div className='p-[10px]'>
 <IoMdSearch  size={20}></IoMdSearch>
 </div>
 <div className='p-[10px]'>
 <TbSettings size={20} />
 </div>
 <div className='p-[10px]'>

  <GoBell  size={20}/>
 </div>
 <div>
 <button onClick={handleLogout}>logout</button>
 </div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Header