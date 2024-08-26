import React from 'react'

const Image11 = () => {
    return (
        <div className='flex flex-col md:flex-row gap-8 md:gap-36 mx-4 md:mx-28 m-11'>
            <div className='flex-1'>
                <div className='text-lg md:text-2xl font-sans px-2 md:px-4'>
                    <div className='font-sans text-xl md:text-3xl'>PentHouse</div>
                    <div>100 Modern Avenue, <div /> CA 94102</div>
                    <div className='text-xl md:text-3xl py-2 md:py-4'>$79,000</div>
                </div>
                <div>
                    <img src="assets/img/houses/house11lg.png" alt="Loading" className='w-full md:w-auto'/>
                </div>
                <div className='text-lg md:text-2xl py-8 md:py-14 px-2 md:px-4'>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-6'>
                        <div>4 Bedroom</div>
                        <div>3 Bathroom</div>
                        <div>4200sq ft Area</div>
                    </div>
                    <p className='leading-relaxed'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, accusamus quisquam! Expedita sunt officiis ex illo soluta modi cum deserunt.
                    </p>
                </div>
            </div>
            <div className='text-lg md:text-2xl border rounded border-[rgb(167,163,163)] w-full md:w-6/12 py-6 md:py-10 my-6 md:my-10'>
                <div className='border rounded border-[rgb(167,163,163)] my-6 md:my-10 mx-4 md:mx-16'>
                    <input className='h-12 md:h-16 w-full px-2 md:px-4' type="text" placeholder='Name *' required/>
                </div>
                <div className='border rounded border-[rgb(167,163,163)] my-6 md:my-10 mx-4 md:mx-16'>
                    <input className='h-12 md:h-16 w-full px-2 md:px-4' type="email" placeholder='Email *' required/>
                </div>
                <div className='border rounded border-[rgb(167,163,163)] my-6 md:my-10 mx-4 md:mx-16'>
                    <input className='h-12 md:h-16 w-full px-2 md:px-4' type="tel" placeholder='Phone *' required/>
                </div>
                <div className='border rounded border-[rgb(167,163,163)] my-6 md:my-10 mx-4 md:mx-16'>
                    <textarea className='h-32 md:h-48 w-full px-2 md:px-4' placeholder='Review *' required/>
                </div>
                <div className='flex flex-col md:flex-row justify-around items-center gap-4 md:gap-6'>
                    <button className='border rounded border-[rgb(167,163,163)] my-4 md:my-6 text-slate-600 text-lg md:text-xl py-2 md:py-3 px-4 md:px-5'>Send Message</button>
                    <button className='border rounded border-[rgb(167,163,163)] text-slate-600 text-lg md:text-xl py-2 md:py-3 px-4 md:px-5'>Call</button>
                </div>
            </div>
        </div>
    )
}

export default Image11
