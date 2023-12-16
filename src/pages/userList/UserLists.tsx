
import { RiUploadCloud2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import UserTable from "../../components/UserListsTable/UserTable";

const UserLists = () => {
  return (
    <div className='w-[1280px] px-[32px] mx-auto mt-[35px] font-inter'>
       <div className='flex justify-between items-center'>
       <div>
        <h3 className='text-[24px] text-[#101828] font-[500]'>Users</h3>
        </div>
        <div className="flex justify-around">
            <button className='text-[#000]  border border-[#D0D5DD] px-[16px] py-[10px] rounded-[8px] flex items-center justify-between'>
            <RiUploadCloud2Line size={20} />
                <span className='text-[14px] ml-[8px] '>import</span></button>
            <button className="bg-[#7F56D9] flex items-center py-[10px] px-[16px] border border-[#7F56D9] shadow-user-btn ml-[12px]">
            <FaPlus size={20}/>
                <span  className='text-[14px] ml-[8px] '>Add User</span>
                </button>
        </div>
       </div>
       <UserTable/>
        </div>
  )
}

export default UserLists