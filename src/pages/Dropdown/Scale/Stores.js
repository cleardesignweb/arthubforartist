import React from 'react'
import '../../../Style/Store.css'
import { Link } from 'react-router-dom'
const Stores = () => {
  return (
    <div className='storeContainer'>
      <h1>Art Supply Stores</h1>

      <div className='section1'>
      <div className='section1Cont' >
       <div>
       {/* <h2>Galleries</h2> */}
        <h1>Supplies to help enhnaced yur talent, so you can focus on your creativity. </h1>
        {/* <h3>Bellow is a list of major art galleries.</h3> */}
       </div>
        <div className='secondImg'>
        <img src='https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'   alt=''/>
      </div>
        </div>

        <div className='gallerySection2'>
    
            
      </div>
      </div>


     <div className='stores'>
     <div className='storesContent'  >
          <Link to={'https://www.dickblick.com/'} target='_blank'>
          <img src='https://3.files.edl.io/f1f2/24/01/26/152134-73b36498-4813-48aa-90d1-805006a1c763.jpg' alt='blicklogo'/>
          </Link>
          {/* <h2>Blick Art Materials</h2>                                            */}
        </div> 

        <div className='storesContent'  >
          <Link to={'https://www.jerrysartarama.com/'} target='_blank'>
          <img src='https://mediacdn.espssl.com/9355/jerrys-artarama-logo-email-addshoppers.gif' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div> 

        <div className='storesContent'  >
          <Link to={'https://www.cheapjoes.com/'} target='_blank'>
          <img src='https://www.cheapjoes.com/media/logo/default/cjas-logo-large-outlines_1.webp' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.utrechtart.com/'} target='_blank'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Utrech_art_stores_logo.png' alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.plazaart.com/'} target='_blank'>
          <img src='https://images.plazaart.com/media/logo/stores/1/PlazaArt_LOGO_Website_212x50.png'   alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.amazon.com/'} target='_blank'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'   alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://www.michaels.com/'} target='_blank'>
          <img src='https://marketstreet-flowood.com/wp-content/uploads/2023/07/michaels.svg'   alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>

        <div className='storesContent'  >
          <Link to={'https://artistcraftsman.com/'} target='_blank'>
          <img src='https://cdn11.bigcommerce.com/s-hk3ilm7bo7/images/stencil/original/aclogo2023_1701724536__46915.original.png'   alt='jerrylogo'/>
          </Link>
          {/* <h2>Jerry's Artarama </h2>                                            */}
        </div>
     </div>
    </div>
  )
}

export default Stores