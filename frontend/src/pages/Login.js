import React, { useState } from 'react'
import login from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
const Login = () => {
    const [showPassword,setShowPassword]=useState(false)
  return (
    <div>
      <section id="login">
        <div className='mx-auto container p-4'>
            <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={login} alt='login icon'></img>
                </div>
                <form>
                    <div className='grid'>
                        <label>Email : </label>
                        <div className='bg-slate-100 p-2'>
                            <input type='email' placeholder='Enter email' className='w-full h-full outline-none bg-transparent'></input>
                        </div>
                    </div>
                    <div className='grid'>
                        <label>Password : </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showPassword?"":'password'} placeholder='Enter password' className='w-full h-full outline-none bg-transparent'></input>
                            <div className='cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>
                                <span>
                                    {
                                        showPassword?(<FaEye/>):(<FaEyeSlash/>)
                                    }
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <button className='mx-auto bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-100'>Login</button>
                </form>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Login
