



import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Searchbox from './components/Searchbox'
import Footer from './components/Footer'
import Houses from './components/Houses'
import Image1 from './Big/Image1'
import Image2 from './Big/Image2'
import Image3 from './Big/Image3'
import Image4 from './Big/Image4'
import Image5 from './Big/Image5'
import Image6 from './Big/Image6'
import Image7 from './Big/Image7'
import Image8 from './Big/Image8'
import Image9 from './Big/Image9'
import Image10 from './Big/Image10'
import Image11 from './Big/Image11' 
import Image12 from './Big/Image12'

const Home = () => {
  return (
    <div className='h-full  '>
      <Navbar></Navbar>
      <Landing />
      <Searchbox />
      <Houses />
      <Footer />
    

    </div>
  )
}

export default Home
