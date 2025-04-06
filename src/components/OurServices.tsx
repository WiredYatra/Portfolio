import Image from 'next/image'
import React from 'react'

const OurServices = () => {
    return (
        <>

            <section className='w-full  bg-[#f8f8f8] py-10'>
                <div className='flex flex-col items-center '>
                    <div className='flex flex-col items-center justify-center  px-20 py-10'>
                    <h1 className='text-7xl font-bold text-blue-700'>Our Services</h1>
                    <p className='text-lg text-gray-600 mt-4'>We are a team of talented developers and designers who build custom websites for your business.</p>
                    </div>
                {/* This is first Row */}
                <div className='flex justify-center  gap-26'>
                    <div className='relative w-[400px] h-[400px] rounded-2xl'>
                        <Image
                            src='/images/services/service-1.png'
                            alt='services'
                            fill
                            className='object-cover rounded-2xl'
                        />
                    </div>
                    <div className=' flex flex-col gap-2 justify-center items-start md:w-[500px] h-[300px]'>
                        <h1 className='text-4xl font-bold'>Build <span className='text-blue-700'>Your Website</span></h1>

                        <p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat, unde facere ea sed nostrum quam quod, molestias, itaque adipisci hic maiores molestiae sapiente et ipsa nihil? Dolore, sed iure.</p>

                    </div>
                </div>

                {/* Second Row */}
                <div className='flex justify-center  gap-20'>

                    <div className=' flex flex-col gap-2 justify-center items-start md:w-[500px] h-[300px]'>
                        <h1 className='text-3xl font-semibold'>Hire Faster with Trusted Talent</h1>

                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat, unde facere ea sed nostrum quam quod, molestias, itaque adipisci hic maiores molestiae sapiente et ipsa nihil? Dolore, sed iure.</p>

                    </div>

                    <div className='relative w-[300px] h-[300px]'>
                        <Image
                            src='/images/faqimage.jpg'
                            alt='services'
                            fill
                            className='object-cover'
                        />
                    </div>

                </div>

                {/* Third Row */}
                <div className='flex justify-center  gap-20'>
                    <div className='relative w-[300px] h-[300px]'>
                        <Image
                            src='/images/faqimage.jpg'
                            alt='services'
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className=' flex flex-col gap-2 justify-center items-start md:w-[500px] h-[300px]'>
                        <h1 className='text-3xl font-semibold'>Hire Faster with Trusted Talent</h1>

                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat, unde facere ea sed nostrum quam quod, molestias, itaque adipisci hic maiores molestiae sapiente et ipsa nihil? Dolore, sed iure.</p>

                    </div>
                </div>
                </div>

            </section>
        </>
    )
}

export default OurServices