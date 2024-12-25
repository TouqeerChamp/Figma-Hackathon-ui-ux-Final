import React from 'react'
import TopNavbarSignIn from '../Components/TopNavbarSignIn'
import Header from '../Components/Header'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div>
        <TopNavbarSignIn />
        <Header />
        <div className="container mx-auto w-[380px] h-[489px] text-center">
            <div className="[324px] h-[128px] text-center">
                <div className='mx-auto'>
                    <img src="/logo.png" alt=""  className='mx-auto'/>
                    </div>
                <h1 className='font-semibold'>YOUR ACCOUNT <br/> FOR EVERYTHING <br/> NIKE</h1>
            </div>
            <div className='grid grid-cols-1 pt-6 w-[300px] mx-auto space-y-2'>
            <input type="email" placeholder="Email Address" className='outline-none border rounded py-2 px-3 text-[12px]' />
            <input type="password" placeholder="Password" className='outline-none border rounded py-2 px-3 text-[12px]' />
        </div>
        
        <div className="flex justify-between items-center mx-auto pt-6 w-[300px] text-[11px] text-gray-400">
                <div className="flex gap-2 cursor-pointer hover:text-gray-900"><input type="checkbox" name="check" id="signin" /><p>Keep me signed in</p></div>
                <div className=" cursor-pointer hover:text-gray-900"><p>forgotton Your Password?</p></div>
        </div>

        <div className="w-[300px] mx-auto text-[12px] text-gray-400 pt-5">
            <p>By Logging in, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use.</u></p>
        </div>

        <div className='pt-7'>
            <button className="mx-auto bg-black text-white px-32 py-3 text-[12px] rounded hover:bg-gray-800">SIGN IN</button>
        </div>

        <div className="pt-6">
            <p className='text-[12px] text-gray-400'>Not a Member?<b className='text-black underline'><Link href="/join-us"> Join Us.</Link></b></p>
        </div>




        </div>

    </div>
  )
}

export default LoginPage