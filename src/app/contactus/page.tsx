import React from 'react'
import TopNavbarSignIn from '../Components/TopNavbarSignIn'
import Navbar from '../Components/Header'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";




const ContactUs = () => {
  return (
    <div>
        <TopNavbarSignIn />
        <Navbar />
        <div className="container mx-auto text-center mt-8">
            <h1 className='text-[20px] font-semibold'>GET HELP</h1>
            </div>
            <div className="container mx-auto text-center pt-3 grid grid-cols-1 items-end w-[420px]">
                <input type="text" placeholder='What can we help you with?' className='px-24 py-3 text-[12px] border rounded-lg relative'/>
                <IoSearchOutline className='absolute ml-[380px] mb-3'/>
        </div>


        {/* Left Section */}
        <div className="container mx-auto w-full p-4 pt-5 flex">
          <div className="container w-[900px] p-4 space-y-5 text-[12px] border-r ">
            <p className='font-semibold text-[20px]'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</p>
            <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            <p className='pl-5'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
            <p className='pl-5'>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
            <p className='pl-5'>Apple Pay</p>
            <p><u><b>Nike Members</b></u> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, <u><b>join us</b></u> <br /> today.</p>
        
        <div className="flex gap-4 pt-2">
            <button className='bg-black text-white border rounded-2xl px-4 py-1 text-[12px] cursor-pointer hover:bg-gray-400'>JOIN US</button>
            <button className='bg-black text-white border rounded-2xl px-4 py-1 text-[12px] cursor-pointer hover:bg-gray-400'>SHOP NIKE</button>
        </div>

        <div className="">
            <p className='font-semibold text-[16px]'>FAQs</p>
            </div>
            <div>
                <p className='font-semibold pb-2'>Does my card need international purchases enabled?</p>
                <p className=''>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout <br /> if international purchases need to be enabled.</p>
            </div>

            <p>Please note, some banks may charge a small transaction fee for international orders.</p>
            
          <div>
            <p className='font-semibold pb-2'>Can I pay for my order with multiple methods?</p>
                <p className=''>No, payment for Nike orders can't be split between multiple payment methods.</p>
            </div>

            <div>
            <p className='font-semibold pb-2'>What payment method is accepted for SNKRS orders?</p>
                <p className=''>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>

            <div>
            <p className='font-semibold pb-2'>Why don't I see Apple Pay as an option?</p>
                <p className=''>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest <br /> OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use <br /> Apple Pay on Nike.com.</p>
            </div>

            <div className="text-[11px]">
                <p>Was this answer helpful?</p>
                <div className="flex items-center gap-2 text-[16px] pt-1">
                <IoIosThumbsUp />
                <IoIosThumbsDown />                   
                </div>
                <p className='text-gray-500 pt-1'>RELATED</p>
            </div>

            <div className="underline font-semibold space-y-2 pl-5 cursor-pointer">
                <p>WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                <p>HOW DO I GET FREE DELIVERY ON NIKE ORDERS</p>
            </div>
      </div>



      {/* Right Section */}
      <div className="mx-auto text-center">
        <p className='font-semibold text-[20px]'>CONTACT US</p>
        <div className="w-[260px] h-[242px]">
            <div className="ml-24 pt-5">
                <img src="/contactusimg.png" alt="call" />
                </div>
                <p className='text-[12px] pt-5 font-semibold'>000 800 919 0566</p>
                <p className='text-[12px] pt-1'>Products & Orders: 24 hours a day, <br /> 7 days a week <br />
                Company Info & Enquiries: 07:30 <br /> - 16:30, Monday - Friday</p>
        </div>

        <div className="w-[260px] h-[150px]">
            <div className="ml-24 pt-6">
                <img src="/contacttextimg.png" alt="text" />
            </div>
            <div className="pt-3">
                <p className='text-[12px] font-semibold'>24 hours a day</p>
                <p className='text-[12px]'>7 days a week</p>
            </div>
        </div>

        <div className="w-[260px] h-[150px]">
            <div className="ml-24 pt-6">
                <img src="/contactmsgimg.png" alt="text" />
            </div>
            <div className="pt-3">
                <p className='text-[12px] font-semibold'>We'll reply within</p>
                <p className='text-[12px]'>five business days</p>
            </div>
        </div>


        <div className="w-[260px] h-[150px]">
            <div className="ml-24 pt-6">
                <img src="/contactstoreimg.png" alt="text" />
            </div>
            <div className="pt-3">
                <p className='text-[12px] font-semibold'>STORE LOCATOR</p>
                <p className='text-[12px]'>Find Nike retail stores near you</p>
            </div>
        </div>



      </div>
    </div>
    </div>
  )
}

export default ContactUs