import React from 'react'
import BikeImage from '../assets/mt.jpeg'
import '../styles/home.css'

function Home() {
  return (
    <>
      <div className='home-title'>This is Home</div>
      <img src={BikeImage} alt='bike' className='banner' />
    </>

  )
}

export default Home