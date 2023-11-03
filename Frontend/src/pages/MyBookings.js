import React, { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Services/localStorageUtil";
import BookingService from "./../Services/BookingServices";
import TourService from "./../Services/TourServices"; // Make sure to import the correct TourService path
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userBookings, setUserBookings] = useState([]);

  useEffect(() => {
    // Get the user's email from local storage or any other method you use for authentication
    const email = getFromLocalStorage("userEmail") || "";
    setUserEmail(email);

    // Fetch all bookings from the backend
    BookingService.getBookings()
      .then((response) => {
        const bookingsData = response.data;
        setBookings(bookingsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Filter bookings data to find bookings made by the current user
    const filteredBookings = bookings.filter((booking) => booking.email === userEmail);
    setUserBookings(filteredBookings);
  }, [userEmail, bookings]);

  return (
    <Page>
      <h1 className="heading1">My Bookings</h1>
      <div className="star">
        <div>
          {userBookings.length === 0 ? (
            <p>You have not made any bookings yet.</p>
          ) : (
            userBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))
          )}
        </div>
      </div>
    </Page>
  );
};

const BookingItem = ({ booking }) => {
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    // Fetch tour details for each booking using the tourId
    TourService.getById(booking.tourid)
      .then((response) => {
        const tourData = response.data;
        setTourData(tourData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [booking.tourid]);

  if (!tourData) {
    return <div></div>;
  }

  const handleReviewTour = (bookingId) => {
    // Handle the review action, e.g., redirect to the review page
    // Replace this with your actual implementation
    console.log("Review tour with bookingId:", bookingId);
  };

  const handleCancelTour = (bookingId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this tour?");
    if (confirmCancel) {
      BookingService.deleteBookings(bookingId)
        .then(() => {
          // Handle cancellation, e.g., refresh the bookings list
          // You might want to refetch the bookings or update the state
          window.location.reload();
        })
        .catch((error) => {
          console.log("Error cancelling tour:", error);
        });
    }
  };

  const { destination, date, price, days, url } = tourData;

  // Calculate the date two days before the tour date
  const twoDaysBeforeTour = new Date(date);
  twoDaysBeforeTour.setDate(twoDaysBeforeTour.getDate() - 2);

  // Calculate the date days after the tour
  const tourEndDate = new Date(date);
  tourEndDate.setDate(tourEndDate.getDate() + days);

  // Get the current date
  const currentDate = new Date();

  return (
    <Bookings>
      <div className="division">
        <Link to={`/booknow/${booking.tourid}`}>
          <img src={url} className="image" alt={destination}></img>
        </Link>
        <h2 className="heading">{destination}</h2>
        <p className="date">Date: {date}</p>
        <p className="price">Price: {price}</p>
        <p className="days">Days: {days}</p>
        <Link to={`/booking/${booking.id}`}>
          <button className="btn">View Details</button>
        </Link>
        {currentDate >= tourEndDate ? (
          <Link to={`/Review/${destination}`}>
          <button className="btn" onClick={() => handleReviewTour(booking.id)}>Review</button>
        </Link>
        ) : (
          <button
            onClick={() => handleCancelTour(booking.id)}
            className="cancel"
            disabled={twoDaysBeforeTour <= currentDate}
          >
            Cancel tour
          </button>
        )}
        {twoDaysBeforeTour <= currentDate && (
          <p className="cancel-message">You can only cancel tours before two days </p>
        )}
      </div>
    </Bookings>
  );
};

// Rest of your styled components and styles...




const Bookings = styled.div`
  // Your styling for the individual booking item
 // border: 1px solid #ddd;
  padding: 5px;
  margin: 50px 30px;
 // border:1px solid black;
 // width:60%;
 width:auto;
  display:flex;
  justify-self:center;
  justify-content:center;
  border-radius:40px;
  background:linear-gradient(to right, hsl(187,85%,43%) , hsl(199,100%,33%));
  
  .division{
    display: flex;
  flex-direction: row;
  margin:5px 15px;
  width:1100px;
  padding:5px;
 // border:1px solid black;
  border-radius:30px;
  background:#ffff;
  display:flex;
  background-color: var(--body_background);
  color: var(--body_color);
 
  }

.image{
height:100px;
width:100px;
//margin:5px;
border-radius:30px;
}
  h2 {
    font-size: 24px;
    margin-bottom: 0px;
    width:20%;
    margin-left:30px;
    margin-top:30px;
  }

  p {
     margin: 0px 30px;
    //  width:350px;
      margin-top:38px;
     positon:absolute;
    
       

  }
  .btn{
    padding: 0;
    height: 35px;
    width: 120px; /* Adjust the width as needed */
    border: none;
    border-radius: 10px;
    margin-top: 30px;
    background: linear-gradient(to right, hsl(187, 85%, 43%), hsl(199, 100%, 33%));
    color: #ffff;
    //font-size: 12px;
    text-align: center; /* Center the text within the button */
//font-family:poppins;
margin-right:20px;
    
    
  }

 
  .cancel{
    padding:0px 0px;
    height:35px;
    width:90px;
    border:none;
    border-radius:10px;
    margin-top:30px;
    margin-left:980px;
   position:absolute;
    background:linear-gradient(to right, hsl(187,85%,43%) , hsl(199,100%,33%));
  color:#ffff;
  
  }
  /* ... Previous styled components ... */

.cancel {
  /* ... Your existing styles ... */
  
  /* Add styles for the disabled state */
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  /* Add styles for hover message */
  &:hover:disabled + .cancel-message {
    display: block;
  }
}

.cancel-message {
  position:absolute;
  margin-left:400px;
  display: none;
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

/* ... Rest of your styles ... */


`;


const Page = styled.div`
display:flex;
  justify-content:center;
 margin-top:110px;
 //border:1px solid black;

 .heading1{
    display:flex;
    // margin-top:130px;
    position:absolute;

 }
 .star{
  //  border:1px solid black;
    margin-top:80px;
    padding:0px 50px;

    border-radius:30px;
 }
 
`;
export default MyBookings;