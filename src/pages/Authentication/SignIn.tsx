import { Link } from "react-router-dom"
import Logo from "../../assets/logo/Logo"


const SignIn = () => {
  return (
    <div>
  <div className="flex justify-center items-center h-screen ">
    <div className="w-[444px] px-[62px] py-[59px] shadow-login bg-white rounded-2xl border border-[#eee]">
       <div className=" ">
      <div className="flex items-end mb-[18px]">
  <Logo/>
   <h1 className="text-[28px] text-[#4E5D78] font-semibold text-left ml-[6px] ">Stack</h1>
      </div>
      <h3 className="text-[#404040] text-[20px] font-[600]">Sign In to continue with Stack</h3>

<div className="mt-[50px]">
    <label  className=" text-[#344054] text-[14px] font-[500] leading-5">Email</label>
    <input type="text"  className=" w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#D6BBFB] shadow-custom outline-none" placeholder="Enter email" />

</div>
<div className="mt-[20px]">
<label  className=" text-[#344054] text-[14px] font-[500] leading-5">Password</label>
    <input type="password"  className=" w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#D6BBFB] shadow-custom outline-none" placeholder="Enter Password" />
</div>

<div className="mt-[30px]">
    <button type="submit" className="bg-primary w-full h-[44px]"><i className="fa-solid fa-right-to-bracket"></i>Sign In</button>
</div>
<div className="mt-[24px] text-[#B0B7C3]">
    <p className="font-[500]">Don’t have an account? <Link to={"/signup"}><span className="text-[#377DFF]">Sign Up</span></Link> </p>
</div>
       </div>
    </div>
</div>
    </div>
  )
}

export default SignIn