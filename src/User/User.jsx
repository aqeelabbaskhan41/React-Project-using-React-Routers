import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {idfetch} = useParams()
  return (
    <div className=' bg-orange-700  mx-32 mt-5 p-5 text-center font-bold text-3xl text-white'>
       User:{idfetch}
    </div>
  )
}

export default User