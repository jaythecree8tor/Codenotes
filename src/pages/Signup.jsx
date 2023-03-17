import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { google,github,twitter } from '../assets/images'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const {signUp,googleSignIn} = UserAuth()
  const navigate = useNavigate()

  
  const handleSumbit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp( email, password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }

  }


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      
    }
}

  return (
    <>
      <div className=''>
         <div className=' bg-[#000000] fixed w-full px-20 py-36 max-[600px]:px-5 h-screen'>
              <div className=' max-w-[550px] h-[700px] mx-auto border-[1px] border-[#ffffff02] rounded text-white'>
                 <div className=' max-w-[400px] mx-auto py-5'>
                      <h1 className='text-3xl font-bold mb-8 px-3'>Sign Up</h1>
                      <form onSubmit={handleSumbit} className=''>
                          <h3 className='text-[#acb4ba] mb-2 px-3'>Sign up faster with</h3>
                            <div className='mb-4 flex justify-between flex-wrap'>
                             <div className='w-full strech px-1 ' type='submit' onClick={handleGoogleSignIn}>
                                <button className='my-[4px] transition-all duration-400 text-center justify-center flex items-center capitalize font-[500] rounded-[8px] w-full py-[9px] px-6 bg-[#272727]  text-white cursor-pointer text-[14px] hover:bg-[#585858]'>
                                        <img src={google} alt="" /> &nbsp; google 
                                </button>
                               
                                </div>
                                <div className=' w-full strech px-1'>
                                <button className='transition-all duration-400  capitalize flex justify-center items-center font-[500] rounded-[8px] w-full py-[9px] px-6 bg-[#272727]  text-white cursor-pointer text-[14px] hover:bg-[#585858] my-[4px]'>
                                <img src={twitter} alt="" /> &nbsp;    twitter
                                </button>
                                 </div>
                                <div className='w-full strech px-1 '>
                                <button className='my-[4px] transition-all duration-400 justify-center  capitalize flex items-center font-[500] rounded-[8px] w-full py-[9px] px-6 bg-[#272727]  text-white cursor-pointer text-[14px] hover:bg-[#585858]'>
                                <img src={github} alt="" /> &nbsp;   github
                                </button>
                             </div>
                              
                              
                             
                            </div>
                          <hr className=' w-[100%] mt-3 mb-3 border-t-[1px] opacity-25 text-[#acb4ba]'/>
                          <h3 className='text-[#acb4ba] px-3'>Or register with your email</h3>

                          {error ? <p className='p-3 bg-[#cf44443a] my-2 rounded-lg border-[1px] border-[#ff949469]'>{error}</p> : null}
                          


                          
                          <div className='my-3 in-cont px-3 z-[100]'>
                            <input onChange={(e) => setEmail(e.target.value)} className='form-control block py-4 px-3 w-full bg-[#121212] border-[1px] border-[#323232]' type='email'  autoComplete='email' required='required'/>
                             <label htmlFor="inputEmail">Email address</label>
                          </div>

                          <div className='my-3 in-cont px-3 z-[100]'>
                            <input onChange={(e) => setPassword(e.target.value)} className='form-control block py-4 px-3 w-full bg-[#121212] border-[1px] border-[#323232]' type='password'  autoComplete='new-password' required='required'/>
                             <label htmlFor="inputEmail">Password</label>
                          </div>

                          <div className='mt-4 grid btn py-4 z-[100]'>
                            <button type='submit' className=' z-[100] w-full m-[4px] text-[14px] tracking-[1px] transition-all duration-300 align-middle rounded-[50px] px-4 py-[8px] btn-primary text-white'>
                                     Sign Up
                            </button>
                          </div>
                      </form>
                      <div className='text-center z-[100]'>
                        <Link to="/signin" className='text-[14px] z-[200] '>Already have an account? <span className=' text-red-100'>Sign in</span></Link>
                      </div>
                 </div>
              </div>

              {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 purple__gradient"/>
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-60 bottom-20 blue__gradient" /> */}
         </div>
      </div>
    </>
  )
}

export default Signup
