import React from 'react'


const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-4 lg:px-44 sm:px-18 py-4 font-["Neue Montreal"] flex justify-between items-center border bg-black'>
      <div className='text-xl tracking-tighter font-["Founders Grotesk semibold"] font-semibold'>The Slet Agency</div>
      <div className='links flex gap-10'>
        {["Home", "About", "Services", "Contact"].map((item, index)=>(
          <a key={index} className={`text-md capitalize font-semibold scale-100 hover:scale-110 transition duration-300 cursor-pointer`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar