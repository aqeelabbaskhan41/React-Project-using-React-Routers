import React from 'react'

function About() {
  return (
    <>
    <div className='grid grid-cols-2 mt-10 mx-32'>
      <div>
      <img src="about.jpg" alt="home image" className='rounded-xl' />
      </div>
      <div className='flex flex-col justify-center items-center px-10'>
        <h1 className='font-bold text-4xl '>React development is carried out by passionate developers</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur omnis sunt assumenda iure, quae exercitationem. Est debitis aliquid corporis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla necessitatibus dolorem soluta, quas cum veniam.</p>
      </div>
    </div>
    </>
  )
}

export default About