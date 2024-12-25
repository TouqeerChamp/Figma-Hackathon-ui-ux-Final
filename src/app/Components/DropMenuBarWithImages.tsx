import Link from 'next/link'
import React from 'react'

const DropMenuBarWithImages = () => {
  return (
    <div>
      {/* Middle (500) Hide Filters & Sort By Section */}
       <div className='flex justify-between container w-full h-[51px] mx-auto items-center mt-20'>
        <div className="w-[88px] h-[25px] ml-8">
         <h2><b>New (500)</b></h2>
          </div>
        <div className="flex w-[224.40px] h-[25px] space-x-6 ">
          <p className='flex gap-1'> Hide Filters <img src="/filter.png" alt="filter"/></p>
          <p className='flex'> Sort By <select name="select" id="sort"></select></p>
          </div>
         </div>

    {/* List Section */}
    <div className="container mx-auto px-4 py-2 flex flex-col lg:flex-row">
    <div className="max-h-screen lg:w-[230px] lg:h-[849px] mb-4 lg:mb-0">
    <ul className="max-h-screen lg:w-[192px] text-[12px] space-y-2 font-semibold">
      <li className="hover:text-gray-300 cursor-pointer">Shoes</li>
      <li className="hover:text-gray-300 cursor-pointer">Sports Bras</li>
      <li className="hover:text-gray-300 cursor-pointer">Tops & T-Shirts</li>
      <li className="hover:text-gray-300 cursor-pointer">Hoodies & Sweatshirts</li>
      <li className="hover:text-gray-300 cursor-pointer">Jackets</li>
      <li className="hover:text-gray-300 cursor-pointer">Trousers & Tights</li>
      <li className="hover:text-gray-300 cursor-pointer">Shorts</li>
      <li className="hover:text-gray-300 cursor-pointer">Tracksuits</li>
      <li className="hover:text-gray-300 cursor-pointer">Jumpsuits & Rompers</li>
      <li className="hover:text-gray-300 cursor-pointer">Skirts & Dresses</li>
      <li className="hover:text-gray-300 cursor-pointer">Socks</li>
      <li className="hover:text-gray-300 cursor-pointer">Accessories & Equipment</li>
    </ul>
            

            {/* Gender Section */}
          <div className='w-[192px] h-[140px]'>
            <div className="w-[188px] h-[40px] text-[14px] flex justify-between font-semibold">
              <p>Gender</p><p><select name="select" id="sort"></select></p></div>
              <div className="w-[192px] h-[108px] text-[12px] space-y-1">
                <div className=""><input type="checkbox" /> Men</div>
                <div className=""><input type="checkbox" /> WoMen</div>
                <div className=""><input type="checkbox" /> Unisex</div>
              </div>
            </div>
            {/* Kids Section */}
            <div className='w-[192px] h-[140px]'>
            <div className="w-[188px] h-[40px] text-[14px] flex justify-between font-semibold">
              <p>kids</p><p><select name="select" id="sort"></select></p></div>
              <div className="w-[192px] h-[108px] text-[12px] space-y-1">
                <div className=""><input type="checkbox" /> Boys</div>
                <div className=""><input type="checkbox" /> Girls</div>
              </div>
            </div>
            {/* Shop By Price Section */}
            <div className='w-[192px] h-[140px]'>
            <div className="w-[188px] h-[40px] text-[14px] flex justify-between font-semibold">
              <p>Shop By Price</p><p><select name="select" id="sort"></select></p></div>
              <div className="w-[192px] h-[108px] text-[12px] space-y-1">
                <div className=""><input type="checkbox" /> Under $ 2 500.00</div>
                <div className=""><input type="checkbox" /> $ 2 501.00</div>
              </div>
            </div>
            </div>





                {/* Right Images Section */}
<div className="w-full flex flex-wrap gap-5 ml-2">
  <div className="w-full sm:w-[320px] h-[450px]">
    <div className="w-full sm:w-[320px] h-[320px]">
      <img src="/01.png" alt="" className="w-full h-full hover:bg-gray-500 cursor-pointer" />
    </div>
    <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
      <div className="text-red-500 font-semibold"><p>Just In</p></div>
      <div className="font-semibold"><p>Nike Air Force 1 Mid '07</p></div>
      <div className="text-gray-500"><p>Men's Shoes</p></div>
      <div className="text-gray-500"><p>1 Colour</p></div>
      <div className="font-semibold pt-3"><p>MRP : $ 10 795.00</p></div>
    </div>
  </div>

  <div className="w-full sm:w-[320px] h-[450px]">
    <div className="w-full sm:w-[320px] h-[320px]">
      <img src="/02.png" alt="" className="w-full h-full hover:bg-gray-500 cursor-pointer" />
    </div>
    <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
      <div className="text-red-500 font-semibold"><p>Just In</p></div>
      <div className="font-semibold"><p>Nike Court Vision Low Next Nature</p></div>
      <div className="text-gray-500"><p>Men's Shoes</p></div>
      <div className="text-gray-500"><p>1 Colour</p></div>
      <div className="font-semibold pt-3"><p>MRP : $ 4 995.00</p></div>
    </div>
  </div>

  <div className="w-full sm:w-[320px] h-[450px]">
    <div className="w-full sm:w-[320px] h-[320px]">
      <Link href="/productdetail">
        <img src="/03.png" alt="" className="w-full h-full hover:bg-gray-500 cursor-pointer" />
      </Link>
    </div>
    <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
      <div className="text-red-500 font-semibold"><p>Just In</p></div>
      <div className="font-semibold"><p>Nike Air Force 1 PLT.AF.ORM</p></div>
      <div className="text-gray-500"><p>Women's Shoes</p></div>
      <div className="text-gray-500"><p>1 Colour</p></div>
      <div className="font-semibold pt-3"><p>MRP : $ 8 695.00</p></div>
    </div>
  </div>

  <div className="w-full sm:w-[320px] h-[450px]">
    <div className="w-full sm:w-[320px] h-[320px]">
      <img src="/04.png" alt="" className="w-full h-full hover:bg-gray-500 cursor-pointer" />
    </div>
    <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
      <div className="text-red-500 font-semibold"><p>Just In</p></div>
      <div className="font-semibold"><p>Nike Air Force 1 React</p></div>
      <div className="text-gray-500"><p>Men's Shoes</p></div>
      <div className="text-gray-500"><p>1 Colour</p></div>
      <div className="font-semibold pt-3"><p>MRP : $ 13 295.00</p></div>
    </div>
  </div>

  <div className="w-full sm:w-[320px] h-[450px]">
    <div className="w-full sm:w-[320px] h-[320px]">
      <img src="/05.png" alt="" className="w-full h-full hover:bg-gray-500 cursor-pointer" />
    </div>
    <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
      <div className="text-red-500 font-semibold"><p>Just In</p></div>
      <div className="font-semibold"><p>Air Jordan 1 Elevate Low</p></div>
      <div className="text-gray-500"><p>Women's Shoes</p></div>
      <div className="text-gray-500"><p>1 Colour</p></div>
      <div className="font-semibold pt-3"><p>MRP : $ 11 895.00</p></div>
    </div>
  </div>

  <div className="w-full sm:w-[320px] h-[450px]">
    <div className="w-full sm:w-[320px] h-[320px]">
      <img src="/06.png" alt="" className="w-full h-full hover:bg-gray-500 cursor-pointer" />
    </div>
    <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
      <div className="text-red-500 font-semibold"><p>Just In</p></div>
      <div className="font-semibold"><p>Nike Standard Issue</p></div>
      <div className="text-gray-500"><p>Men's Shoes</p></div>
      <div className="text-gray-500"><p>1 Colour</p></div>
      <div className="font-semibold pt-3"><p>MRP : $ 2 895.00</p></div>
    </div>
  </div>


              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/07.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Dunk Low Retro SE</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 9 895.00</p></div>
                  </div>
                </div>
              

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/08.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Dri-FIT UV Hyverse</p></div>
                    <div className='text-gray-500'><p>Men's Short-Sleeve Graphic Fitness Top</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 2 495.00</p></div>
                  </div>
                </div>
              
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/09.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Court Vision Low</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 5695.00</p></div>
                  </div>
                </div>
              
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/10.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Dri-FIT Ready</p></div>
                    <div className='text-gray-500'><p>Men's Short-Sleeve Fitness Top</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 2 495.00</p></div>
                  </div>
                </div>
                
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/07.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike One Leak Protection: Period</p></div>
                    <div className='text-gray-500'><p>Women's Mid-Rise 18cm (approx.) Biker Shorts</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 3 395.00</p></div>
                  </div>
                </div>

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/12.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Air Force 1 Mid '07</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 7 495.00</p></div>
                  </div>
                </div>

            <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/13.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Blazer Low Platform</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 8 195.00</p></div>
                  </div>
                </div>
              

               <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/14.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Air Force 1 '07</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 10 795.00</p></div>
                  </div>
                </div>
              
                <div className="w-[320px] h-[450px]">
                <div className="w-[320px] h-[320px]">
                  <img src="/15.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Pro Dri-Fit</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 1 495.00</p></div>
                  </div>
                </div>
              

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/16.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Dunk Low Retro</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 8 695.00</p></div>
                  </div>
                </div>
              

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/17.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Air Max SC</p></div>
                    <div className='text-gray-500'><p>Women's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 5 995.00</p></div>
                  </div>
                </div>
              
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/18.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Dri-FIT UV Miler</p></div>
                    <div className='text-gray-500'><p>Men's Short-Sleeve Running Top</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 1 695.00</p></div>
                  </div>
                </div>
              

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/19.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Air Max SYSTM</p></div>
                    <div className='text-gray-500'><p>Older Kid's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 6 495.00</p></div>
                  </div>
                </div>
                
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/18.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Alate All U</p></div>
                    <div className='text-gray-500'><p>Women's Light-Support Lightly Lined U-<br/>Neck Printed Sports Bra</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 2 195.00</p></div>
                  </div>
                </div>

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/21.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Court Legacy Lift</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 7 495.00</p></div>
                  </div>
                </div>

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/06.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Air Bra Tank</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 3 095.00</p></div>
                  </div>
                </div>
              

              <div className="w-full sm:w-[320px] h-[450px]"> 
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/23.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike SB Zoom Janoski OG+</p></div>
                    <div className='text-gray-500'><p>Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 8 595.00</p></div>
                  </div>
                </div>
              
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/24.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Dri-FIT Run Division Rise 365</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 3 495.00</p></div>
                  </div>
                </div>
              
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/25.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Dri-FIT Challenger</p></div>
                    <div className='text-gray-500'><p>Men's 18cm (approx.) 2-in-1 Versatile Shorts</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 2 495.00</p></div>
                  </div>
                </div>
                
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/26.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Jordan Series ES</p></div>
                    <div className='text-gray-500'><p>Men's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 7 495.00</p></div>
                  </div>
                </div>

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/27.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Outdoor Play</p></div>
                    <div className='text-gray-500'><p>Older Kids' Oversized Woven Jacket</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 3 895.00</p></div>
                  </div>
                </div>

            <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/28.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Sportswear Trend</p></div>
                    <div className='text-gray-500'><p>Older Kids '(Girls)' High-waisted Woven Shorts</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 2 495.00</p></div>
                  </div>
                </div>
              

              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/29.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike Blazer Low '77 Jumbo</p></div>
                    <div className='text-gray-500'><p>Women's Shoes</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 8 595.00</p></div>
                  </div>
                </div>
              
              <div className="w-full sm:w-[320px] h-[450px]">
                <div className="w-full sm:w-[320px] h-[320px]">
                  <img src="/30.png" alt="" className='w-full h-full hover:bg-gray-500 cursor-pointer'/>
                  </div>
                  <div className="w-full sm:w-[348px] h-[185px] text-[12px] p-2">
                    <div className='text-red-500 font-semibold'><p>Just In</p></div>
                    <div className='font-semibold'><p>Nike SB Force 58</p></div>
                    <div className='text-gray-500'><p>Skate Shoe</p></div>
                    <div className='text-gray-500'><p>1 Colour</p></div>
                    <div className='font-semibold pt-3'><p>MRP : $ 5 995.00</p></div>
                  </div>
                </div>

                
                <div className="container mt-32 border-t w-full sm:w-[1000px]">
  <div className="font-semibold mt-[50px]">
    <div>
      <p>Related Categories</p>
    </div>
  </div>
  <div className="flex flex-wrap w-full sm:w-[1090px] gap-2 pt-5">
    <div className="border rounded-2xl text-[9px] py-2 px-3 hover:text-gray-300 cursor-pointer"><p>Best Selling Products</p></div>
    <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>Best Shoes</p></div>
    <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>New Basketball Shoes</p></div>
    <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>New Football Shoes</p></div>
    <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>New Men's Shoes</p></div>
    <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>New Running Shoes</p></div>
    <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>Best Men's Shoes</p></div>
    <div className="flex flex-wrap w-full sm:w-[1090px] gap-2">
      <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>New Jordan Shoes</p></div>
      <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>Best Women's Shoes</p></div>
      <div className="border rounded-2xl p-[3px] text-[9px] py-2 px-8 hover:text-gray-300 cursor-pointer"><p>Best Training & gym</p></div>
    </div>
  </div>
</div>

           </div>


    </div>
    </div>
  )
}

export default DropMenuBarWithImages