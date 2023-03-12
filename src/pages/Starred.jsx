import React from 'react'
import { Banner} from '../components';
import { UserAuth } from '../context/AuthContext'
import { star,pen } from '../assets/images';
import { Link } from 'react-router-dom';


const Starred = () => {
    const {user} = UserAuth()
  
  return (
    <div>
 <div className='containerr'>
      <Banner/>
      <div className='translate-y-[-80px] items-center ml-5'>
          {/* <div className='bg-[#77e1d8] w-[120px] h-[120px] profile-picture   items-center text-center'>
                <h1 className='text-white text-[40px] ml-10'><FaRegUser/></h1>
          </div> */}<img src={user.photoURL ? user.photoURL : "https://www.getillustrations.com/photos/pack/video/55895-3D-AVATAR-ANIMATION.gif"} alt="" className=' rounded-full h-[100px] w-[100px]' />
          <h1 className='pt-4 font-cascadiaCode text-[15px] font-[100]  max-[500px]:12px text-black ml-1'>Welcome</h1>
          
          
          <h1 className=' font-cascadiaCode text-[15px] font-[100]  max-[500px]:12px text-black ml-1'>To your Favorite notes</h1><h1 className=' font-cascadiaCode  text-[33px] max-[700px]:text-[20px] max-[500px]:text-[19px]  text-black'>{user.displayName ? user.displayName : user.email}</h1>
      </div>
      <div className=' flex justify-between max-[500px]:justify-center  items-center w-full'>
      <div className='flex flex-wrap items-center'>
           <Link to='/dashboard'><button className='bg-[#2a2a2a] hover:bg-[#3e3e3e] transition-all duration-500 px-3 py-2 rounded text-white font-cascadiaCode capitalize mr-6 flex items-center relative '>your notes &nbsp; <img src={pen} alt="pen" /> </button> </Link> 
          <Link to='/starred'><button className='bg-[#2a2a2a] hover:bg-[#3e3e3e] transition-all duration-500  px-3 py-2 rounded text-white font-cascadiaCode capitalize flex items-center'>Starred &nbsp; <img src={star} alt="" /> </button></Link>  
          </div>
      </div>
      <hr className=' w-[100%] mt-3 mb-3 border-t-[2px] opacity-25 border-[#000000]'/>
      
      <div className=' h-[200px] flex text-center justify-center items-center'>
        <h1 className=' text-[50px] font-cascadiaCode  stroke-black '>C0ming s00n</h1>
      </div>
      
    </div>

    </div>
   
  )
}

export default Starred
