import React, { useState } from 'react'
import Carrousel from './carrousel'

const Hero = () => {
  return (
   <section>
    <div className='container' id='inicio'>
    <Carrousel 
    slidesPerView={1}
    bulletsDirection='horizontal-banner'
    className='hero'
    >
      <>
        <h2>AndroDev</h2>
          <h1 className='bolder mt-3 mb-3'>COPY TITLE SLIDE #1</h1>
          <h3>Copy de soporte Slide #1</h3>
          <p className='mt-3 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis</p>
          <button className='btn mt-5'>Call to action</button>
      </>
       <>
        <h2>AndroDev</h2>
          <h1 className='bolder mt-3 mb-3'>COPY TITLE SLIDE #1</h1>
          <h3>Copy de soporte Slide #1</h3>
          <p className='mt-3 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis</p>
          <button className='btn mt-5'>Call to action</button>
      </>
    </Carrousel>
       
    </div>
   </section>
  )
}

export default Hero