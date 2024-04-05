/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

export const Testmonials = () => {
  return (

    <section className="skill py-0 pb-40 relative" id="skills">
    <div className="container">
                <div className="skill-bx bg-black  text-center  lg:px-40 ">
                    <h2 className='text-primary text-5xl font-bold'>Testimonials</h2>
                    <p className='text-gray-300 text-xl mt-6  max-w-xl text-center mx-auto'>"Unveiling excellence with every interaction - an experience beyond expectation!"</p>
                    
<div className='flex flex-col gap-10  '>
    <div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
        <div
            className="flex justify-center items-center h-64 bg-primary rounded-lg overflow-hidden">
            <div className="px-8">
                <p className="text-lg font-medium text-black mb-2 text-start">"The best experience ever"</p>
                <p className="text-black text-start">Throughout the process, Awais demonstrated professionalism, efficiency, and genuine dedication to crafting a high-quality website for my business. </p>
                <div className="mt-4 flex items-center">
                    <Image className="h-14 w-14 rounded-full mr-4" src="https://pagedone.io/asset/uploads/1696229994.png" alt="Avatar of person" width={500} height={500}/>

                    <div>
                        <p className="text-black font-medium">Mary Johnson</p>
                        <p className="text-black">CEO, Acme Inc.</p>
                    </div>
                </div>
            </div>
        </div>

        <div
            className="flex justify-center items-center h-64 bg-primary rounded-lg overflow-hidden">
            <div className="px-8">
                <p className="text-lg font-medium text-black mb-2 text-start">"The most exceptional experience."</p>
                <p className="text-black text-start">From start to finish, the Awais was professional, efficient, and truly dedicated to creating a top-notch website for my business. </p>
                <div className="mt-4 flex items-center">
                <Image className="h-14 w-14 rounded-full mr-4" src="https://pagedone.io/asset/uploads/1696229969.png" alt="Avatar of person" width={500} height={500}/>

                    <div>
                        <p className="text-black font-medium">Mary Johnson</p>
                        <p className="text-black">CEO, Acme Inc.</p>
                    </div>
                </div>
            </div>
        </div>

        <div
            className="flex justify-center items-center h-64 bg-primary rounded-lg overflow-hidden">
            <div className="px-8">
                <p className="text-lg font-medium text-black mb-2 text-start">"The ultimate experience"</p>
                <p className="text-black text-start">From beginning to end, Awais exhibited professionalism, efficiency, and unwavering dedication to crafting a top-tier website for my business.</p>
                <div className="mt-4 flex items-center">
                    <Image className="h-14 w-14 rounded-full mr-4" src="https://pagedone.io/asset/uploads/1696230027.png" alt="Avatar of person" width={500} height={500}/>
                    <div>
                        <p className="text-black font-medium">Mary Johnson</p>
                        <p className="text-black">CEO, Acme Inc.</p>
                    </div>
                </div>
            </div>
        </div>

       



    </div>

      
    </div>
        </div>
    </div>
</section>


)
}
