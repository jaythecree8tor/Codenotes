import React from 'react'
import {Link} from "react-router-dom"
const NoPage = () => {
  return (
    <div className='relative  justify-center flex-col  text-center'>
      
      <div className=' z-[100] h-[100dvh] items-center justify-center flex '>
      
      <div className=' z-[100]'>
        <h1 className=' z-[100] font-cascadiaCode text-[300px] max-[600px]:text-[100px]'>404</h1>
        <Link to="/" className='z-[100] bg-slate-200 px-2 py-3 rounded-full shadow-2xl border-[1px] border-black font-fontspring transition-all duration-200 hover:shadow-none'>Go back home</Link>
      </div>
      
      </div>

    </div>
  )
}

export default NoPage
