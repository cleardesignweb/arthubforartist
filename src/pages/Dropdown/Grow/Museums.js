import React, { useEffect, useState } from 'react'
import '../../../Style/Gallery.css'
import { IoGlobe, IoLocation } from 'react-icons/io5'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Data/Firebase';
const Museums = () => {

  const [gallertInfo, setGalleryInfo] = useState([]);
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const galleryRef = collection(db, 'galleries');
        const querySnapshot = await getDocs(galleryRef);
        const videoDocuments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGalleryInfo(videoDocuments);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className='galleryContainer'>
      <h1>Explore Galleries</h1>
      <div className='gallerySection1'>
      <div className='section1'>
      <div className='section1Cont' >
       <div>
       {/* <h2>Galleries</h2> */}
        <h1>Galleries are a great way to swowcase your artwork.</h1>
        <h3>Bellow is a list of major art galleries.</h3>
       </div>
        <div className='secondImg'>
        <img src='https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'   alt=''/>
      </div>
        </div>
      </div>

      <div className='gallerySection2'>
        {gallertInfo.map((gall, index)=>(
          <>
          <div className='galleriesGrid' key={index}>
          <img src={gall.imageFile} alt='gallery'/>
          <h2>{gall.title}</h2>
          <p><IoLocation/>  {gall.location}
          </p>
          <a href={gall.website} target='blank' className='oilineicons'>
                      <IoGlobe /> Visit
                    </a>
           
          
        </div>
          </>
        ))}
 
      </div>
      
      </div>
    </div>
  )
}

export default Museums