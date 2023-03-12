import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { google,github,twitter } from '../assets/images'
const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {logIn,} = UserAuth()
  const navigate = useNavigate()

  
  const handleSumbit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn( email, password,)
      navigate('/dashboard')
    } catch (error) {
      console.log(error) 
      setError(error.message)
    }

  }
   
  // const handleGoogleSignIn = async () => {
  //       try {
  //         await googleSignIn();
  //         navigate('/dashboard')
  //       } catch (error) {
  //         console.log(error)
  //       }
  // }


  return (
    <>
         <div className=' '>
         <div className='bg-[#000000] fixed w-full px-20 py-36 max-[600px]:px-5 h-screen'>
              <div className='max-w-[550px] h-[700px] mx-auto border-[1px] border-[#ffffff02] rounded text-white'>
                 <div className='max-w-[400px] mx-auto py-5'>
                      <h1 className='text-3xl font-bold mb-8 px-3'>Sign In</h1>
                      <form onSubmit={handleSumbit}>
                          <h3 className='text-[#acb4ba] mb-2 px-3'>Sign In faster with</h3>
                          <div className='mb-4 flex justify-between flex-wrap'>
                             <div className='w-full strech px-1 '>
                                <button   className='my-[4px] transition-all duration-400 text-center justify-center flex items-center capitalize font-[500] rounded-[8px] w-full py-[9px] px-6 bg-[#272727]  text-white cursor-pointer text-[14px] hover:bg-[#585858]'>
                                        <img src={google} alt="" /> &nbsp; google 
                                </button>
                               
                                </div>
                                <div className=' w-full strech px-1'>
                                <button className='transition-all duration-400  capitalize flex justify-center items-center font-[500] rounded-[8px] w-full py-[9px] px-6 bg-[#272727]  text-white cursor-pointer text-[14px] hover:bg-[#585858] my-[4px]'>
                                <img src={twitter} alt="" /> &nbsp;    twitter
                                </button>
                                 </div>
                                <div className='w-full strech px-1'>
                                <button className='my-[4px] transition-all duration-400 justify-center  capitalize flex items-center font-[500] rounded-[8px] w-full py-[9px] px-6 bg-[#272727]  text-white cursor-pointer text-[14px] hover:bg-[#585858]'>
                                <img src={github} alt="" /> &nbsp;   github
                                </button>
                             </div>
                              
                              
                             
                            </div>
                          <hr className=' w-[100%] mt-3 mb-3 border-t-[1px] opacity-25 text-[#acb4ba]'/>
                          <h3 className='text-[#acb4ba] px-3'>Or signin with your email</h3>

                       {error ? <p className='p-3 bg-[#cf44443a] my-2 rounded-lg border-[1px] border-[#ff949469]'>{error}</p> : null}

                          <div className='my-3 in-cont px-3'>
                            <input onChange={(e) => setEmail(e.target.value)} className='form-control block py-4 px-3 w-full bg-[#121212] border-[1px] border-[#323232]' type='email'  autoComplete='email' required='required'/>
                             <label htmlFor="inputEmail">Email address</label>
                          </div>

                          <div className='my-3 in-cont px-3'>
                            <input onChange={(e) => setPassword(e.target.value)} className='form-control block py-4 px-3 w-full bg-[#121212] border-[1px] border-[#323232]' type='password'  autoComplete='new-password' required='required'/>
                             <label htmlFor="inputEmail">Password</label>
                          </div>

                          <div className='mt-4 grid btn py-4 '>
                            <button type='submit' className='w-full m-[4px] text-[14px] tracking-[1px] transition-all duration-300 align-middle rounded-[50px] px-4 py-[8px] btn-primary text-white'>
                                     Sign In
                            </button>
                          </div>
                      </form>
                      <div className='text-center'>
                        <Link to="/signup" className='text-[14px]'>Don't have an account? <span className='  text-red-100'>Sign up</span></Link>
                      </div>
                 </div>
              </div>
         </div>
      </div>
    </>
  )
}

export default Signin
