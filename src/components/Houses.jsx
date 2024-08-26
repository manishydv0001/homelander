
import { useNavigate } from 'react-router-dom';
import React from 'react'

const Houses = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate('/image')
  }
  const handle2 = () => {
    navigate('/image2')
  }
  const handle3 = () => {
    navigate('/image3')
  }
  const handle4 = () => {
    navigate('/image4')
  }
  const handle5 = () => {
    navigate('/image5')
  }
  const handle6 = () => {
    navigate('/image6')
  }
  const handle7 = () => {
    navigate('/image7')
  }
  const handle8 = () => {
    navigate('/image8')
  }
  const handle9 = () => {
    navigate('/image9')
  }
  const handle10 = () => {
    navigate('/image10')
  }
  const handle11 = () => {
    navigate('/image11')
  }
  const handle12 = () => {
    navigate('/image12')
  }

    return (
      <div className='text-black bg-[rgb(198, 199, 202)] py-8 md:py-36 px-4 md:px-10 mx-2 md:mx-14'>

        {/* First Row */}
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          <div onClick={handle} className='border-[rgb(154,150,150)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house1.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>Apartment</div>
              <div>28 Westport Dr.Warminster,18</div>
              <div className='text-3xl py-4'>$30000</div>
            </div>
          </div>
          <div onClick={handle2} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house2.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>House</div>
              <div>45 Tenth Avenue, NY 100114</div>
              <div className='text-3xl py-4'>$42000</div>
            </div>
          </div>
          <div onClick={handle3} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house3.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>PentHouse</div>
              <div>22 N Lincoln Park Wes,614</div>
              <div className='text-3xl py-4'>$49000</div>
            </div>
          </div>
          <div onClick={handle4} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house4.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>FarmHouse</div>
              <div>46 South Grand Avenue,71</div>
              <div className='text-3xl py-4'>$62000</div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className='flex flex-col md:flex-row justify-between gap-8 mt-8'>
          <div onClick={handle5} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house5.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>FarmHouse</div>
              <div>101 Pearl Street, MA 02111</div>
              <div className='text-3xl py-4'>$61000</div>
            </div>
          </div>
          <div onClick={handle6} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house6.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>House</div>
              <div>1000 Main Street, CO 80202</div>
              <div className='text-3xl py-4'>$58000</div>
            </div>
          </div>
          <div onClick={handle7} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img src="assets/img/houses/house7.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>Apartment</div>
              <div>123 Main Street, USA 12345</div>
              <div className='text-3xl py-4'>$49000</div>
            </div>
          </div>
          <div onClick={handle8} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img src="assets/img/houses/house8.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>PentHouse</div>
              <div>101 Hudson Street, NJ 07030</div>
              <div className='text-3xl py-4'>$75000</div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className='flex flex-col md:flex-row justify-between gap-8 mt-8'>
          <div onClick={handle9} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img src="assets/img/houses/house9.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>Apartment</div>
              <div>123 Green Street, WA 9810</div>
              <div className='text-3xl py-4'>$42000</div>
            </div>
          </div>
          <div onClick={handle10} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house10.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>FarmHouse</div>
              <div>100 Riverside Drive, NY 10024</div>
              <div className='text-3xl py-4'>$81000</div>
            </div>
          </div>
          <div onClick={handle11} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img src="assets/img/houses/house11.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>PentHouse</div>
              <div>100 Modern Avenue, CA 94102</div>
              <div className='text-3xl py-4'>$79000</div>
            </div> 
          </div>
          <div onClick={handle12} className='border-[rgb(166,161,161)] hover:shadow-2xl hover:shadow-slate-500 px-4 py-4 rounded-md'>
            <img  src="assets/img/houses/house12.png" />
            <div className='text-2xl font-sans'>
              <div className='font-sans text-3xl'>House</div>
              <div>123 Grove Street, CA 90036</div>
              <div className='text-3xl py-4'>$99000</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Houses
