import React, { useEffect, useState } from 'react';
import { CheckAuth } from '../requests/fetchAuth';
import "./navBar.css";


const NavBar = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCheckAuth = await CheckAuth();
        if (responseCheckAuth.status === 200) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
        setAuthChecked(true);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setLoggedIn(false);
        setAuthChecked(true);
      }
    };
    fetchData();
  }, []);

  if (!authChecked) {
    return null;
  }

 
  return (
    <header className="header_main">
      <div>
        <a href="/projects" style={{ color: 'transparent' }}>
          <button className="home-button">CB-Platform ✨</button>
        </a>
      </div>
      <div className="main-search">
        <input type="search" className='search-navbar' placeholder="Search..." />
      </div>
      <div className="right-icons">
        <a href="/notifications" style={{ color: 'transparent' }}>
          <button className="mail"><samp>&#9993;</samp></button>
        </a>
        {loggedIn ? (
          <div>
            <a href="/profile">Profile</a>
          </div>
        ) : (
          <div>
            <a href="/sign-up" style={{ color: 'transparent' }}>
              <button className="sign-up-button">Sign Up</button>
            </a>
            <a href="/sign-in" style={{ color: 'transparent' }}>
              <button className="sign-in-button">Sign In</button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};


export default NavBar;