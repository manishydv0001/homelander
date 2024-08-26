import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './home.jsx'
import Image1 from './Big/Image1.jsx';
import Image2 from './Big/Image2.jsx';
import Image3 from './Big/Image3.jsx';
import Image4 from './Big/Image4.jsx';
import Image5 from './Big/Image5.jsx';
import Image6 from './Big/Image6.jsx';
import Image7 from './Big/Image7.jsx';
import Image8 from './Big/Image8.jsx';
import Image9 from './Big/Image9.jsx';
import Image10 from './Big/Image10.jsx';
import Image11 from './Big/Image11.jsx';
import Image12 from './Big/Image12.jsx';
import Signup from './components/Signup.jsx';
import LogSign from './LogSign.jsx';
import Login1st from './Login1st.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<LogSign />} />
          <Route path="/login" element={<Login1st/>} />
          <Route path="/image" element={<Image1 />} />
          <Route path="/image2" element={<Image2 />} />
          <Route path="/image3" element={<Image3 />} />
          <Route path="/image4" element={<Image4 />} />
          <Route path="/image5" element={<Image5 />} />
          <Route path="/image6" element={<Image6 />} />
          <Route path="/image7" element={<Image7 />} />
          <Route path="/image8" element={<Image8 />} />
          <Route path="/image9" element={<Image9 />} />
          <Route path="/image10" element={<Image10 />} />
          <Route path="/image11" element={<Image11 />} />
          <Route path="/image12" element={<Image12 />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App









