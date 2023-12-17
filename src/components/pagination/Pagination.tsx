
interface Props{
totalPage:number,
page:number,
handlePrevPage,
handleNextPage
}
const Pagination = ({totalPage,page,handlePrevPage,handleNextPage}:Props) => {
  return (
    <div className='max-w-full flex justify-between px-[24px] pt-[12px] pb-[16px] border-t border-[#EAECF0] items-center'>
        <div className=''>
        <button onClick={handlePrevPage}  className='border border-[#D0D5DD] shadow-btn rounded-[8px] text-[14px] leading-5 text-[#344054] px-[14px] py-[8px] font-[500]'>Previous</button>
        </div>
        <div className=''>
          <p className='text-[#344054] text-[14px] font-[500]'>Page {page} out of {totalPage}</p>
        </div>
        <div  className=''>
        <button onClick={handleNextPage}  className='border border-[#D0D5DD] shadow-btn rounded-[8px] text-[14px] leading-5 text-[#344054] px-[14px] py-[8px] font-[500]'>Next</button>
        </div>
    </div>
  )
}

export default Pagination