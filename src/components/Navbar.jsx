import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();
   const handle = () => {
  navigate('/signup');
  }
  const handle2 = () => {
    navigate('/login');
    }

  return (
    <div className="bg-[rgb(210,225,236)] text-2xl flex flex-col hover:shadow-2xl hover:transition-shadow hover:shadow-slate-500  md:flex-row justify-between px-11 mx-5 md:mx-20 text-black rounded-xl items-center relative mt-8 py-5">
      <div className='bg-[rgb(210,225,236)] '>Homelander</div>
      <div className='flex gap-4 md:gap-9 bg-[rgb(210,225,236)] mt-4 md:mt-0'>
        <div className='text-black text-2xl rounded-full'>
          <button className='bg-[rgb(210,225,236)]'onClick={handle2} >Login</button>
        </div>
        <div className='text-black text-2xl rounded-full'>
          <button className='bg-[rgb(210,225,236)]' onClick={handle}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
