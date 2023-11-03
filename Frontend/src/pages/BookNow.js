import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import TourService from "../Services/TourServices";
import { GrCalendar, GrLocation, GrMoney } from 'react-icons/gr';
import Footer from "../components/Footer";
import BookingForm from "./BookingForm";
import CouponService from "../Services/CouponService";
import { getFromLocalStorage } from "../Services/localStorageUtil";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Payment from "./Razorpay";
import Bucket from "./Bucket";
import AnimatedSlider from "./AnimatedSlider";

import {  faMapMarked, faMapPin} from '@fortawesome/free-solid-svg-icons';



const CardContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;


.card {
   
  // height: 400px;
  // background: linear-gradient(
  //   to bottom,
  //   rgba(14, 179, 216, 0.627),
  //   #ffffff
  // );
  background:none;
  
  
  // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  // border-radius: 10px;
  margin: 20px;
  margin-top:0px;
  position: relative;
  overflow: hidden;
  // transition: transform 0.3s, box-shadow 0.3s;
  margin-left: 70px;
  // border: 1px solid rgba(85, 229, 239, 0.597);
}

// .card:hover {
//   transform: scale(1.1);
//   box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
// }

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  // margin-bottom:250px;
}

.card h3 {
  margin-top: 0px;
  color: black;
  font-size: 40px;
  margin-bottom: 0px;
}

.card p {
  //color: black;
  // font-size: 20px;
  // font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
}

.date-price-days {
  font-size: 20px;
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  box-shadow: 0 0 15px grey;
  width:20%;
  position:absolute;
  margin-left:70%;
  margin-top:40px;
  border-radius:30px;
  background: linear-gradient(to right, rgb(225, 225, 225), rgb(171, 171, 171));
  color:black;


}

.date-price-days p {
  flex: 1;
  margin-left:20%;
}
// .card p + p {
//   margin-top: 10px; /* Add margin top to create space between paragraphs */
// }

.card-actions {
  position: absolute;
  bottom: 20px;
  
  
}

.deletebtn {
  background-color: #ec4e4e;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top:20px;
  margin-right:20px;
  margin-bottom:20px;
  background:linear-gradient(to right, hsl(187,85%,43%) , hsl(199,100%,33%));
}

.card-actions button:hover {
  background-color: #bb2d2f;
  color: #ffffff;
  background: linear-gradient(to right, hsl(187, 45%, 63%), hsl(199, 90%, 53%));
}

.image img{
  
  display:flex;
   margin-top:15%;
   margin-left:40px;
   height :500px;
   width:900px;
   border:solid 1px black;
   border-radius:30px;
   
 
}

.card-content p{
  margin-top:10px;
  word-spacing:20px;
  
}
.card-actions {
  word-spacing: 10px;
  position: relative;
}

.map-pin {
  display: flex;
  
    margin-bottom: 20px;
  margin-top:25px;
}

.icon {
  color: pink;
  padding-left:10px;
  margin-top:6px;
  left:10px;
  position:relative;
  padding-right:3px;
  margin-bottom: 30px; /* Add margin at the bottom to push text down */
  
}

.day{
  padding-left:20px;
  width:800px;
  font-weight:bold;
  
}
.text {
  display: flex;
  flex-direction: column;
}


.toggle-button {
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  // margin-left: 40px;
  margin-right: 40px;
  float: right;
  border-radius: 25px;
  background-color: #ccc;
  padding: 5px 10px;
}



.description {
  border: none;
  border-left: 4px dotted red;
  padding-left: 25px;
  display: none;
  width:50%;
  color: rgb(70, 70, 70);
}

.description.active {
  display: block;
}

#counter1{
  margin-left:5px;
}

.counter{
  padding:3px;
  font-size:20px;
  padding:0px 6px;
  margin-bottom:20px;
  margin-left:5px;
  
}
.coupon input{
  padding:7px;
  border-radius:10px;
  margin-bottom:20px;
  
}

