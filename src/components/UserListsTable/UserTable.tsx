import React from 'react'
import { useGetUsersQuery } from '../../features/usersApi'
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Pagination from '../pagination/Pagination';


const UserTable = () => {
  const {data,isLoading,error,isError,isSuccess}=useGetUsersQuery()

  return (
    <div className="max-w-full mx-auto mt-8 font-inter">
    <table className="w-full border border-[#EAECF0] shadow-table">
      <thead className='bg-[#F9FAFB]'>
        <tr>
         
          
          <th className="border-b border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px] ">  <input type="checkbox" /> <span className='text-left text-[12px] font-[500] text-[#667085] ml-[12px]'>User Info</span></th>
          <th className="border-b border-[#EAECF0]  text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px] ">About</th>
          <th className="border-b border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px]">Status</th>
          <th className="border-b border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px]"> </th>
        </tr>
      </thead>
      <tbody>
        
         {
          data?.data?.map(data=><tr className='border border-[#EAECF0]'  key={data.id}>
         
            <td className='flex items-center justify-start  px-[24px] py-[16px] '>
            <input type="checkbox" className='mr-[12px] accent-[#F9F5FF] border border-[#7F56D9]' />
            <img className='w-[40px] h-[40px] rounded-[200px] mr-[12px]' src={data.avatar} alt="" /> 
<div>
<p className='text-[14px] font-[500] text-[#101828]'>{data.first_name+" "+ data.last_name}</p> 
             <p className=' text-[14px] font-[400] text-[#667085]'>{data.email}</p>
</div>
              </td>
            <td className=' px-[24px] py-[16px] '>
              <p className='text-[14px] font-[400] text-[#101828]'>Some dummy Content</p>
              <p className='text-[14px] font-[400] text-[#667085]'>Brings all your news into one place</p>
            </td>
            <td className='  px-[24px] py-[16px] '>
              <p>Customer</p>
            </td>
            <td className='flex gap-2  px-[24px] py-[16px] '>
            <RiDeleteBinLine size={20} />
            <FiEdit2 size={20}/>
            </td>
             
          </tr>)
         }
       
      

      </tbody>
      <Pagination/>
    </table>
  </div>
  )
}

export default UserTable