import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeClient from './pages/HomeClient';
import ClientNavigation from './Components/ClientNavigation';
import Login from './auth/Login';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Registration from './auth/Signup';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './Data/Firebase';
import { AuthContextProvider } from './auth/AuthContext';
import UserNavigation from './Components/UserNavigation';
import AddArtwork from './pages/AddArtwork';
import PostArtwork from './pages/PostArtwork';

function App() {
  const {user} = getAuth()
  const [users, setUser] = useState({});
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
     <BrowserRouter>
     <AuthContextProvider>
      {!loading && users? (<> <UserNavigation/>
         
      </>) : <ClientNavigation/>}
     <Routes>
      <Route path='/' element={<HomeClient/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/addArtwork/:id' element={<AddArtwork/>}/>
      <Route path='/postartwork' element={<PostArtwork/>}/>


     </Routes>

     </AuthContextProvider>
      
     </BrowserRouter>
  );
}

export default App;
