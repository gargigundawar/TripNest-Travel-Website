import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactUS = () => {
  

  const [to_name, setTo_Name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");

  const submitInfo = () => {
    console.log(to_name + from_name + message);


    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      message: message,
    };

    emailjs
      .send(
        'service_8142gpc', 'template_8wqg2a8', emailContent, 'FuwCcnj_HXhN_yU8n' // Replace with your actual user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const Wrapper = styled.section`
  /* CSS styles for the wrapper section */
  padding: 20px;
  background-color: #f5f5f5;
  background-color: var(--body_background);
  color: var(--body_color);
`;

const H1 = styled.h1`
  /* CSS styles for the h1 element */
  text-align: center;
  margin-bottom: 20px;
  background-color: var(--body_background);
  color: var(--body_color);
  
   /* Add a color for the heading */
`;

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width:'100%',
};

const contactStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
width:'30%',
  textAlign: 'center',
};

const h1Style = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
};
const h6Style = {
  fontSize: '15px',
  marginBottom: '20px',
  color: '#333',
  textAlign:'left',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px',
};


const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};




  return (
    <div>
      <Wrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.
          7552014055714!2d73.8902251750661!3d18.674977982448745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
          1!3m3!1m2!1s0x3bc2c880511d7c35%3A0xc4e495a8c1f663eb!2sMIT%20Academy%20of%20Engineering
          !5e0!3m2!1sen!2sin!4v1688748349066!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
 </Wrapper>

 <div style={containerStyle}>

      <div id="contact" action="" method="post" style={contactStyle}>
      <h1 style={h1Style}>Contact Us </h1>
     <h6 style={h6Style}>Name</h6>
        <input
          placeholder="Your name"
          type="text"
          id="name"
          name="name"
          tabIndex="1"
          onChange={(event) => { setTo_Name(event.target.value) }}
          required autoFocus
          style={inputStyle}
        />
         <h6 style={h6Style}>Email</h6>
        <input
          placeholder="Email ID"
          type="email"
          id="email"
          name="email"
          tabIndex="2"
          onChange={(event) => { setFrom_name(event.target.value) }}
          required autoFocus
          style={inputStyle}
        />
         <h6 style={h6Style}>Message</h6>
        <textarea
          placeholder="Type your message here...."
          id="message"
          name="message"
          tabIndex="3"
          onChange={(event) => { setMessage(event.target.value) }}
          required
          style={inputStyle}
        />
        <button
    className="submit-button"
    type="submit"
    onClick={submitInfo}
    style={buttonStyle} 
    

    // Use buttonStyle as the default style
  >
    Submit
  </button>
      </div>
    </div>
   
    </div>
  );
};

export default ContactUS;