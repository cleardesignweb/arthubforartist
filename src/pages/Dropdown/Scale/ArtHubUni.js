import React from 'react'
import '../../../Style/ArtHubUni.css'
import { Link } from 'react-router-dom'
const ArtHubUni = () => {
  return (
    <div className='arthubuniContainer'>
      <h1>Enhanced your creativity.</h1>
  

<div className='section1'>
<div className='section1Cont' >

<div>
{/* <h2>Focus on what you love.</h2> */}
<h1>Improve your skills by learning from artits, at the top of their game.</h1>         
</div>
<div className='secondImg'>
<img src='https://wow.fluxrotherham.org.uk/wp-content/uploads/2023/05/Life-Drawing-1024x684.jpg'  alt=''/>
</div>
</div>
</div>

<div className='section1'>
<div className='section1Cont' id='learn'>
<div>
{/* <h2>Room to learn</h2> */}
{/* <h1>A platform tailored to your need.</h1> */}
<h2>No mater where you're in your creativity, there will always be room to learn. With Art-Hub University, you will have the apportunity to enhalced your skills, and creativity. </h2>
</div>
{/* <div className='secondImg'>
<img src='https://wow.fluxrotherham.org.uk/wp-content/uploads/2023/05/Life-Drawing-1024x684.jpg'  alt=''/>
</div> */}
</div>
</div>

<div className='stores'>
     <div className='storesContent'  >
          <Link to={'https://www.skillshare.com/en/'} target='_blank'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Skillshare_logo_2020.svg/1280px-Skillshare_logo_2020.svg.png' alt='blicklogo'/>
          </Link>
          {/* <h2>Blick Art Materials</h2>                                            */}
        </div> 

        <div className='storesContent'  >
          <Link to={'https://www.fullsail.edu/'} target='_blank'>
          <img src='https://cdn.freelogovectors.net/wp-content/uploads/2022/03/full_sail_university_logo_freelogovectors.net_.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div> 

        <div className='storesContent'  >
          <Link to={'https://www.youtube.com'} target='_blank'>
          <img src={require('../../../assets/youtube.png')} alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.drawspace.com/'} target='_blank'>
          <img src='https://assets.website-files.com/5ded5fff5049675f3a19eb84/5df078c3fc0b1aa02e063454_drawspace-wm.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.udemy.com/'} target='_blank'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/800px-Udemy_logo.svg.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>
 
 
     </div>
</div>
       
 
  )
}

export default ArtHubUni