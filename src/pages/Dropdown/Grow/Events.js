import React from 'react'
import '../../../Style/Events.css'
const Events = () => {
  return (
    <div className='eventContainer'>
      <h1>Fairs + Events</h1>

      <div className='section1'>
      <div className='section1Cont'  >
       <div>
       {/* <h2>Galleries</h2> */}
        <h1>With events and faris, you can showcase you artwork with a live audience.</h1>
        {/* <h3>Bellow is a list of major art galleries.</h3> */}
       </div>
        <div className='secondImg'>
        <img src='https://images.unsplash.com/photo-1623751883838-95f548d61c47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'   alt=''/>
    </div>

        </div>
      </div>

    <div className='events'>

      <div className='eventContent'>
        <img src='https://camh.org/wp-content/uploads/2023/09/CAMH_Logo_Black.svg' alt='logo'/>
       <div style={{marginLeft: 10}}>
       <h1>Contemporary Arts Museum Houston</h1>
       <h2>November, 27-30 2024</h2>
       </div>
      </div>

      <div className='sndImg'>
      <img src='https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4000,w_6000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1275326965_rt26eu.jpg' alt='' />
      </div>
      
    </div>

    <div className='events'>

      <div className='eventContent'>
        <img src='https://d7hftxdivxxvm.cloudfront.net/?height=200&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FflsUonHp8KeklyVa5z-_iw%2Flarge.jpg&width=200' alt='logo'/>
       <div style={{marginLeft: 10}}>
       <h1>Seattle Art Fair 2024
       </h1>
       <h2>July 18 – August 18, 2024
       </h2>
       </div>
      </div>

      <div className='sndImg'>
      <img src='https://d7hftxdivxxvm.cloudfront.net/?height=600&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F3h2IQm0QE3sTXEuKYStRnQ%2Fwide.jpg&width=2000' alt='' />
      </div>
      
    </div>

    </div>
  )
}

export default Events