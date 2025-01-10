import TopNavbarSignIn from "./Components/TopNavbarSignIn";
import Image from "next/image";
import Header from "./Components/Header";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <>
    <div>
      <TopNavbarSignIn />
      <Header />
      <div className="w-full h-[58px] mx-auto bg-slate-100">
      <div className="container mx-auto text-center w-full h-[58px] bg-slate-100">
        <p className="text-[12px] font-semibold pt-3">Hello Nike App</p>
        <p className="text-[10px]">Download the app to access everything Nike. <u>Get Your Great</u>.</p>
      </div>
      </div>

      {/* Slider */}
      <div className="w-full mx-auto">
        <div className="container mx-auto w-full">
          <div className="">
            <img src="/slideimg.png" alt="slider" />
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full">
        <div className="text-center">
          <div className="pt-5">
            <p className="text-[10px] font-semibold">First Look</p>
            <p className="font-semibold text-3xl">NIKE AIR MAX PULSE</p>
            <p className="text-[10px] pt-3">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
            —designed to push you past your limits and help you go to the max.</p>
          </div>
          <div className="space-x-2 pt-3">
            <button className="bg-black text-white px-3 py-2 text-[10px] rounded-2xl">Notify Me</button>
            <button className="bg-black text-white px-3 py-2 text-[10px] rounded-2xl">Shop Air Max</button>
          </div>
        </div>
      </div>



<div className="container mx-auto w-full pt-8">
  <Carousel
    opts={{
      align: "start",
    }}
    className="w-full mx-auto max-w-5xl"
  >
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="mx-">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
                <Image
                  src={`/02.png`}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full rounded-md"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>;





      <div className="container mx-auto w-full pt-12">
          <div className="pt-12">
            <p className="font-semibold text-xl">Featured</p>
            <img src="/feature.png" alt="feature" />
          </div>
      </div>




      <div className="container mx-auto w-full pt-8">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mx-auto max-w-5xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="mx-">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                  <img
                src={`/03.png`}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full rounded-md"
              />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>



      <div className="container mx-auto w-full pt-12">
          <div className="pt-12">
            <p className="font-semibold text-xl">Dont Miss</p>
            <img src="/dontmiss.png" alt="dontmiss"/>
          </div>
      </div>



      <div className="container mx-auto w-full pt-12">
          <div className="pt-12">
            <p className="font-semibold text-xl">Dont Miss</p>
            <img src="/essential.png" alt="essential"/>
          </div>
      </div>


      <div className="container mx-auto">
      <div className="w-[880px] h-[200px] pt-20 py-12 flex justify-between items-center mx-auto text-[12px] text-gray-600 max-h-screen ">
          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3">Icons</li>
              <li className="cursor-pointer hover:text-black">Air Force 1</li>
              <li className="cursor-pointer hover:text-black">Huarache</li>
              <li className="cursor-pointer hover:text-black">Air Max 90</li>
              <li className="cursor-pointer hover:text-black">Air Max 95</li>
            </ul>
          </div>

          <div className="">
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3">Shoes</li>
              <li className="cursor-pointer hover:text-black">All Shoes</li>
              <li className="cursor-pointer hover:text-black">Custom Shoes</li>
              <li className="cursor-pointer hover:text-black">Jordan Shoes</li>
              <li className="cursor-pointer hover:text-black">Running Shoes</li>
            </ul>
          </div>

          <div className="">
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3">Clothing</li>
              <li className="cursor-pointer hover:text-black">All Clothing</li>
              <li className="cursor-pointer hover:text-black">Modest Wear</li>
              <li className="cursor-pointer hover:text-black">Hoodies & Pullovers</li>
              <li className="cursor-pointer hover:text-black">Shirts & Tops</li>
            </ul>
          </div>

          <div className="">
            <ul className="space-y-3">
              <li className="font-semibold text-black pb-3">Kids</li>
              <li className="cursor-pointer hover:text-black">Infant & Toddler Shoes</li>
              <li className="cursor-pointer hover:text-black">Kids Shoes</li>
              <li className="cursor-pointer hover:text-black">Kids Jordan Shoes</li>
              <li className="cursor-pointer hover:text-black">Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
    </>
  );
}
