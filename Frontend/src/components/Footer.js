import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const footerStyle = {
    backgroundColor: 'var(--title-color)',
    color: '#fff',
    textAlign: 'center',
    padding: '3rem 0',
    marginTop: '220px',
    height:'250px',
  };

  const titleStyle = {
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--h4-font-size)',
    textAlign:'left',
  };
  const Style = {
    fontFamily: 'var(--secondary-font)',
  
    textAlign:'left',
    color:'orange',
  };

  const lightText = {
    fontWeight:'300',
    textAlign:'left', // You can use any light color you prefer
  };
   
  const TextStyle = {
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--h4-font-size)',
    textAlign: 'center',
    marginTop: '-8.5rem',
   
};



  const socialStyle = {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'left',
    columnGap: '1rem',

    
  };

  
  const insta = {
   color:'#ffff'

    
  };

  // const socialLinkStyle = {
  //   width: '25px',
  //   height: '25px',
  //   backgroundColor: '#fff',
  //   borderRadius: '100%',
  //   display: 'flex',
  //   justifyContent: 'left',
  //   alignItems: 'left',
  //   backgroundColor:'red'

  // };

  const iconStyle = {
    color: 'var(--primary-color)',
    fontSize: '1.5rem',
   
  };
  const linkStyle = {
    textDecoration: 'none', // Remove underline (default Link behavior)
    color: 'white',        // Set the default text color
    fontWeight: '300',     // Set the font weight
    transition: 'color 0.3s', // Add a smooth color transition
   
};

// const linkHoverStyle = {
//     color: 'blue', // Set the text color when hovering
// };

  return (
    <footer style={footerStyle}>
      <div className="container">
        
      <h2 style={Style}>TRIP NEST
        </h2>
      <h6 style={lightText}>Travel Explore, Celebrate Life</h6>
      
       
<br></br>
        <h3 style={titleStyle}>Follow Us</h3>
        <div style={socialStyle}>
          <a href="https://facebook.com" >
           <FaFacebook className="fabfa-instagram" style={insta}></FaFacebook>
          </a>
          <a href="https://twitter.com" >
            <FaTwitter className="fabfa-instagram" style={insta}></FaTwitter>
          </a>
          <a href="https://instagram.com">
            <FaInstagram className="fabfa-instagram"style={insta}></FaInstagram>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around'  }}>
  {/* First Column */}
  <div style={{ marginLeft: 'auto', marginRight: '10px' }}></div>
  <div style={{ margin: '0 150px'   }}>
    <h4 style={TextStyle}>Discover Us</h4>
    <Link
      to="/About"
      style={hovered ? { ...linkStyle } : linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      About
    </Link>
    <br></br>
    <Link
      to="/About"
      style={hovered ? { ...linkStyle } : linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Our Team
    </Link>
<br></br>
    <Link
      to="/FAQ"
      style={hovered ? { ...linkStyle } : linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      FAQ
    </Link>
    <br></br>
     </div>

  {/* Second Column */}
  <div style={{ margin: '0 150px' }}>
    <h4 style={TextStyle}>Support</h4>
    <Link
      to="/Contactus"
      style={hovered ? { ...linkStyle } : linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Contact Us
    </Link>
    <br></br>

    <Link
      to="/Reviewpage"
      style={hovered ? { ...linkStyle } : linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     Guest Reviews
    </Link>
    <br></br>
    <Link
      to="/TravelGuidelines"
      style={hovered ? { ...linkStyle } : linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
   Travel Guidelines
    </Link>
    {/* Add more links for the second column as needed */}
  </div>
 
</div>
<br></br>
<div>
  <h6  style={lightText}>*Caution: Beware of Fake Promotions or Offers
  
  *Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill in your details. All Veena World authorized email communications are delivered from domain @TripNest.com or @TripNest.in or SMS from VNAWLD or 741324.

*TripNest bears no liability or responsibility whatsoever for any communication which is fraudulent or misleading in nature and not received from registered domain.
</h6>
</div> 
</div>

      
    </footer>
  );
};

export default Footer;