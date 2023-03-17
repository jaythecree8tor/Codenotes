import React from 'react'
import {VscAdd}  from 'react-icons/vsc'
import { motion } from 'framer-motion';
import { staggerContainer, textVariant,textVariant3, } from '../utils/motion';
import '../styles/hero.css'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='relative bg-black justify-center text-center px-20 max-[700px]:px-14  max-[700px]:py-[180px] max-[350px]:py-[150px]  py-[300px] overflow-hidden h-[100svh] '>
         <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
     className=' z-50'>
      <h1 className=' z-[100] text-[70px] font-bold  max-[700px]:text-[40px] max-[350px]:text-[30px] '>  <motion.span variants={textVariant(0.9)} className=' z-[100] text-white'>Cr<span className=' underline font-thin'>ea</span>te</motion.span>  <motion.span variants={textVariant(1.6)} className=' text-[#e75b5b]'>.</motion.span> <motion.span variants={textVariant(2.4)} className='z-[80] text-gradient tracking-wide'><span className=' font-cascadiaCode font-extralight italic z-[80]'>O</span>rganize</motion.span> <motion.span variants={textVariant(1.7)} className=' text-[#a6e75b]'>.</motion.span> <br/>
      <div className='flex-wrap z-[100]'><motion.span variants={textVariant(2.0)} className='z-[80] text-gradient'>Share</motion.span>  <motion.span variants={textVariant(2.8)} className='z-[80] text-[#5be5e7]'>.</motion.span> <motion.span variants={textVariant(1.4)} className='text-gradient z-[80]'>Easy</motion.span>  <motion.span variants={textVariant(2.8)} className='z-[80] text-[#c45be7]'>.</motion.span> <motion.span variants={textVariant(3.3)}  className='z-[80] font-fontspring lowercase text-white'>code</motion.span>
      <motion.span    variants={textVariant3}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }} className=' font-extralight italic text-[55px] max-[700px]:text-[35px] hero-gradient'>note.s</motion.span></div> </h1>
    <div className=' justify-center flex'>
     <Link to='/signup' className='z-[30]'><motion.button variants={textVariant(2.0)} className=' mt-10 text-black  bg-white font-fontspring px-2 py-2 rounded-full text-[20px] max-[500px]:text-[15px]  max-[500px]:px-1 max-[500px]:py-1 flex items-center shadow-2xl border-[1px] hover:shadow-none hover:bg-slate-200  border-black'><motion.span  whileTap={{scale: 1.3}} className='justify-center items-center  flex bg-black p-1 rounded-full mr-2' >
                    <div className=' bg-black border-[2px] border-white text-white p-1 rounded-full'>
                        <VscAdd size={15} className='  hover:rotate-180  transition-all duration-300'/>
                    </div>
             </motion.span>Create notes</motion.button></Link> 
    </div>
      
    {/* <img src={card1} alt="" className=' absolute' /> */}

      </motion.div>      <div className="absolute  w-[40%] h-[35%] top-0 purple__gradient"/>
    
      <div className="absolute  w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
  )
}

export default Hero
