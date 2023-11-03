import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope ,faArrowAltCircleLeft, faArrowAltCircleRight,faBook, faTrain, faHelicopter, faStar} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import  { useEffect, useState } from "react";
import { getFromLocalStorage,removeFromLocalStorage } from '../Services/localStorageUtil';
import { FaTripadvisor } from 'react-icons/fa';
import DarkMode from '../pages/DarkMode';

const Header = ({  handleLogout }) => {


  const [profilepop, setProfilepop] = useState(false);
  const [email,setEmail] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  

  const toggleProfilepop = () => {
    setProfilepop((prevState) => !prevState);
    const email = getFromLocalStorage('userEmail') || '';
    setEmail(email);
  };

  useEffect(() => {
    // Read user authentication status, user type, and email from local storage
    const authStatus = getFromLocalStorage('isAuthenticated') || false;
    const userIsUser = getFromLocalStorage('isUser') || false;
    const userIsAdmin = getFromLocalStorage('isAdmin') || false;
    const userEmail = getFromLocalStorage('userEmail') || '';

    setIsAuthenticated(authStatus);
    setIsUser(userIsUser);
    setIsAdmin(userIsAdmin);
    setEmail(userEmail);
  }, []);

  // useEffect(() => {
  //   // Retrieve the email from local storage when the component mounts
  //   const email = getFromLocalStorage('userEmail') || '';
  //   setEmail(email);
  // }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__left">
          <Link to="/home" className="nav__logo">
            Trip<span>Nest  </span>
          </Link>
        </div>

        <div className="nav__toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/tourPackages" className="nav__link">
                Tour Package
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link to="/customized-holiday" className="nav__link">
                Customized Holiday
              </Link>
            </li> */}
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/ContactUs" className="nav__link">
                <FontAwesomeIcon icon={faEnvelope} /> ContactUs
              </Link>
            </li>
            <li className="nav__item">
              {isAuthenticated ? (
                
                // Show "Logout" if authenticated
                <div >
                
                <Link  className="nav__link" onClick={toggleProfilepop}>
                  <FontAwesomeIcon icon={faUser} color='aquamarine' /> Profile
                </Link>
                {/* <Link to="#" className="nav__link" >
                <FontAwesomeIcon icon={faUser} /> Profile
              </Link> */}
              </div>
              ) : (
                // Show "Login" if not authenticated
                <Link to="/Signup" className="nav__link">
                  <FontAwesomeIcon icon={faUser} /> Login
                </Link>
              )}


            </li>
            <DarkMode></DarkMode>
          </ul>

          {isAuthenticated && profilepop &&  (
            // Display the sliding "Profile" menu when authenticated and `profilepop` is `true`
            <div className="nav__profile-menu">
              {isAdmin &&( <Link to="/Adminpage"  className="nav__link" id="Adminpage" onClick={toggleProfilepop}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Admin Page
              </Link>)}
              
              <Link to="/MyBookings" className="nav__link" id="mybookings" onClick={toggleProfilepop}>
            <FontAwesomeIcon icon={faHelicopter} /> My Bookings
          </Link>

          <Link to="/Bucketlist" className="nav__link" id="mybookings" onClick={toggleProfilepop}>
            <FontAwesomeIcon icon={faStar} /> Bucket list
          </Link>

               
              <Link to="/signup" onClick={handleLogout} className="nav__link" id="logout">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Logout
              </Link>
              
              
              <img src='/media/userphoto.jpg' class="userphoto"></img>
              <br></br>
              <p class="email">{email}</p>
              
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;