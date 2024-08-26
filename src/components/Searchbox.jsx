

import React from 'react';

const Searchbox = () => {
  return (
    <div className='text-black bg-[rgb(210,225,236)] flex flex-col md:flex-row relative text-2xl justify-between rounded-xl mx-5 md:mx-72 px-5 md:px-12 items-center py-4'>
      <div className="flex flex-row gap-5 py-4 bg-[rgb(210,225,236)] w-full md:w-auto">
        <div className='flex flex-col bg-[rgb(210,225,236)]'>
          <div className='bg-[rgb(210,225,236)]'>USA</div>
          <div className='text-sm bg-[rgb(210,225,236)]'>Select your place</div>
        </div>
        <div className='size-8 py-2 bg-[rgb(210,225,236)]'><img src="/assets/Arrow/img.svg" className='bg-[rgb(210,225,236)]' /></div>
      </div>
      <div className="flex flex-row gap-5 py-4 bg-[rgb(210,225,236)] w-full md:w-auto">
        <div className='flex flex-col bg-[rgb(210,225,236)]'>
          <div className='bg-[rgb(210,225,236)]'>Houses</div>
          <div className='text-sm bg-[rgb(210,225,236)]'>Choose property type</div>
        </div>
        <div className='size-8 py-2 bg-[rgb(210,225,236)]'><img src="/assets/Arrow/img.svg" className='bg-[rgb(210,225,236)]' /></div>
      </div>
      <div className="flex flex-row gap-5 py-4 bg-[rgb(210,225,236)] w-full md:w-auto">
        <div className='flex flex-col bg-[rgb(210,225,236)]'>
          <div className='bg-[rgb(210,225,236)]'>$30k-$99k</div>
          <div className='text-sm bg-[rgb(210,225,236)]'>Choose price range</div>
        </div>
        <div className='size-8 py-2 bg-[rgb(210,225,236)]'><img src="/assets/Arrow/img.svg" className='bg-[rgb(210,225,236)]' /></div>
      </div>
      <div className="flex flex-row gap-5 py-4 bg-[rgb(210,225,236)] w-full md:w-auto">
        <div className='size-12 py-1 bg-[rgb(210,225,236)]'><img src="/assets/Arrow/search.svg" className='bg-[rgb(210,225,236)]' /></div>
      </div>
    </div>
  );
}

export default Searchbox;
