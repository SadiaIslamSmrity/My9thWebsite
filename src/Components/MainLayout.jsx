import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/firebase.config";
import ScrollToTop from './ScrollToTop';

const MainLayout = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div >
        <Navbar user={user}/>
        <ScrollToTop/>
        <Outlet  context={{ user, setUser }}/>
        <Footer/>
    </div>
    
  )
}

export default MainLayout