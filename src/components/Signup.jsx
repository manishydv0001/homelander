

import React from 'react'

const Signup = () => {
  return (
    <div className='px-4 md:px-96 flex items-center justify-center '>
      <div className='text-lg md:text-2xl border rounded border-black w-full md:w-6/12 py-6 md:py-10 my-6 md:my-10 bg-[rgb(69,91,107)]'>
        <div className='border rounded border-[rgb(167,163,163)] my-4 md:my-10 mx-2 md:mx-16'>
          <input
            className='h-12 md:h-16 w-full px-2 md:px-4'
            type='text'
            placeholder='Name *'
            required
          />
        </div>
        <div className='border rounded border-[rgb(167,163,163)] my-4 md:my-10 mx-2 md:mx-16'>
          <input
            className='h-12 md:h-16 w-full px-2 md:px-4'
            type='email'
            placeholder='Email *'
            required
          />
        </div>
        <div className='border rounded border-[rgb(167,163,163)] my-4 md:my-10 mx-2 md:mx-16'>
          <input
            className='h-12 md:h-16 w-full px-2 md:px-4'
            type='number'
            placeholder='Phone *'
            required
          />
        </div>
        <div className='border rounded border-[rgb(167,163,163)] my-4 md:my-10 mx-2 md:mx-16'>
          <input
            className='h-12 md:h-16 w-full px-2 md:px-4'
            placeholder='Password*'
            required
            type='password'
          />
        </div>
        <div className='flex flex-col md:flex-row justify-around items-center gap-4 md:gap-6 bg-[rgb(69,91,107)]' >
          <button className='border rounded border-[rgb(167,163,163)] my-4 md:my-6 text-lg md:text-xl py-2 md:py-3 px-4 md:px-5 bg-[rgb(210,225,236)]  text-black'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup

