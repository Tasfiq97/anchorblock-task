import  { useEffect, useState } from 'react'
import { useDeleteUserByIdMutation,  useGetUsersQuery, useUpdateUserByIdMutation, } from '../../features/usersApi/usersApi'
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Pagination from '../pagination/Pagination';
import { useAlert } from 'react-alert'
import { Users } from '../../models/Users.model';
import { Update } from '../../models/updteUser.model';
import { Delete } from '../../models/deleteUser.model';
import { MdOutlineArrowDownward } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const UserTable = () => {
  const [page,setPage]=useState<number>(1)
    const [totalPage,setTotalPage]=useState<number>(1)
    const alert = useAlert()
  const   {data}= useGetUsersQuery<Users>(page);
  const [ updateUserById]=useUpdateUserByIdMutation<Update>();
  const [deleteUserById]=useDeleteUserByIdMutation<Delete>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCheckedTable, setIsCheckedTable] = useState<boolean>(false);


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
   
   
  const handleUpdate = async (id: number) => {
    try {
      const action = await updateUserById(id);
      
      if ('data' in action) {
        const updatedAt = new Date(action.data.updatedAt);
        const standardTime = updatedAt.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
      
        });

        alert.show("Update successful at " + standardTime, { type: "success" });
      }
    } catch (error) {
      console.error(error);
    }
  };

 
  const handleDelete = async (id: number) => {
    try {
      const action = await deleteUserById(id);
      
      if('data' in action){
              alert.show("deleted successfully",{type:"success"})
            }
    } catch (error) {
    
      console.error(error);
    }
  };


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckboxChangeTable = () => {  
  setIsCheckedTable(!isCheckedTable);     
  };

  return (
 <div className='overflow-x-auto overflow-y-auto mt-[33px]'>
     <div className="max-w-full mx-auto  font-inter border border-[#EAECF0] shadow-table rounded-[8px]  ">
    <table className="w-full ">
      <thead className='bg-[#F9FAFB]'>
        <tr>
         
          
          <th className="border-b flex items-center border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px] ">  
          <label className="flex items-center text-[#000] cursor-pointer  h-6" htmlFor="custom-checkbox">
      <input
        id="custom-checkbox"
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? (
        <span className="text-2xl h-4 w-4 relative   border border-[#7F56D9] bg-[#F9F5FF] rounded-[6px] top-0 ">
          <span className=' absolute top-[-10px] left-[2px] text-[#7F56D9]'>-</span>
        </span>
      ) : (
        <span className="h-4 w-4 border border-[#D0D5DD] bg-[#fff] rounded-[6px]" />
      )}
    </label>
          <span className='text-left text-[12px] font-[500] text-[#667085] ml-[12px]'>User Info</span>
         <div className='ml-[4px]'>
         <MdOutlineArrowDownward/>
         </div>
          </th>
          <th className="border-b border-[#EAECF0]  text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px] ">About</th>
          <th className="border-b border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px]">Status</th>
          <th className="border-b border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px]"> </th>
        </tr>
      </thead>
      <tbody>
        
         {
          data?.data.map(data=><tr className='border border-[#EAECF0]'  key={data.id}>
         
            <td className='flex items-center justify-start  px-[24px] py-[16px] '>
            <label className="flex items-center mr-[12px] text-[#000] cursor-pointer  h-6" htmlFor="custom-checkbox2">
      <input
        id="custom-checkbox2"
        type="checkbox"
        className="hidden"
        checked={isCheckedTable}
        onChange={handleCheckboxChangeTable}
      />
      {isCheckedTable ? (
        <span className="text-2xl h-4 w-4 relative   border border-[#7F56D9] bg-[#F9F5FF] rounded-[6px] top-0 ">
          <span className=' absolute top-[4px] left-[3px] text-[#7F56D9]'><FaCheck size={8}/></span>
        </span>
      ) : (
        <span className="h-4 w-4 border border-[#D0D5DD] bg-[#fff] rounded-[6px]" />
      )}
    </label>
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
           <div onClick={()=>handleDelete(data?.id)} className='cursor-pointer'> <RiDeleteBinLine  size={20} color={"#667085"} /></div>
          <div onClick={()=>handleUpdate(data?.id)} className='cursor-pointer'>  <FiEdit2 size={20} color={"#667085"}/></div>
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