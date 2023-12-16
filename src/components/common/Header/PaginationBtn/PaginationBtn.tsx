
interface Props{
    title:string,
    prev:string,
    next:string
   
}

const PaginationBtn = ({title,prev,next}:Props) => {
  return (
    <button onClick={prev:"":""} className='border border-[#D0D5DD] shadow-btn rounded-[8px] text-[14px] leading-5 text-[#344054] px-[14px] py-[8px] font-[500]'>{title}</button>
  )
}

export default PaginationBtn