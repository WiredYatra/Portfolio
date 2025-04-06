import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const ServiceHero = () => {
  return (
    <>
    <section className='flex items-center justify-between w-full h-full my-10 px-20'>
        {/* Heading and Para */}
        <div className='flex flex-col items-start justify-center w-1/2 h-full px-10'>
            <h1 className='text-4xl font-bold text-[#333333]'>Build Your <span className='text-blue-700'>Custom Website</span></h1>
            <p className='text-lg text-[#333333] mt-4'>We are a team of talented developers and designers who build custom websites for your business.</p>
            <Button className='mt-6 bg-blue-700 text-white hover:bg-blue-800 text-[20px]'>Get Started</Button>
            
        </div>
        {/* Image */}
        <div className='relative w-[800px] h-[600px] '>
        <Image
            src='/images/services/servicehero.png'
            alt='hero'
            fill
            className='object-contain w-full h-full'
            />

        </div>
    </section>
    </>
  )
}

export default ServiceHero