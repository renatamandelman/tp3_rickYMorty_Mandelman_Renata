import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeContainer = () => {
  return (
    <>
    <section className='relative w-full h-[100vh] bg-cover bg-center p-6 text-white flex justify-start items-center'
    style={{
        backgroundImage: `url(https://wallpapercat.com/w/full/1/f/5/46701-3840x2160-desktop-4k-rick-and-morty-background-image.jpg)`,
      }} >
    <div className="absolute inset-0 bg-black/50  z-0" />


      <div className="relative ml-40 lg:z-10 flex flex-col space-y-4 items-start ">
      <Image src={"/assets/logo.svg"} width={500} height={500} alt="logo" />
      <p className='ml-5 text-[#a6cccc]'>By Justin Roiland && Dan Harmon</p>
      <Link href={""} className='ml-5  inline-block px-6 py-2 border border-[#88e23b] text-white rounded hover:bg-[#88e23b] hover:text-black transition'>Episode 1</Link>
        </div>
        

      </section>
      
    </>
  )
}

export default HomeContainer