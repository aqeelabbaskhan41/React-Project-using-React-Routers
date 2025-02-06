import React from 'react'

function Home() {
  return (
    <>
    <div className='grid grid-cols-2 mt-10 mx-32'>
      <div >
      <img src="./public/Home pic.jpg" className='rounded-lg' alt="home image" />
      </div>
      <div className='flex flex-col justify-center items-center p-10'>
        <h1 className='font-bold text-6xl'>Download Now</h1>
        <br />
        <h2 className='font-bold text-4xl '>Lorem ipsum</h2>
        <button className="bg-orange-700 text-white px-4 py-4 rounded-lg mt-5 font-bold">Download now</button>
      </div>
    </div>
    </>
  )
}

export default Home