import React, { useEffect, useState } from 'react'
import { useDeleteUserByIdMutation, useGetUsersAllQuery, useGetUsersQuery, useUpdateUserByIdMutation, } from '../../features/usersApi'
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Pagination from '../pagination/Pagination';
import { useAlert } from 'react-alert'
const UserTable = () => {
  const [page,setPage]=useState<number>(1)
    const [totalPage,setTotalPage]=useState<number>(1)
    const alert = useAlert()
  const {data, isLoading,error,isError,isSuccess}=useGetUsersQuery(page);
  const [ updateUserById]=useUpdateUserByIdMutation();
  const [deleteUserById]=useDeleteUserByIdMutation()
  



  useEffect(()=>{
    setTotalPage(data?.total_pages)
  },[data])
 
   const handleNextPage=()=>{
    if(page===data?.total_pages){
      return
    }
    setPage(page+1)

   }
   const handlePrevPage=()=>{
    if(page===1){
      return
    }
    setPage(page-1)

   }
   
   const handleUpdate=(id) => {
    updateUserById(id).then(action=>{
      if(action.data){
     alert.show("update successful",{type:"success"})
      }
    }
    )
   }
   const handleDelete=(id) => {
    deleteUserById(id).then(action=>{
      if(action.data===null){
        alert.show(" api issue",{type:"error"})
      }
    //   if(action.data){
    //  alert.show("deleted successfully",{type:"success"})
    //   }
    }
    )
   }

  return (
 <div className='overflow-x-auto overflow-y-auto mt-[33px]'>
     <div className="max-w-full mx-auto  font-inter border border-[#EAECF0] shadow-table rounded-[8px]  ">
    <table className="w-full ">
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
              {data.id%2===0?<div className='w-[73px]'>
                <p className='text-[12px] font-[500] leading-[18px] text-[#027A48] rounded-[16px] px-[8px] py-[2px] bg-[#ECFDF3] '>Customer</p></div>:
              <div className='w-[66px]'>
                <p className='text-[12px] font-[500] leading-[18px] text-[#344054] rounded-[16px] px-[8px] py-[2px] bg-[#F2F4F7] '>Churned</p></div>}
            </td>
            <td className='flex gap-5  px-[24px] py-[16px] '>
           <div onClick={()=>handleDelete(data?.id)}> <RiDeleteBinLine  size={20} color={"#667085"} /></div>
          <div onClick={()=>handleUpdate(data?.id)}>  <FiEdit2 size={20} color={"#667085"}/></div>
            </td>
             
          </tr>)
         }
       
      

      </tbody>
    </table>
    <div  className='w-full'>
      <Pagination handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} totalPage={totalPage} page={page} />
      </div>
  </div>
 </div>
  )
}

export default UserTable