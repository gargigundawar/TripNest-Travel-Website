import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
const styles = `
  .cont {
    max-width: 500px;
  
    margin: 150px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
   
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    margin-left: 5px; /* Add margin to the left of the "Submit" button */
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }

  button[type="button"] {
    background-color: #ccc;
    color: #000;
    border: none;
    margin-right: 5px; /* Add margin to the right of the "Cancel" button */
  }

  button[type="button"]:hover {
    background-color: #999;
  }
`;

function PostForm() {
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

    emailjs.send('service_8142gpc', 'template_8wqg2a8', emailContent, 'FuwCcnj_HXhN_yU8n')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const cancelForm = () => {
    // Add functionality to cancel the form or reset fields if needed
    setTo_Name("");
    setFrom_name("");
    setMessage("");
  }

  return (
    <div className="cont">
      <style>{styles}</style>
      <div id="contact" action="" method="post">
        <h1>Post Query</h1>
        <input
          placeholder="Your name"
          type="text"
          id="name"
          name="name"
          tabIndex="1"
          onChange={(event) => { setTo_Name(event.target.value) }}
          required autoFocus
        />
        <input
          placeholder="Email ID"
          type="email"
          id="email"
          name="email"
          tabIndex="2"
          onChange={(event) => { setFrom_name(event.target.value) }}
          required autoFocus
        />
        <textarea
          placeholder="Enter query"
          id="message"
          name="message"
          tabIndex="3"
          onChange={(event) => { setMessage(event.target.value) }}
          required
        />
         <Link to={`/FAQ`}><button type="button" onClick={cancelForm}>Cancel</button></Link>
        <button type="submit" onClick={submitInfo}>Submit</button> 
       
      </div>
    </div>
  );
}

export default PostForm;