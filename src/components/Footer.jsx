import React from 'react'
import { motion } from 'framer-motion'
import { BsGithub } from 'react-icons/bs'
import { FaRegCopyright } from 'react-icons/fa'
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className=' gap-8 flex flex-wrap py-6 px-16 bg-black justify-between items-center max-[970px]:text-center max-[600px]:justify-center w-full '>

      <p className=' text-[#ffffff6e] flex items-center max-[500px]:text-[10px]'>Copyright &nbsp; <FaRegCopyright/> &nbsp; {year} developed by Jordan Femi-Bella</p>
      <div>
        <motion.h1 whileHover={{scale: 0.9}} className=' text-white'>
          <a href="https://github.com/jaythecree8tor" target={'_blank'} rel="noreferrer"><BsGithub size={30}/></a>  
        </motion.h1>
      </div>
    </div>
  )
}

export default Footer
