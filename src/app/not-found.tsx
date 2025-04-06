// import { section } from 'framer-motion/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page= () => {
  return (

    <section className='flex items-center justify-center gap-30 w-full px-20'>

        <div className='flex flex-col items-center justify-center  '>
        <h1 className='text-8xl font-bold text-blue-700'>404</h1>
        <h1 className='text-8xl font-bold text-blue-700'>Page Not Found</h1>
        <p className='text-lg text-gray-600 mt-4'>Sorry, the page you are looking for does not exist.</p>
        <p className='text-lg text-gray-600 mt-4'>Please check the URL or return to the homepage.</p>
        <Link href='/' className='mt-6 text-blue-700 hover:underline'>Go to Homepage</Link>
        </div>
        <div className='relative w-[800px] h-[600px] '>
            <Image
                src='/images/notfound/notfound.jpg'
                alt='404'
                fill
                className='object-cover w-full h-full'
            />
        </div>
    </section>
  )
}

export default page