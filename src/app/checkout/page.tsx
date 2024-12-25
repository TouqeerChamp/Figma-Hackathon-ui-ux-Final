import React from 'react'
import { LuMessageSquareText } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import Link from 'next/link';


const CheckOut = () => {
  return (
    <div>

<div className="w-full">
  <div className="container mx-auto w-full h-[72.8px] flex justify-between items-center px-4 sm:px-6 lg:px-8">
    <div>
      <Link href="/product">
        <img src="/logo.png" alt="logo" className="w-auto h-8 sm:h-10" />
      </Link>
    </div>
    <div className="flex gap-4 sm:gap-8 items-center">
      <p className="text-[10px] sm:text-[12px]">000 800 100 9538</p>
      <div className="hover:text-gray-400 cursor-pointer">
        <LuMessageSquareText className="text-sm sm:text-base" />
      </div>
      <div className="hover:text-gray-400 cursor-pointer">
        <IoLockClosedOutline className="text-sm sm:text-base" />
      </div>
    </div>
  </div>
</div>




            

<div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between">
  {/* Left Section */}
  <div className="w-full md:w-1/2">
    <div className="pt-2 font-semibold text-lg">
      <p>How would you like to get your order?</p>
    </div>
    <div className="pt-2 text-sm text-gray-400">
      <p>
        Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <u>Learn More</u>
      </p>
    </div>
    <div className="w-full flex items-center gap-4 border-2 border-black rounded-xl p-4 mt-4">
      <img src="/deliverit.png" alt="del" className="w-6 h-6" />
      <p className="text-sm font-semibold">Deliver It</p>
    </div>

    <div className="font-semibold grid gap-4 pt-6">
      <p>Enter your name and address:</p>
      <input type="text" placeholder="First Name" className="border rounded-lg p-3 text-sm w-full" />
      <input type="text" placeholder="Last Name" className="border rounded-lg p-3 text-sm w-full" />
      <input type="text" placeholder="Address Line 1" className="border rounded-lg p-3 text-sm w-full" />
    </div>
    <p className="text-gray-400 text-xs mt-2">We do not ship to P.O. boxes</p>
    <div className="grid gap-4 pt-4">
      <input type="text" placeholder="Address Line 2" className="border rounded-lg p-3 text-sm w-full" />
      <input type="text" placeholder="Address Line 3" className="border rounded-lg p-3 text-sm w-full" />
    </div>
    <div className="flex flex-col md:flex-row gap-4 pt-4">
      <input type="text" placeholder="Postal Code" className="border rounded-lg p-3 text-sm w-full md:w-1/2" />
      <input type="text" placeholder="Loyalty" className="border rounded-lg p-3 text-sm w-full md:w-1/2" />
    </div>
    <div className="flex flex-col md:flex-row gap-4 pt-4">
      <div className="relative border rounded-lg p-3 text-sm w-full md:w-1/2">
        <p className="text-gray-400">State/Territory</p>
        <select className="absolute inset-0 opacity-0 w-full h-full"></select>
      </div>
      <input type="text" placeholder="India" className="border rounded-lg p-3 text-sm w-full md:w-1/2" />
    </div>
    <div className="flex items-center gap-2 pt-6 text-xs">
      <input type="checkbox" />
      <p>Save this address to my profile</p>
    </div>
    <div className="flex items-center gap-2 pt-4 text-xs">
      <input type="checkbox" />
      <p>Make this my preferred address</p>
    </div>
    <div className="grid gap-4 pt-8">
      <p className="pb-2">What's your contact information:</p>
      <input type="email" placeholder="Email" className="border rounded-lg p-3 text-sm w-full" />
      <p className="text-gray-400 text-xs">A confirmation email will be sent after checkout.</p>
      <input type="tel" placeholder="Phone Number" className="border rounded-lg p-3 text-sm w-full" />
      <p className="text-gray-400 text-xs">A carrier might contact you to confirm delivery.</p>
    </div>
    <div className="grid gap-4 pt-8">
      <p>What's your PAN?</p>
      <input type="text" placeholder="PAN" className="border rounded-lg p-3 text-sm w-full" />
      <p className="text-gray-400 text-xs">
        Enter your PAN to enable payment with UPI, Net Banking or local card methods.
      </p>
    </div>
    <div className="flex items-center gap-2 pt-2 text-xs text-gray-400">
      <input type="checkbox" />
      <p>Save PAN details to Nike profile</p>
    </div>
    <div className="flex items-center gap-2 pt-6 text-xs text-gray-400">
      <input type="checkbox" />
      <p>
        I have read and consent to eShopWorld processing my information in accordance with the{" "}
        <u>Privacy Statement</u> and <u>Cookie Policy</u>. eShopWorld is a trusted Nike partner.
      </p>
    </div>
    <div className="mt-8 text-center">
      <button className="text-sm text-gray-500 font-semibold w-full py-3 bg-gray-100 rounded-2xl">
        Continue
      </button>
    </div>
    <div className="pt-5">
      <p className="border-t pt-2 font-semibold text-base">Delivery</p>
    </div>
    <div className="pt-5">
      <p className="border-t pt-2 font-semibold text-base text-gray-400">Shipping</p>
    </div>
    <div className="pt-5">
      <p className="border-t pt-2 font-semibold text-base text-gray-400">Billing</p>
    </div>
    <div className="pt-5">
      <p className="border-t pt-2 font-semibold text-base text-gray-400">Payment</p>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/3 mt-8 md:mt-0">
    <p className="font-semibold pb-5">Order Summary</p>
    <div className="flex justify-between text-sm text-gray-400">
      <p>Subtotal</p>
      <p>$ 20 890.00</p>
    </div>
    <div className="flex justify-between text-sm text-gray-400 mt-1">
      <p>Estimated Delivery & Handling</p>
      <p>Free</p>
    </div>
    <div className="flex justify-between items-center border-t border-b py-3 mt-4 font-semibold text-sm">
      <p>Total</p>
      <p>$ 20 890.00</p>
    </div>
    <div className="text-xs text-gray-400 mt-2">
      <p>(The total reflects the price of your order, including all duties and taxes)</p>
    </div>
    <div className="font-semibold text-base mt-5">
      <p>Arrives Mon, 27 Mar-Wed, 12 Apr</p>
    </div>
    <div className="flex gap-4 mt-4">
      <div className="w-1/2">
        <img src="/summaryimg.png" alt="Product 1" className="w-full h-auto" />
      </div>
      <div className="w-1/2 text-sm">
        <p>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
        <p className="text-gray-400">Qty: 1</p>
        <p className="text-gray-400">Size: L</p>
        <p className="text-gray-400">$ 3 895.00</p>
      </div>
    </div>
    <div className="flex gap-4 mt-4">
      <div className="w-1/2">
        <img src="/summaryimg2.png" alt="Product 2" className="w-full h-auto" />
      </div>
      <div className="w-1/2 text-sm">
        <p>Nike Air Max 97 SE Men's Shoes</p>
        <p className="text-gray-400">Qty: 1</p>
        <p className="text-gray-400">Size: UK 8</p>
        <p className="text-gray-400">$ 16 995.00</p>
      </div>
    </div>
  </div>
</div>

              </div>
  )
}

export default CheckOut