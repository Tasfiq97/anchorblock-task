/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '../../assets/logo/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { signUp } from '../../features/usersApi/authSlice';
import { useAlert } from 'react-alert'

type Inputs = {
    email: string
    password: string
  }
const SignUp = () => {
   
    const dispatch=useDispatch()
 const alert = useAlert()
 const navigate=useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
          dispatch<any>(signUp({ email: data.email, password: data.password })).then((action)=>{
            if(action.payload!==undefined){
                alert.show("signup successful",{type:"success"})
                navigate("/dashboard")
            }else{
                
                alert.show(action.error.message,{type:"error"})
            }
          })
         
         
    }
  return (
    <div>
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[444px] px-[62px] py-[59px] shadow-login bg-white rounded-2xl border border-[#eee]">
         <div className=" ">
        <div className="flex items-end mb-[18px]">
    <Logo/>
     <h1 className="text-[28px] text-[#4E5D78] font-semibold text-left ml-[6px] ">Stack</h1>
        </div>
        <h3 className="text-[#404040] text-[20px] font-[600]">Sign up to join with Stack</h3>
  
  <form  onSubmit={handleSubmit(onSubmit)}>
  <div className="mt-[50px] h-[96px]">
      <label  className=" text-[#344054] text-[14px] font-[500] leading-5 ">Email</label>
      <input 
      {...register('email', 
      { required: true, maxLength: 30, pattern: {
        value: /^[a-zA-Z0-9._-]+@/,
        message: 'Invalid email address',
      }, })} 
      type="text"  
      
      className={errors.email?"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#FDA29B] error-shadow outline-none" 
      :"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#D6BBFB] shadow-custom outline-none"} 
      placeholder="Enter email" />
      {errors.email && errors.email.type === "required"  ? <span className='text-[#F04438] text-[14px] mt-[6px] text-shadow self-stretch leading-5'>This field is required</span>:
       <span className='text-[#F04438] text-[14px] mt-[6px] text-shadow self-stretch leading-5'>{errors?.email?.message}</span>}
    
  </div>
  <div className="mt-[10px] h-[96px]">
  <label  className=" text-[#344054] text-[14px] font-[500] leading-5">Password</label>
      <input 
      {...register('password',
       { required: true, maxLength: 30 })} 
       type="password"  
       className={errors.password?"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#FDA29B] error-shadow outline-none" 
       :"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#D6BBFB] shadow-custom outline-none"} 
        placeholder="Enter Password" />
      {errors.password && errors.password.type === "required" &&
       <span className='text-[#F04438] text-[14px] mt-[6px] text-shadow self-stretch leading-5'>This field is required</span>}
  </div>
  <div className="mt-[19px] flex justify-around">
  <div className='h-[4px] w-[44px] bg-red rounded-[2px]'></div>
  <div className='h-[4px] w-[44px] bg-red rounded-[2px]'></div>
  <div className='h-[4px] w-[44px] bg-red rounded-[2px]'></div>
  <div className='h-[4px] w-[44px] bg-red rounded-[2px]'></div>
  <div className='h-[4px] w-[44px] bg-red rounded-[2px]'></div>
  </div>
  
  <div className="mt-[17px]">
      <button type="submit" className="bg-primary w-full h-[44px]">Sign Up</button>
  </div>
  </form>
  <div className="mt-[24px] text-[#B0B7C3]">
      <p className="font-[500]">Already have an account?<Link to={"/"}> <span className="text-[#377DFF]">Sign In</span></Link> </p>
  </div>
         </div>
      </div>
  </div>
      </div>
  )
}

export default SignUp