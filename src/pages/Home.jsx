import React from 'react'
import { motion } from 'framer-motion';
import { Hero, Features,Feedback, Count, Footer} from '../components'
import {sectionVariant} from '../utils/motion';
import { features,} from '../constants'

const Home = () => {
  return (
    <div className=''>
      <Hero/>


      <section className=' bg-white py-14'>
      <motion.div
    variants={sectionVariant} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.10 }}>
      <div className="flex flex-wrap  justify-center  w-full feedback-container relative z-[1]">
      {features.map((card) => <Features key={card.id} {...card} />)}
    </div></motion.div>
      </section>

  <Feedback/>


<Count/>
<Footer/>
    </div>
  )
}

export default Home
