import React from 'react'
import '../Style/Section1.css'
const Section1 = () => {
  return (
    <div className='mainSection'>

        <div className='section1'>
      <div className='section1Cont' >
        
       <div>
       <h2>Focus on what you love.</h2>
        <h1>Grow your career while keeping your artworks at the center. With Art-Hub for Artists, you can focus on drawing, while we handle everything else.</h1>         
       </div>
        {/* <div className='secondImg'>
        <img src={require('../assets/4.jpg')}   alt=''/>
      </div> */}
        </div>
      </div>

        <div className='section1'>
      <div className='section1Cont' >
       <div>
       <h2>Features</h2>
        <h1>A platform tailored to your need.</h1>
        <h3>Post here and view it on  <a href='https://art-hub.us/' target="_blank" rel="noreferrer">Art-Hub</a> </h3>
       </div>
        <div className='secondImg'>
        <img src={require('../assets/4.jpg')}   alt=''/>
      </div>
        </div>
      </div>

       
    </div>
  )
}

export default Section1