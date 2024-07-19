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
<a href='/artisthub' className='navName'>Artist</a>
 
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
