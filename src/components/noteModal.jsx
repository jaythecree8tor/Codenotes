import React from 'react'

const noteModal = ({openn,header, decription}) => {
    if (!openn) return null;
  return (
    <div className='overlay z-[100]'>
      <div className='modalConatainer px-5 py-5 rounded-[20px] z-50 resize'>
          <h1 className=' text-[100px]'>{header}</h1>
      </div>
    </div>
  )
}

export default noteModal
