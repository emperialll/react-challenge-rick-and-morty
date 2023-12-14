import React from 'react'

const Image = ({fullname}) => {
  return (
    <div className='image-container'>
        <img src={`images/${fullname}.jpeg`} className='cardImage' alt='' />
        <button className='icon-button'>
            <img src='/icons/heart-empty.png' alt='heart-empty' />
        </button>
    </div>
  )
}

export default Image