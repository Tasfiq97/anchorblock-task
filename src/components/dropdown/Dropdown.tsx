/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'
import { logout } from "../../features/usersApi/authSlice";
import avatar from "../../assets/images/Dropdown.png"

const Dropdown = () => {
    const dispatch=useDispatch()
    const alert=useAlert()
    const navigate=useNavigate()
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
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
    <>
  <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center items-center p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
        onClick={toggleDropdown}
      >
        <img src={avatar} alt="" />
      </button>

      {isOpen && (
        <div className="origin-top-left absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-[#fff] ring-1 ring-[#000] ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className=" w-full px-4 py-1  text-[#000] text-[12px] hover:bg-primary/10  hover:text-gray-900"
              role="menuitem"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
</>
  )
}

export default Dropdown