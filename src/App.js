import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeClient from './pages/HomeClient';
import ClientNavigation from './Components/ClientNavigation';
import Login from './auth/Login';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Registration from './auth/Signup';

function App() {
  return (
     <BrowserRouter>
     <ClientNavigation/>
     <Routes>
      <Route path='/' element={<HomeClient/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signup' element={<Registration/>}/>

     </Routes>
     </BrowserRouter>
  );
}

export default App;
