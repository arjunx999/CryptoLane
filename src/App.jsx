import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto bg-gradient-custom'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App