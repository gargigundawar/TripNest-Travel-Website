import React from "react";
import html2pdf from 'html2pdf.js';
import { getFromLocalStorage } from "../Services/localStorageUtil";
const Bill = () => {
  
  // Retrieve data from local storage
  const userEmail = getFromLocalStorage("userEmail");
  const userName1 = getFromLocalStorage("userName1");
  const userName2 = getFromLocalStorage("userName2");
  const userName3 = getFromLocalStorage("userName3");
  const userName4 = getFromLocalStorage("userName4");
  const userName5 = getFromLocalStorage("userName5");
  const userName6 = getFromLocalStorage("userName6");
  const userMobNo = getFromLocalStorage("usermob");
  const userAddress = getFromLocalStorage("useraddress");
  const userAadharNo = getFromLocalStorage("useradhar");
  const room = getFromLocalStorage("userroom");
  const totalprice = getFromLocalStorage("usertotalprice");
  const guests = getFromLocalStorage("userguests");

  // CSS styles
  const styles = `
  .bill-container {
    max-width: 800px; /* Increase the max-width */
    width: 90%; /* Adjust the width as needed */
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #ccc;
    padding: 20px;
    height: 75vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
    align-items: center;
    text-align: center;
  }

  h1 span.trip {
    color: black;
  }

  h1 span.nest {
    color: orange;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .bill-details {
    margin-bottom: 10px;
    justify-content: center; 
    font-size: 17px;
    line-height: 1.6;
    margin: 20px 0;
    flex-direction: column;
  }

  .bill-details p {
    margin: 5px 0;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
  }

  button:hover {
    background-color: #45a049;
  }
  
`;

const downloadPdf = () => {
  const element = document.getElementById('pdf-content');
  const opt = {
    margin:       1,
    filename:     'TripNest.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().from(element).set(opt).save();
};


  return (
    <div>
    
      <div className="bill-container">
        <style>{styles}</style>
        <div id="pdf-content">
        <h1>
          <span className="trip">Trip</span>
          <span className="nest">Nest</span>
        </h1>
        <h2>"Tour and Travel Booking Invoice"</h2>
        <div className="bill-details">
          <p>User Email: {userEmail}</p>
          <p>Name 1: {userName1}</p>
          <p>Name 2: {userName2}</p>
          <p>Name 3: {userName3}</p>
          <p>Name 4: {userName4}</p>
          <p>Name 5: {userName5}</p>
          <p>Name 6: {userName6}</p>
          <p>Mobile Number: {userMobNo}</p>
          <p>Address: {userAddress}</p>
          <p>Aadhar Number: {userAadharNo}</p>
          <p>Room: {room}</p>
          <p>Total Price: {totalprice}</p>
          <p>Number of Guests: {guests}</p>
          
        </div>
       
      </div>
      <button onClick={downloadPdf}>Download </button>
    </div>
    
  </div>
);
};

export default Bill;