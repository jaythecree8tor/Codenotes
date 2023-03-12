import React from 'react'

const Features = ({content, name, icon}) => {
  return (
    <div className="flex justify-between flex-col  pt-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition ease-in-out delay-150 duration-700  text-[#101010] text-center">

      <div className=' justify-center flex'>
         <span className='justify-center items-center  flex bg-black p-1 rounded-full'>
         <span className=' bg-black border-[2px] border-white text-white p-4 rounded-full inline-block'>
                        {icon}
                    </span>
      </span>
      </div>
    <div className="px-11 mt-10">
      <h4 className="font-larsseit font-bold text-[25px] leading-[32px] text-[#101010] text-center">
          {name}
        </h4>
    <p className="max-w-[250px] font-larsseit font-normal text-[15px] leading-[32.4px] text-[#10101086] my-5 text-center">
      {content}
    </p>
    </div>
    
  </div>
  )
}

export default Features
