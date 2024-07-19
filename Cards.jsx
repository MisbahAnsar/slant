import React from 'react'

const Cont = () => {
  const images = [
    "./src/assets/img1.jpeg",
    "./src/assets/img2.jpeg",
    "./src/assets/img3.jpeg",
    "./src/assets/img4.png",
    "./src/assets/img5.jpg",
    "./src/assets/img6.jpg",
    "./src/assets/img1.jpeg",
    "./src/assets/img2.jpeg",
    "./src/assets/img3.jpeg",
    "./src/assets/img4.png",
    "./src/assets/img5.jpg",
    "./src/assets/img6.jpg",
  ]
  return (
    <div className='bg-black h-screen relative'>
      <div className="flex-wrap flex justify-center items-center">
    {images.map((src, index) => (
      <div key={index} className={`border-4 my-16 border-white m-2 rounded-3xl h-[44vh] w-[32vh] ${index % 2 === 0 ? 'mt-0' : 'mt-[-180px] '} ${index % 1,3,5 === 0 ? 'mt-0' : 'mt-[-40px]'}`}>
        <img className="w-full h-full object-cover rounded-2xl opacity-100" src={src} alt={` Image ${index + 1}`} />
      </div>
    ))}
  </div>
    </div>
  )
}

export default Cont


