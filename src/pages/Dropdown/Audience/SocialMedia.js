import React from 'react'
import '../../../Style/SocialMedia.css'
import { Link } from 'react-router-dom'
const SocialMedia = () => {
  return (
    <div className='socialmediaContainer'>
      <h1>Connect with the world.</h1>

      <div className="section1">
        <div className="section1Cont">
          <div>
            {/* <h2>Focus on what you love.</h2> */}
            <h1>Social media is a great way to connect with people all around the world.</h1>
          </div>
          <div className="secondImg">
            <img
              src="https://images.unsplash.com/photo-1563293743-a9761195b52e?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section1">
        <div className="section1Cont" id="learn">
          <div>
            {/* <h2>Room to learn</h2> */}
            {/* <h1>A platform tailored to your need.</h1> */}
            <h1>
               Once you have your profile set up, crate a social media account and let your artwork be known to the world.
            </h1>
            <h3>Bellow is a list of major social media platforms.</h3>
          </div>
          {/* <div className='secondImg'>
<img src='https://wow.fluxrotherham.org.uk/wp-content/uploads/2023/05/Life-Drawing-1024x684.jpg'  alt=''/>
</div> */}
        </div>
      </div>

      
<div className='stores'>
     <div className='storesContent'  >
          <Link to={'https://www.skillshare.com/en/'} target='_blank'>
          <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2019.png' alt='blicklogo'/>
          </Link>
          {/* <h2>Blick Art Materials</h2>                                            */}
        </div> 

        <div className='storesContent'  >
          <Link to={'https://www.facebook.com'} target='_blank'>
          <img src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div> 

        <div className='storesContent'  >
          <Link to={'https://www.x.com'} target='_blank'>
          <img src='https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.tiktok.com'} target='_blank'>
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/640px-TikTok_logo.svg.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.pintrest.com/'} target='_blank'>
          <img src='https://1000logos.net/wp-content/uploads/2018/03/Pinterest-logo.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        {/* <div className='storesContent'  >
          <Link to={'https://www.deviantart.com/'} target='_blank'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/DeviantArt_Logo.svg/1024px-DeviantArt_Logo.svg.png' alt='jerrylogo'/>
          </Link>
                                                   
        </div> */}
 
 
     </div>
    </div>
  )
}

export default SocialMedia