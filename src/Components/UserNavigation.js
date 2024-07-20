import React, { useEffect, useState } from 'react'; 
import '../Style/Navigation.css'  
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Data/Firebase';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
const UserNavigation = () => {   
const [getUserName, setGetUserName] = useState([]);
  
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

  return (
  <>
  <div className="homeScreen">
<headers>
<nav className='navbar'>
{/* Logo */}
<div className='logoHolder'>
<a href='/'>
<img src={require('../assets/ArthubLogoblackBac.png')} width={'100%'}  height={50} alt='Art-Hub Logo' />  
</a>
<h2>For Artists</h2>
</div>
 
 <div>
{/* navigation menu */}
<ul className='nav-links'>
{/* uising checkbox hack */}
<input type='checkbox' id='checkbox_toggle'/>
<label for='checkbox_toggle' className='hamburger'>&#9776;</label>
{/* navigation menu */}
<div className='menu'>
<li><a href='/' className='navName' id="active1">Home</a></li>
<li className='services'>
<a href='/artisthub' className='navName'>Artist</a> 
</li>

{getUserName.map((userName, index)=>(
<li className='services' key={index}>
<a href='/profile' className='navName'>Hi: {userName.displayName} {userName.lastName}</a> 
</li>

))}

 
 
    </div>  
</ul>

 
</div>
</nav>
</headers>

</div>
  
  </>
     
  );
};

export default UserNavigation;
