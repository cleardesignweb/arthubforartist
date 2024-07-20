import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db, storage } from '../Data/Firebase';
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import '../Style/Profile.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoAdd, IoLogOut } from 'react-icons/io5';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from 'react-toastify';
import Notiflix from "notiflix";
import { FaEdit, FaTrash } from 'react-icons/fa';

const Profile = () => {

  const [getUserName, setGetUserName] = useState([]);
  const [getArtistsInfo, setGetArtistsInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if (user){
        const uid =  user.uid;
         const fetchEditedProfile = async () => {
          const timestamp = ('timestamp', 'desc')
            const citiesRef = collection(db, 'artistHubUsers');
          const querySnapshot = query(citiesRef, 
            where("userID", "==", uid));             
          orderBy(timestamp);
          const snapshot = await getDocs(querySnapshot);
          // console.log(snapshot)
          const documents = snapshot.docs.map((doc) => ({
           id: doc.id,
              ...doc.data(),
             }));
             setGetUserName(documents);
         };    
        fetchEditedProfile();
      }
    })    
  },[]) 

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if (user){
        const uid =  user.uid;
         const fetchArtistsData = async () => {
          const timestamp = ('timestamp', 'desc')
            const artworksRef = collection(db, 'posts');
          const querySnapshot = query(artworksRef, 
            where("userID", "==", uid));             
          orderBy(timestamp);
          const snapshot = await getDocs(querySnapshot);
          // console.log(snapshot)
          const documents = snapshot.docs.map((doc) => ({
           id: doc.id,
              ...doc.data(),
             }));
             setGetArtistsInfo(documents);
         };    
        fetchArtistsData();
      }
    })    
  },[]) 

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
         navigate("/");
      })
      .catch((error) => {
       });
  };

  
const confirmDelete = (id, image) => {
  Notiflix.Confirm.show(
    "Delete Product!!!",
    "You are about to delete this product",
    "Delete",
    "Cancel",
    function okCb() {
      deleteProduct(id, image);
    },
    function cancelCb() {
      console.log("Delete Canceled");
    },
    {
      width: "320px",
      borderRadius: "3px",
      titleColor: "#494949",
      okButtonBackground: "#494949",
      cssAnimationStyle: "zoom",
    }
  );
};

const deleteProduct = async (id, image) => {
  try {
    await deleteDoc(doc(db, "posts", id));

    const storageRef = ref(storage, image);
    await deleteObject(storageRef);
    toast.success("Product deleted successfully.");
  } catch (error) {
    toast.error(error.message);
  }
};

  return (
    <div className='mainArtistProfile'>
       
      <div className='artistProfile'>
      
         {getUserName.map((userInfo, index)=>(
          <>
          <div key={index}>
          <h1>{userInfo.displayName} {userInfo.lastName}</h1>            
          </div>
          </>
        ))}     
      <div className='logOut' onClick={logoutUser}>
        <h2><IoLogOut/> Log out</h2>
         </div>                 
      </div>

      <div className='profSection1'>
        <h1>Your Artworks</h1>
        <a href='/postartwork'> 
        <h2><IoAdd/> Add artwork</h2>
        </a> 
        </div>

      <div className='artworksContainer' id='profileArtWorkContainer'>
      {
  getArtistsInfo.map((artwork, index)=>{
    const {id, image, medium, price, name, artSize, displayName, lastName}= artwork;
    return (
      <div className='artwork' 
      // key={id}
      key={index}
      >
        {/* <p>{index + 1}</p> */}
      <div className='artcollectionbox'>   
      <div>    
     {/* <Link to={`/product-details/${id}`}> */}
     <img src={image} alt=""/>  
     {/* </Link>  */}
      </div>
      <div className='artworksContainer'>
      <div>    
      {/* <h1>{displayName} {lastName}</h1> */}
        
      <h1>{name}</h1>
      <h2>{medium}</h2>
      <h2>{artSize}</h2>
      <h2>${price}</h2>
      </div>
      {/* <Link to={`/addArtwork/${id}`}>
      <FaEdit className='editIcon'/>
      </Link> */}
      <FaTrash className='editIcon' 
       onClick={() => confirmDelete(id, image)}
      />      
       </div>
       </div>
        </div>
    )
  })
} 
        </div>

    </div>
  )
}

export default Profile