.desc{
  width:900px;
 // color:rgb(213, 209, 202);
  font-size:1.2rem;
  margin-top:70px;
  
  
}

.desc{
  
  color: rgb(70, 70, 70);
  height:150px;
  
}
.headings{
  font-size:2rem;
  font-family:times-newroman;
  font-weight:bold;
  margin-bottom:50px;

  
  
}
.pcoupon{
  color:red;

}






`;
const RadioInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  


  label {
    margin-left: 10px;
    
    margin-right:10px;
    padding:6px;
    border-radius:30px;
    background-color:rgb(213, 209, 202);
  }
`;








const BookNow = ({ isAuthenticated }) => {
  const { itemId } = useParams();
  const [itemData, setItemData] = useState(null);
  const [bookings, setBookings] = useState(0);
  const [count, setCount] = useState(0);
  const [roomPrice, setRoomPrice]= useState(0);
  const single = 2000;
  const double = 3000;
  // const [rcount, setRcount] = useState(0);
  const [addRoomVisible, setAddRoomVisible] = useState(false);
  const [bookingFormpop, setBookingFormpop] = useState(false);
  
  const [lastEntry, setLastEntry] = useState(null);
  const [lastSecEntry, setLastSecEntry] = useState(null);
  const [lastThirdEntry, setLastThirdEntry] = useState(null);

  const [couponInput, setCouponInput] = useState("");
  const [couponMatched, setCouponMatched] = useState(false);
  const [discount,setDiscount]=useState("");
  
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);

  const toggleDescription = (index) => {
    if (openDescriptionIndex === index) {
      setOpenDescriptionIndex(null); // Close if already open
    } else {
      setOpenDescriptionIndex(index); // Open the clicked description
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await CouponService.getItems(); // Use the getItems method from TourService to fetch data
      const data = response.data;
      const lastEntry = data[data.length - 1];
      const lastSecEntry = data[data.length - 2];
      const lastThirdEntry = data[data.length - 3];
      setLastEntry(lastEntry);
      setLastSecEntry(lastSecEntry);
      setLastThirdEntry(lastThirdEntry);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCouponChange = (event) => {
    setCouponInput(event.target.value);
    setCouponMatched(false);
  };
  const handleCouponVerify = () => {
    if (lastEntry && couponInput === lastEntry.coupon) {
      setCouponMatched(true);
      setDiscount(lastEntry.discount);
    } else if (lastSecEntry && couponInput === lastSecEntry.coupon) {
      setCouponMatched(true);
      setDiscount(lastSecEntry.discount);
    } else if (lastThirdEntry && couponInput === lastThirdEntry.coupon) {
      setCouponMatched(true);
      setDiscount(lastThirdEntry.discount);
    } else {
      alert("Coupon does not match.");
    }
  };
  


  const handleRadioButton = (event) => {

    const roomPrice = parseInt(event.target.value ,10);
    setRoomPrice(roomPrice)

  }






  const generateRadioOptions = () => {
    const options = [];

    
      if (count === 1) {
        options.push(
          <RadioInput >
            <input type="radio" name={`room`} id={`single`} value={single} onChange={handleRadioButton} />
            <label htmlFor={`single`}>Single Bed {count}</label>
          </RadioInput>
        );
      } 

      if (count === 2) {
        options.push(
          <RadioInput >
            <input type="radio" name={`room`} id={`single`} value={single * count} onChange={handleRadioButton} />
            <label htmlFor={`single`}>Single Bed {count}</label>

            <input type="radio" name={`room`} id={`Double`} value={double } onChange={handleRadioButton} />
            <label htmlFor={`Double`}>Double Bed {count-1}</label>
          </RadioInput>
        );
      } 
      if (count === 3) {
        options.push(
          <RadioInput >
            <input type="radio" name={`room`} id={`single`} value={single * count} onChange={handleRadioButton} />
            <label htmlFor={`single`}>Single Bed {count}</label>

            <input type="radio" name={`room`} id={`Double`} value={(single*(count-1) + double*(count - 2))} onChange={handleRadioButton} />
            <label htmlFor={`Double`}>Single{count-1} and Double {count-2}</label>
          </RadioInput>
        );

        
      } 

      if (count === 4) {
        options.push(
          <RadioInput >
            <input type="radio" name={`room`} id={`single`} value={single * count} onChange={handleRadioButton} />
            <label htmlFor={`single`}>Single Bed {count}</label>

            <input type="radio" name={`room`} id={`Double`} value={double*(count-2)} onChange={handleRadioButton}/>
            <label htmlFor={`Double`}>Double {count-2}</label>
          </RadioInput>
        );

        
      } 
      if (count === 5) {
        options.push(
          <RadioInput >
            <input type="radio" name={`room`} id={`single`} value={single*count} onChange={handleRadioButton} />
            <label htmlFor={`single`}>Single Bed {count}</label>

            <input type="radio" name={`room`} id={`Double`} value={single*(count-2) + double * (count-4) } onChange={handleRadioButton} />
            <label htmlFor={`Double`}>Single{count-2} and Double {count-4}</label>

            <input type="radio" name={`room`} id={`Double`} value={single*(count-4)+double*(count-3)} onChange={handleRadioButton} />
            <label htmlFor={`Double`}>Single{count-4} and Double {count-3}</label>
          </RadioInput>
        );

        
      } 
    

      if (count === 6) {
        options.push(
          <RadioInput >
            <input type="radio" name={`room`} id={`single`} value={single*count} onChange={handleRadioButton} />
            <label htmlFor={`single`}>Single Bed {count}</label>

            <input type="radio" name={`room`} id={`Double`} value={single*(count-2)+double*(count-5)} onChange={handleRadioButton} />
            <label htmlFor={`Double`}>Single{count-2} and Double {count-5}</label>

            <input type="radio" name={`room`} id={`Double`} value={single*(count-4)+double*(count-4)} onChange={handleRadioButton} />
            <label htmlFor={`Double`}>Single{count-4} and Double {count-4}</label>

            <input type="radio" name={`room`} id={`Double`} value={double*(count-3)} onChange={handleRadioButton} />
            <label htmlFor={`Double`}>Double {count-3}</label>
          </RadioInput>
        );

        
      } 
    
    
    

    return options;
  };


  const toggleAddForm = () => {
    setAddRoomVisible((prevState) => !prevState);
  };
  const toggleBookingFormpop = () => {
    setBookingFormpop((prevState) => !prevState);
  };

  useEffect(() => {
    const countFromStorage = localStorage.getItem("bookingsCount");
    if (countFromStorage) {
      setCount(parseInt(countFromStorage, 10));
    }

    fetchItem(itemId);
    fetchBookingsCount(itemId);
  }, [itemId]);

  useEffect(() => {
    if (itemData) {
      const totalTourPrice = itemData.price * count;
      const roomTotal = roomPrice ;
      const totalBeforeDiscount = totalTourPrice + roomTotal;
      
      if (couponMatched) {
        const discountAmount = totalTourPrice * (discount/100);
        const discountedTotalPrice = totalBeforeDiscount - discountAmount;
        
        setItemData((prevData) => ({
          ...prevData,
          totalPrice: discountedTotalPrice,
        }));
      } else {
        setItemData((prevData) => ({
          ...prevData,
          totalPrice: totalBeforeDiscount,
        }));
      }
    }
  }, [bookings, count, itemData, roomPrice, couponMatched,discount,]);
  




  const fetchItem = (itemId) => {
    TourService.getById(itemId)
      .then((response) => {
        const itemData = response.data;
        setItemData(itemData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchBookingsCount = (itemId) => {
    TourService.getById(itemId)
      .then((response) => {
        const bookingsCount = response.data.bookings || 1;
        setBookings(bookingsCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    if (newCount <= 6) {
      setCount(newCount);
      localStorage.setItem("bookingsCount", newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem("bookingsCount", newCount);
    }
  };

  const handleBookNow = () => {
    const newBookingsCount = bookings + count;

    TourService.updateBookings(itemId, newBookingsCount)
      .then((response) => {
        console.log("Booking successful!");
        setBookings(newBookingsCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBookNowButtonClick = () => {
    toggleBookingFormpop();
    handleBookNow();
  };

  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("bookingsCount");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  if (!itemData) {
    return <div>Loading...</div>;
  }

  const { destination, id, date, price, description, days,url, totalPrice, url2,
    url3,
    day1,
    description1,
    day2,
    description2,
    day3,
    description3,
    day4,
    description4,
    day5,
    description5,
    day6,
    description6,
    day7,
    description7,
    day8,
    description8,
    day9,
    description9,
    day10,
    description10} = itemData;

  return (
  <div>
    
    <CardContainer>

       <AnimatedSlider url1={url} url2={url2} url3={url3} />
      

    <div className="card" key={id}>
    <h3>{destination}</h3>

      <div className="card-content">
        <div class="date-price-days">
          <p>Date: {date}</p>
          <p>Price: {price}</p>
          <p>Days: {days}</p>
        </div>
        
        
      </div>
      <div>
          <p class="headings">Description: </p>
        <p class="desc">{description}</p></div>
       
        <div className="card-actions">
  {Array.from({ length: days }, (_, index) => (
    <div key={index + 1} className="map-pin">
      <div className="icon">
        <FontAwesomeIcon icon={faMapPin} color="red" />
      </div>
      <div className="text">
        <p className="day">
          Day {index + 1} : {itemData[`day${index + 1}`]}
          <span
            className={`toggle-button ${
              openDescriptionIndex === index ? "active" : ""
            }`}
            onClick={() => toggleDescription(index)}
          >
            {openDescriptionIndex === index ? "–" : "+"}
          </span>{" "}
        </p>
        <p className={`description ${openDescriptionIndex === index ? "active" : ""}`}>
           {itemData[`description${index + 1}`]}
        </p>
      </div>
    </div>
  ))}

       {/* <p>Bookings: {bookings}</p> */}

        <p >Add guests :
        <button onClick={handleDecrement} class="counter">-</button>
          <span>  {count}  </span>
          <button onClick={handleIncrement} class="counter" id="counter1">+</button>
        </p>
        <p>Add Rooms <button on onClick={toggleAddForm} class="counter">+</button></p>

        {addRoomVisible && (
            <p>{generateRadioOptions()}</p>
            
          )}

        <div class="coupon">
          <input type="text" placeholder="Add Coupon " value={couponInput}
          onChange={handleCouponChange} />
        </div>
        <button onClick={handleCouponVerify} class="deletebtn">Verify</button>

        {couponMatched && (
        <p class="pcoupon" >Coupon matched! {discount } % discount applied to total price.</p>
      )}
        <p>Room Price: {roomPrice}</p>
        <p>Tour Price:{totalPrice-roomPrice}</p>
        <p>Total Price: {totalPrice}</p>

       

        
          {isAuthenticated ? (
                // Show "Logout" if authenticated
                <div>
               <button className="deletebtn" onClick={handleBookNowButtonClick}>
            Book Now
          </button>
          <Bucket tourid={itemId} email={getFromLocalStorage("userEmail")} />

              </div>
              ) : (
                <Link to={`/Login`}>
                <button className="deletebtn" onClick={handleBookNow}>
                  Book Now
                </button>
              </Link> 
                // Show "Login" if not authenticated
               
              )}
          
      </div>
    </div>
  </CardContainer>
  
  {bookingFormpop && (
    
            <div>
              <hr></hr><BookingForm price={totalPrice} count={count} tourid={itemId}></BookingForm>
              </div>
            
          )}

          
  <Footer></Footer>
  </div>
  );
};

export default BookNow;