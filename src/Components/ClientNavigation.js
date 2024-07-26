import React from 'react'; 
import '../Style/Navigation.css' 
 

const ClientNavigation = () => {
  
 
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
<a href='/' className='navName'>Resources</a>
<ul className='dropdown'>
  <div className='dropdownContainer'>
  <div className='dropdownContent'>
    <h2>Grow</h2>
<li><a href="/gallery">Gallery/Museums</a></li>
<li><a href="/event">Events</a></li>
{/* <li><a href="/shows">Shows</a></li> */}
   </div>
<div className='dropdownContent'>
    <h2>Scale</h2>
<li><a href="/stores">Stores</a></li>
<li><a href="/howto">How to</a></li>
<li><a href="/art-hubuniversity">Art-Hub University</a></li>
    </div>

   <div className='dropdownContent'>
    <h2>Audience</h2>
<li><a href="/artistsprofile">Artist profile</a></li>
{/* <li><a href="/links">Links</a></li> */}
<li><a href="/socialmedia">Social media</a></li>
{/* <li><a href="/audiencesupport">Audience Support</a></li> */}
    </div>

    <div className='dropdownContent'>
    <h2>Earn</h2> 
<li><a href="/merch">Merch</a></li>
<li><a href="/liveevent">Live events</a></li>
<li><a href="/ecmomerce">E commerce</a></li>

    </div>

    <div className='dropdownContent'>
    <h2>Help</h2>
<li><a href="/helpartirstprofile">Artist profile</a></li>
<li><a href="/userdata">Your data</a></li>
<li><a href="/artworkmanagement">Artwork management</a></li>
<li><a href="/helpprivacy">Privacy</a></li>
    </div>
  </div>
 </ul> 
</li> 
 
<li className="logbutton"><a href="/login">Login</a></li>
   </div>  
</ul>

 
</div>
</nav>
</headers>

</div>
  
  </>
     
  );
};

export default ClientNavigation;
