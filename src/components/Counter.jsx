import React, { useState } from 'react'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import ScrollTrigger from 'react-scroll-trigger'
import { motion } from 'framer-motion';
import { textVariant, textVariant5 } from '../utils/motion'
import { phone } from '../assets/images';
const Counter = () => {
   const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true) } onExit={() => setCounterOn(false)}>
    <div className='overflow-hidden transition-all duration-500  group bg-[#ffffff] w-full max-[500px]:px-11 px-28 py-10  relative items-center flex flex-wrap justify-center max-[1460px]:text-center'>
      <div className='max-[1460px]:justify-center  '>
   <div className=' max-[1460px]:justify-center max-[1460px]:flex'>
      <Link to='/signup' className='z-[30]'><motion.button variants={textVariant(2.0)} className=' transition-all duration-200 mt-10 text-black  bg-white font-cascadiaCode px-2 py-2 rounded-full text-[18px] max-[500px]:text-[15px]  max-[500px]:px-1 max-[500px]:py-1 flex items-center shadow-2xl border-[1px] hover:shadow-none hover:bg-slate-200  border-black mb-4'>Get started</motion.button></Link> 
   </div>
   
   
        <h1 className='text-black font-cascadiaCode text-[40px] max-[756px]:text-[20px]'> Join over&nbsp;
         {counterOn && <CountUp start={0} end={1000} duration={2} delay={0}/>}+ users <br /> and create notes together
        </h1>
      </div> 

       <div>
       <motion.div
    variants={textVariant5}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
  >
        <img src={phone} alt="" className=''/></motion.div>
       </div>
      
    </div>
    </ScrollTrigger>
  )
}

export default Counter
