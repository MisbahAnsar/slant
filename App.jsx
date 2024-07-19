import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Cards from './components/Cards'
function App() {
  return (
    <>
      <div className='w-full min-h-screen text-white bg-black'>
        <Navbar />
        <Landing />
        <Cards />
      </div>
    </>
  )
}

export default App
