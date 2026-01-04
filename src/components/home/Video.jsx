import React from 'react'
import hero from '../../assets/hero.mp4';

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay loop muted className="h-full w-full object-cover" src={hero}>
          <source src={hero} type="video/mp4" />
        </video>
    </div>
  )
}

export default Video