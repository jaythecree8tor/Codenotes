import React, { useState, useEffect } from 'react'
import {VscAdd}  from 'react-icons/vsc'
import { motion } from 'framer-motion';
import {Modal } from './index';
import { db } from '../firebase';
import {  onSnapshot,  updateDoc, doc} from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';
import { VscTrash } from 'react-icons/vsc';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
// import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { colors } from '../constants';
const Notes = () => {
   const  [openModal, setOpenModal] = useState(false)
  //  const  [openModal2, setOpenModal2] = useState(false)
   const [titles, setTitles] = useState([]);
   const { user } = UserAuth()
   const noteDesk = doc(db, 'users', `${user?.email}`)

  //delete notes
  const deleteNote = async (passedid) => {
    try {
      const result = titles.filter((item) => item.note !== passedid);
      await updateDoc(noteDesk, {
        Notdesc: result
      })
    } catch (error) {
      console.log(error.messgae)
    }
  }
  //read notes from firbase
    useEffect(() => {
       onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        setTitles(doc.data().Notdesc)
       })
       
    },[setTitles, user.email])

const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
}
  return (
       <div className='flex-wrap flex justify-center mb-16'>
             
             
             <div className=' add-notes justify-center items-center  flex relative'>
              {titles.length < 1 ? null :   <span className=' text-white bg-black px-2 py-1 rounded-full absolute -top-4 -right-3 justify-center flex items-center drop-shadow-4xl text-[12px]'>{`You have ${titles.length} notes`} </span>}
           
                <motion.span onClick={() => setOpenModal(true)}   whileTap={{scale: 1.3}} className='justify-center items-center  flex bg-black p-2 rounded-full' >
                    <div className=' bg-black border-[2px] border-white text-white p-1 rounded-full'>
                        <VscAdd size={20} className='  hover:rotate-180  transition-all duration-300'/>
                    </div>
             </motion.span> 
             <Modal open={openModal} onClose={() => setOpenModal(false) }/>
             
        </div>
         
            {titles.map((title, index) => 
            (
                <motion.div  key={index} title={title} style={{"backgroundColor": colors[index%17].noteColor}}  className=' transition-all duration-200 relative add-notes1 overflow-hidden shadow-2xl '>
                <div className=''>
                  <div className='flex justify-between items-center w-full'>
                    <h1 className=' text-white 
                   text-[12px] bg-black font-cascadiaCode capitalize inline-block ml-[10px] py-2 px-2 rounded-[11px]'>{title.text}</h1>
                  </div>
                  
                   <p  className='mt-1 cardnote w-fu'>{truncateString(title.note, 300)}</p>
                   {/* <NoteModal openn={openModal2} header={title.text} /> */}
                </div>
                 <div className=' flex justify-between items-center w-full absolute  inset-x-0 bottom-0 p-4'>
                    <motion.button   whileTap={{scale: 1.3}}><BsFillArrowUpRightCircleFill size={25} className=' text-white drop-shadow-3xl'/>
                    </motion.button>
                  
                      <div>

                      <motion.button whileTap={{scale: 1.3}} onClick={() => deleteNote(title.note)}  className=''><VscTrash color='white' size={25}/></motion.button>

                    </div>
                  </div>
            </motion.div>
            ))}
    </div> 
    
  )
}

export default Notes
