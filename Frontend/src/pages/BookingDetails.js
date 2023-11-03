import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingServices from "../Services/BookingServices";
import { Link } from "react-router-dom";
import html2pdf from 'html2pdf.js';


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
    margin-top: 60px;
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
    background:linear-gradient(to right, hsl(187,85%,43%) , hsl(199,100%,33%));
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    margin-top:15px;
  }


  button:hover {
    background: linear-gradient(to right, hsl(187, 45%, 63%), hsl(199, 90%, 53%));
  }

  

  .para{
    margin-top:0px;
  }
  
`;
const BookingDetail = () => {
  const { bookingId } = useParams();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    fetchBookingData();
  }, [bookingId]);

  const fetchBookingData = async () => {
    try {
      const response = await BookingServices.getById(bookingId); // Replace with the appropriate method to fetch booking by ID
      const data = response.data;
      setBookingData(data);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  if (!bookingData) {
    return <div>Loading...</div>;
  }

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
    // <div class="bill">
    //   <h2>Booking Details (ID: {bookingId})</h2>
    //   <p>Name 1: {bookingData.name1}</p>
    //   <p>Name 2: {bookingData.name2}</p>
    //   {/* Add similar lines for other fields */}
    //   <p>Email: {bookingData.email}</p>
    //   <p>Mobile No: {bookingData.mobno}</p>
    //   <p>Address: {bookingData.address}</p>
    //   <p>Adhar No: {bookingData.adharno}</p>
    //   <p>Room: {bookingData.room}</p>
    //   <p>Total Price: {bookingData.totalprice}</p>
    //   <p>Tour ID: {bookingData.tourid}</p>
    //   <p>Guests: {bookingData.guests}</p>
    //   {/* Add more fields as needed */}
    // </div>

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
        {/* <h2>Booking Details (ID: {bookingId})</h2> */}
          <p>User Email: {bookingData.email}</p>
          {bookingData.name1 && <p>Name 1: {bookingData.name1}</p>}
          {bookingData.name2 && <p>Name 2: {bookingData.name2}</p>}
          {bookingData.name3 && <p>Name 3: {bookingData.name3}</p>}
          {bookingData.name4 && <p>Name 4: {bookingData.name4}</p>}
          {bookingData.name5 && <p>Name 5: {bookingData.name5}</p>}
          {bookingData.name6 && <p>Name 6: {bookingData.name6}</p>}
          <p>Mobile No: {bookingData.mobno}</p>
          <p>Address: {bookingData.address}</p>
          <p>Adhar No: {bookingData.adharno}</p>
          <p>Room: {bookingData.room}</p>
          <p>Total Price: {bookingData.totalprice}</p>
          <p>Total Price: {bookingData.totalprice}</p>
          <p>Guests: {bookingData.guests}</p>
          
        </div>
       
      </div>
      <button onClick={downloadPdf}>Download </button>
      {/* <p class="para">You can only cancel this tour before 2 days of departure</p> */}
     
    </div>
    
  </div>
  );
};

export default BookingDetail;