import React from 'react'
import TopNavbarSignIn from '../Components/TopNavbarSignIn'
import Header from '../Components/Header'
import Link from 'next/link'

const JoinUs = () => {
  return (
    <div>
    <TopNavbarSignIn />
    <Header />
    <div className="container mx-auto w-[380px] h-[800px] text-center">
        <div className="[324px] h-[100px] text-center">
            <div className='mx-auto'>
                <img src="/logo.png" alt=""  className='mx-auto'/>
                </div>
            <h1 className='font-semibold'>BECOME A NIKE MEMBER</h1>
        </div>

        <div className="text-[12px] w-[240px] h-[60px] mx-auto text-gray-400">
            <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        </div>

        <div className='grid grid-cols-1 pt-6 w-[300px] mx-auto space-y-4'>
        <input type="email" placeholder="Email Address" className='outline-none border rounded p-2 text-[12px]' />
        <input type="password" placeholder="Password" className='outline-none border rounded p-2 text-[12px]' />
        <input type="fname" placeholder="First Name" className='outline-none border rounded p-2 text-[12px]' />
        <input type="lname" placeholder="Last Name" className='outline-none border rounded p-2 text-[12px]' />
        <input type="DOB" placeholder="Date of Birth" className='outline-none border rounded p-2 text-[12px]' />
       </div>
       <div className="pt-1">
        <p className='text-[11px] text-gray-400'>Get a Nike Member Reward Every Year on Your Birthday.</p>
       </div>
       <div className="pt-2 flex mx-auto justify-center relative">
       <input type="India" placeholder="India" className='outline-none border rounded p-2 text-[12px] w-[300px] ' />
       <select className='absolute right-11 top-4 outline-none text-gray-400'></select>
       </div>

       <div className="flex mx-auto justify-center text-current pt-3 gap-3">
        <button className='border px-[55px] py-2 text-gray-400 text-[12px]'>Male</button>
        <button className='border px-[55px] py-2 text-gray-400 text-[12px]'>Female</button>
       </div>
    
    <div className="flex justify-between mx-auto pt-6 w-[300px] text-[11px] text-gray-400">
            <div className="flex gap-2 cursor-pointer justify-center">
                <input type="checkbox" name="check" id="signin" />
                <p className='pl-1 text-justify'> Sign Up for emails to get updates from Nike on<br/>product, offers and your Member benefits.</p>
                </div>
            </div>

    <div className="w-[300px] mx-auto text-[12px] text-gray-400 pt-5">
        <p>By creating an account, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use.</u></p>
    </div>

    <div className='pt-7'>
        <button className="mx-auto bg-black text-white px-32 py-3 text-[12px] rounded hover:bg-gray-800">JOIN US</button>
    </div>

    <div className="pt-6">
        <p className='text-[12px] text-gray-400'>Already a Member?<b className='text-black underline'><Link href="/login"> Sign In. </Link></b></p>
    </div>




    </div>

</div>
  )
}

export default JoinUs