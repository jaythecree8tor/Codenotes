import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { prf1,prf2,prf3,prf4 } from '../assets/images';
const Feedback = () => {
    const feedback = [
        {
          id: "feedback-1",
          comment:
            "The best place to jot down quick thoughts or to save longer notes",
          name: "Banji Adaobi",
          role: "UX / UI designer",
           img: prf1,
        },
        {
          id: "feedback-2",
          comment:
            "This a complete solution for personal and corprate use",
          name: "Esse Samuel",
          role: "Software developer",
          img:prf3,
        },
        {
          id: "feedback-3",
          comment:
            "You will only be charged when selling goods or requesting payment.",
          name: "Titi Maryam",
          role: "Business analyst",
          img:prf2,
        },
        {
            id: "feedback-4",
            comment:
              "I find codenotes very essential to me as a student",
            name: "Diamond Femi-Bella",
            role: "Student",
            img:prf4,
          },
      ];
      
      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? feedback.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
      }
      const nextSlide = () => {
        const isLastSlide = currentIndex === feedback.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
      }
      const first = feedback[currentIndex];
  return (
    <div className=' overflow-hidden transition-all duration-500  group bg-black w-full p-5 h-[400px] relative items-center flex justify-center'>
          <div className='z-[50] text-white justify-center text-center duration-500'>

            <h2 className=' mb-6'>{first.comment}</h2>
             <div className=' justify-center flex'>
              <img src={first.img} alt="profile"  className=' w-[70px] h-[70px] rounded-full'/>
            </div>
            <h3 className=' font-cascadiaCode'>~ {first.name}</h3>
            <p className=' text-[#ffffff7a] text-[12px]'>{first.role}</p>
          </div>



          <motion.div onClick={prevSlide}  className=' z-50 absolute hidden group-hover:flex top-[50%] -translate-x-0 -translate-y-[-50%] left-5 cursor-pointer justify-center '>
         <span className='justify-center items-center  flex bg-black p-1 rounded-full'>
         <span className=' bg-black border-[2px] border-white text-white p-4 rounded-full inline-block'>
                        <BsChevronLeft  size={15} />
                    </span>
      </span>
      </motion.div>
         
           
         <div onClick={nextSlide} className=' z-50 absolute hidden group-hover:flex top-[50%] -translate-x-0 -translate-y-[-50%] right-5 cursor-pointer justify-center '>
         <span className='justify-center items-center  flex bg-black p-1 rounded-full'>
         <span className=' bg-black border-[2px] border-white text-white p-4 rounded-full inline-block'>
         <BsChevronRight  size={15}/>
                    </span>
      </span>
      </div>
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 purple__gradient"/>
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        </div>
  )
}

export default Feedback
