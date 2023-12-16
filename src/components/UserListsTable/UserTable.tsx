import React from 'react'

const UserTable = () => {
  return (
    <div className="max-w-full mx-auto mt-8 font-inter">
    <table className="w-full border border-[#EAECF0] shadow-table">
      <thead className='bg-[#F9FAFB]'>
        <tr>
          <th className="border-b border-[#EAECF0] text-start ">
          <td className="">
            <input type="checkbox" />
          </td>
          </th>
         
          <th className="border-b border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px] ">   User Info</th>
          <th className="border-b border-[#EAECF0]  text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px] ">About</th>
          <th className="border-b border-[#EAECF0] text-left text-[12px] font-[500] text-[#667085] px-[24px] py-[12px]">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b border-[#EAECF0]">
            <input type="checkbox" />
          </td>
          <td className="border-b border-[#EAECF0]">User1</td>
          <td className="border-b border-[#EAECF0]">Details about User1</td>
          <td className="border-b border-[#EAECF0]">Active</td>
        </tr>
        <tr>
          <td className="border-b border-[#EAECF0]">
            <input type="checkbox" />
          </td>
          <td className="border-b border-[#EAECF0]">User2</td>
          <td className="border-b border-[#EAECF0]">Details about User2</td>
          <td className="border-b border-[#EAECF0]">Inactive</td>
        </tr>

      </tbody>
    </table>
  </div>
  )
}

export default UserTable