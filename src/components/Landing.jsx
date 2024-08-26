
  import React from 'react';

const Landing = () => {
  return (
    <div className='text-black'>
      <div className='flex text-8xl justify-around relative p-8 max-xl:flex-col mx-5 md:mx-12'>

        <div className='w-full'>
          <div className='py-20'>
            Rent Your Dream 
            <div>House With us...</div>
          </div>
          <div className='text-2xl'>
            <div className='text-4xl py-6'>Explore Homelander</div>
            <div>
              <div className='my-5'>
                Amenities: Pool, gym, garden, garage, laundry room, etc.
                <div className='my-5' />
                Kitchen: Appliances, countertops, cabinets, etc.
                <div className='my-5' />
                Living Space: Fireplace, hardwood floors, ceiling height, etc.
                <div className='my-5' />
                Outdoor Space: Patio, deck, yard, etc.
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center flex-col mt-10 md:mt-0'>
          <div className='items-center justify-center flex'>
            <img src='/assets/img/homess.png' className='size-fit h-auto max-w-full my-5' />
          </div>
          <div className='flex gap-4 justify-center'>
            <div className='w-20 md:w-64'><img src='/assets/img/1sts.png' alt='' className=''/></div>
            <div className='w-20 md:w-64'><img src='/assets/img/4th.png' alt='' /></div>
            <div className='w-20 md:w-64'><img src='/assets/img/3rd.png' alt='' /></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing;

