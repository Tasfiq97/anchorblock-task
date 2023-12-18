/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '../../assets/logo/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { Controller,  useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { signUp } from '../../features/usersApi/authSlice';
import { useAlert } from 'react-alert'
import { useState } from 'react';

  interface FormData {
    email: string
    password: string;
  }
const SignUp = () => {
 
    const dispatch=useDispatch()
 const alert = useAlert()
 const navigate=useNavigate();
 const {  handleSubmit, clearErrors,  formState: { errors,  },control } = useForm<FormData>();
  const[passStrong,setPassStrong]=useState<number>(0);
    
    const handleChange = (field:'email' | 'password', value: string) => {
    
      const characterCount = value.length;
         if(field==="password"){
          setPassStrong(value.length)
         }
      if (characterCount === 0) {
        clearErrors(field);
        return;
      }
    };


    const onSubmit = (data: FormData) => {
           dispatch<any>(signUp({ email: data.email, password: data.password })).then((action)=>{
            if(action.payload!==undefined){
              alert.show("signin successful",{type:"success"})
              navigate("/dashboard")

          }else{
              
              alert.show(action.error.message,{type:"error"})
          }
          })
    };
   
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
  

  <form onSubmit={handleSubmit(onSubmit)}>
     <div className="mt-[40px] h-[96px]">
     <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <label className=" text-[#344054] text-[14px] font-[500] leading-5 ">Email</label>
            <input
              {...field}
              type="text"
              className={errors.email?"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#FDA29B] error-shadow outline-none" 
              :"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#D6BBFB] shadow-custom outline-none"} 
              placeholder="Enter email"
              onChange={(e) => {
                field.onChange(e);
                handleChange('email', e.target.value);
              }}
            />
            {errors.email && <p  className='text-[#F04438] text-[14px] mt-[6px] text-shadow self-stretch leading-5'>This field is required</p>}
          </>
        )}
        rules={{ required: 'Email is required' }}
      />
      </div>
      <div className="mt-[25px] h-[90px]">
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <label className=" text-[#344054] text-[14px] font-[500] leading-5">Password</label>
            <input
              {...field}
              className={errors.password?"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#FDA29B] error-shadow outline-none" 
              :"w-full mt-2 text-[16px] px-[14px] py-[10px] rounded-[8px] border border-[#D6BBFB] shadow-custom outline-none"} 
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                field.onChange(e);
                handleChange('password', e.target.value);
              }}
            />
            {errors.password && <p className='text-[#F04438] text-[14px] mt-[6px] text-shadow self-stretch leading-5'>This field is required</p>}
          </>
        )}
        rules={{ required: 'Password is required' }}
      />
      </div>
      <div className="mt-[19px] flex justify-around">
  <div className={passStrong>=1 &&passStrong>=1?'h-[4px] w-[44px] bg-red rounded-[2px]':'h-[4px] w-[44px] bg-[#F3F3F3] rounded-[2px]'}></div>
  <div className={passStrong>=6 ?'h-[4px] w-[44px] bg-red rounded-[2px]':'h-[4px] w-[44px] bg-[#F3F3F3] rounded-[2px]'}></div>
  <div className={passStrong>=8 ?'h-[4px] w-[44px] bg-red rounded-[2px]':'h-[4px] w-[44px] bg-[#F3F3F3] rounded-[2px]'}></div>
  <div className={passStrong>=10?'h-[4px] w-[44px] bg-[#DFFF00] rounded-[2px]':"h-[4px] w-[44px] bg-[#F3F3F3] rounded-[2px]"}></div>
  <div className={passStrong>=12?'h-[4px] w-[44px] bg-[#DFFF00] rounded-[2px]':"h-[4px] w-[44px] bg-[#F3F3F3] rounded-[2px]"}></div>
  <div className={passStrong>=14?'h-[4px] w-[44px] bg-[#2E8B57] rounded-[2px]':"h-[4px] w-[44px] bg-[#F3F3F3] rounded-[2px]"}></div>
  </div>
      <div className="mt-[17px]">
    <button type="submit" className="bg-primary w-full h-[44px]"><i className="fa-solid fa-right-to-bracket"></i>Sign Up</button>
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