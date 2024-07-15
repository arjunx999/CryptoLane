import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <div className='w-full h-full overflow-x-hidden overflow-y-auto bg-gradient-custom'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App