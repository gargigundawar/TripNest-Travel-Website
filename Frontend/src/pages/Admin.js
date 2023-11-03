import React from "react";

import styled from "styled-components";
import TourService from "../Services/TourServices";
import { Link, useParams } from "react-router-dom";
import CouponService from "../Services/CouponService";
import BookingServices from "../Services/BookingServices";
import { GrCalendar, GrLocation, GrMoney } from 'react-icons/gr';
import { FaCalendar, FaRupeeSign } from "react-icons/fa";


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left:200px;
  margin-top:230px;
  position:absolute;
  .card {
    width: 300px;
    height: 360px;
    background-color:#ffff;
   // background: linear-gradient(to bottom , #ffffff, #d8e0e6);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin: 40px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    padding:0px;
    
  }
  .alert-sign{
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 30px;
    color: red;
   // background-color: white;
    border-radius: 50%;
    padding: 5px;
    z-index: 1;
  }

  .card:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }




  .card h4 {
    margin-top: 10;
    color:black ;
    font-size: 28px;
    font-family:times-newromoan;
    position: absolute;
    /* bottom: 20px;
    left: 20px; */
    margin-bottom: 80px;
    bottom: 40px;
    left: 20px;
    
    
    
  }
  .line{
    color:black;
  }

  .card p {
    color:white ;
    font-size: 18px;
   font-weight: 600;
   position: absolute;
   
   bottom: 330px;
    left: 20px;
    /* bottom: 20px;
  
    left: 20px; */
  }
  

  .card-actions {
    display:flex;
    position: absolute;
    bottom: 10px;
    left: 20px;
  }
  .Bookbtn{
     //background-color: #13385b;
   // background-color: rgba(85, 229, 239, 1.597);
   background:linear-gradient(to right, hsl(187,85%,43%) , hsl(199,100%,33%));
  // background: linear-gradient(to bottom , #ffffff, #d8e0e6);
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom:5px;
    height:33px;
  }

  .deletebtn {
    background-color: #ec4e4e;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-left:20px;
    height:33px;
  }
  .Bookbtn:hover{
    background:linear-gradient(to right, hsl(187,45%,63%) , hsl(199,90%,53%));
  //  margin-top:20px;
  }

  .deletebtn:hover {
    background-color: #bb2d2f;
    color: #ffffff;
  }

  img {
    display: flex;
    justify-self: center;
    width: 150%; /* Set the image width to 100% of its parent container */
    max-width: 350px; /* Optional: Set a maximum width for the image */
    height: 200px; 
    margin: 0px,0px;/* This will maintain the aspect ratio of the image */
    margin-left: 0px;
    z-index: -1;
  
    padding-left: 0px;
  }

  .dateprice{
    margin-top:45px;
    font-family:times-newroman;
    display:flex;
    font-size:20px;

    .price{
      margin-top:17px;
      margin-left:0px;
      text-decoration:none;
      color: #333;
      font-size:1.3rem;
      

    }
    .date{
      margin-top:20px;
      margin-left:20px;
      text-decoration:none;
      color: #333;

    }
    .icondate{
      margin-top:20px;
      margin-left:20px;
      font-size:15px;
      color: #333;
    }
    .iconprice{
      margin-top:20px;
      margin-left:20px;
      font-size:17px;
      text-decoration:none;
      color: #333;
    }
    .days{
      margin-top:20px;
      margin-left:5px;
    }
  }
`;
const PopupForm = styled.div`

  position: absolute;
  top: 1100px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: popup 0.3s ease-in-out;
  margin-right:100px;

  position: fixed;
  top: 60%; /* Center the form vertically */
  left: 50%;
  transform: translate(-50%, -50%);
  /* ... other styles ... */

  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  max-height: 60vh; /* Set a maximum height for the form */

  @keyframes popup {
    0% {
      opacity: 0;
      transform: translate(-50%, -60%);
    }  
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  div {
    margin-bottom: 10px;
  }

  label {
    display: block;
    font-weight: bold;
  }

  input[type="text"],
  input[type="number"] {
    width: 95%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 5px;
  }

  button {
    display: block;
    margin-top: 20px;
    padding: 8px 16px;
    background-color: #174f83;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #123d65;
  }

  /* Additional styling for 3D effect */

  perspective: 1000px;
  z-index: 1;

  input[type="text"],
  input[type="number"],
  button {
    transition: all 0.3s ease-in-out;
    transform-style: preserve-3d;
  }

  input[type="text"]:focus,
  input[type="number"]:focus,
  button:focus {
    outline: none;
    transform: translateZ(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

`;

const Title = styled.h1`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 70px;
  color: white;
  font-size: 50px;
`;

const TourPackage = styled.div`
  margin-top:70px;
  .popbtn {
    background-color: #13385b;
    color: white;
    width: 130px;
    padding: 10px;
    border-radius: 5px;
    margin-left: 40px;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 40px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    
  }

  .pbtn {
   // display: flex;
    justify-content: center;
    border:1px solid black;
   // padding-left:10px;
    margin-top:10px;
    width:220px;
    height:670px;
    position:fixed;
    margin-right:50px;
    background-color: #13385b;
    p{
      color:#ffff;
      display:flex;
      
      justify-content:center;
      margin-top:15px;
      margin-bottom:15px;
      font-size:30px;
      font-family:times-newroman;
      
    }
   
  }

  .popbtn:hover {
    transform: scale(1.1);
  }

  .tourshead {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    color: #13385b;
  }
`;
const InputContainer = styled.div`
.tourContent {
  
  position: absolute;
  //z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  /* max-width: 1500px; */

  margin: 0 auto;
  margin-top:60px;
  margin-left:330px;
 // margin-bottom:150px;
  text-align: center;
}

.cardDiv {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  background: white;
  padding-bottom: 20px;
  color: black;
  border-radius: 30px;

  width: 1000px;
  margin: 0 auto;
 // margin-bottom: 150px;

}

.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 20px 30px;
  text-align: center;
}

.labelLocation {
  margin-bottom: 10px;
}

.inputFlex {
  display: flex;
  align-items: center;
}

.inputLocation {
  margin-left: 5px;
  padding: 10px;
  border: none;
  border-right: 1px solid black;
  border-radius: 20px;
  margin-top: 10px;
}

.icon {
  font-size: 20px;
}

.searchBtn {
  height: 30px;
  margin-top: 60px;
  margin-left: 0px;
  width: 100px;
  background:linear-gradient(to right, hsl(187,85%,43%) , hsl(199,100%,33%));
  border: none;
  border-radius: 20px;
  transform-style: preserve-3d;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px rgba(47, 47, 47, 0.261);
  margin-right: 5px;
  color:#ffff
}

.searchBtn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  
}
`;


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: '',
      name: '',
      destination: '',
      date: '',
      price: 0,
      description: '',
      days: 0,
      url: '',
      url2: '', // Placeholder for URL2
      url3: '', // Placeholder for URL3
      day1: '',
      description1: '',
      day2: '',
      description2: '',
      day3: '',
      description3: '',
      // ... Include day4 to day10 and corresponding description fields
      day4: '',
      description4: '',
      day5: '',
      description5: '',
      day6: '',
      description6: '',
      day7: '',
      description7: '',
      day8: '',
      description8: '',
      day9: '',
      description9: '',
      day10: '',
      description10: '',
      coupon: '',
      discount: '',
      itemData: null,
      isAddFormVisible: false,
      isUpdateFormVisible: false,
      isCouponFormVisible: false,
      filteredItems: [],
      location: '',
      selectedDate: '',
      maxPrice: 0,
    };
  }

  toggleAddForm = () => {
    this.setState((prevState) => ({
      isAddFormVisible: !prevState.isAddFormVisible,
    }));
  };

  toggleUpdateForm = () => {
    this.setState((prevState) => ({
      isUpdateFormVisible: !prevState.isUpdateFormVisible,
    }));
  };

  toggleCouponForm = () => {
    this.setState((prevState) => ({
      isCouponFormVisible: !prevState.isCouponFormVisible,
    }));
  };

  componentDidMount() {
    console.log("mounting is done");
    this.fetchItems();
    this.fetchCoupon();
  }

  fetchItems() {
    TourService.getItems().then((response) => {
      // Sort the items in ascending order based on the date
      const sortedItems = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
      this.setState({ items: sortedItems, filteredItems: sortedItems });
    });
  }
  fetchCoupon() {
    CouponService.getItems().then((response) => {
      this.setState({ item: response.data })
    })
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { items, location, selectedDate, maxPrice } = this.state;
    // Sort the items array in ascending order based on the date


    let filteredItems = items;

    if (location) {
      filteredItems = filteredItems.filter((item) =>
        item.destination.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (selectedDate) {
      const selectedMonthYear = new Date(selectedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
      });

      filteredItems = filteredItems.filter((item) => {
        const itemMonthYear = new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
        });

        return itemMonthYear === selectedMonthYear;
      });
    }

    if (maxPrice) {
      filteredItems = filteredItems.filter(
        (item) => parseFloat(item.price) <= parseFloat(maxPrice)
      );
    }



    this.setState({ filteredItems });
  };


  handleAddItem = () => {
    const {

      name,
      destination,
      date,
      price,
      description,
      days,
      url,
      url2,
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
      description10
    } = this.state;

    const newItem = {

      name: name,
      destination: destination,
      date: date,
      price: price,
      description: description,
      days: days,
      url: url,
      url2: url2,
      url3: url3,
      day1: day1,
      description1: description1,
      day2: day2,
      description2: description2,
      day3: day3,
      description3: description3,
      day4: day4,
      description4: description4,
      day5: day5,
      description5: description5,
      day6: day6,
      description6: description6,
      day7: day7,
      description7: description7,
      day8: day8,
      description8: description8,
      day9: day9,
      description9: description9,
      day10: day10,
      description10: description10
    };


    TourService.addItem(newItem).then((response) => {
      console.log(response.data);
      this.fetchItems();
      this.setState({

        name: "",
        destination: "",
        date: "",
        price: "",
        description: "",
        days: "",
        url: "",
        url2: "",
        url3: "",
        day1: "",
        description1: "",
        day2: "",
        description2: "",
        day3: "",
        description3: "",
        day4: "",
        description4: "",
        day5: "",
        description5: "",
        day6: "",
        description6: "",
        day7: "",
        description7: "",
        day8: "",
        description8: "",
        day9: "",
        description9: "",
        day10: "",
        description10: ""
      });
    });
  };
  handleAddCoupon = () => {
    const { coupon, discount } = this.state;
    const newCoupon = {
      coupon: coupon,
      discount: discount,
    };

    CouponService.addItem(newCoupon).then((response) => {
      console.log(response.data);
      this.fetchCoupon();
      this.setState({
        coupon: "",
        discount: "",
      });
    });
  };

  handleUpdateItem = () => {
    const {
      id,
      name,
      destination,
      date,
      price,
      description,
      days,
      url,
      url2,
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
      description10
    } = this.state;
    const updatedItem = {
      id: id,
      name: name,
      destination: destination,
      date: date,
      price: price,
      description: description,
      days: days,
      url: url,
      url2: url2,
      url3: url3,
      day1: day1,
      description1: description1,
      day2: day2,
      description2: description2,
      day3: day3,
      description3: description3,
      day4: day4,
      description4: description4,
      day5: day5,
      description5: description5,
      day6: day6,
      description6: description6,
      day7: day7,
      description7: description7,
      day8: day8,
      description8: description8,
      day9: day9,
      description9: description9,
      day10: day10,
      description10: description10
    };

    TourService.updateItem(updatedItem).then((response) => {
      console.log(response.data);
      this.fetchItems();
      this.setState({
        id: "",
        name: "",
        destination: "",
        date: "",
        price: "",
        description: "",
        days: "",
        url: "",
        url2: "",
        url3: "",
        day1: "",
        description1: "",
        day2: "",
        description2: "",
        day3: "",
        description3: "",
        day4: "",
        description4: "",
        day5: "",
        description5: "",
        day6: "",
        description6: "",
        day7: "",
        description7: "",
        day8: "",
        description8: "",
        day9: "",
        description9: "",
        day10: "",
        description10: ""
      });
    });
  };

  handleDeleteItem = (itemId) => {
    TourService.deleteItem(itemId).then((response) => {
      console.log(response.data);
      this.fetchItems();
    });
  };

  getExpiredTours = () => {
    const currentDate = new Date();
    const expiredTours = this.state.items.filter((item) => new Date(item.date) < currentDate);
    this.setState({ filteredItems: expiredTours });
  };
  getUpcomingTours = () => {
    const currentDate = new Date();
    const upcomingTours = this.state.items.filter((item) => new Date(item.date) >= currentDate);
    this.setState({ filteredItems: upcomingTours });
  };

  isTourExpired = (date) => {
    const currentDate = new Date();
    return new Date(date) < currentDate;
  };

  getUpcomingNationalTours = () => {
    const currentDate = new Date();
    const upcomingNationalTours = this.state.items.filter(
      (item) =>
        new Date(item.date) >= currentDate && item.name.toLowerCase() === "national"
    );
    this.setState({ filteredItems: upcomingNationalTours });
  };
  
  getUpcomingInternationalTours = () => {
    const currentDate = new Date();
    const upcomingInternationalTours = this.state.items.filter(
      (item) =>
        new Date(item.date) >= currentDate && item.name.toLowerCase() === "international"
    );
    this.setState({ filteredItems: upcomingInternationalTours });
  };
  

  render() {
    const {
      itemData,
      isAddFormVisible,
      isUpdateFormVisible,
      isCouponFormVisible,
      name,
      destination,
      coupon,
      discount,
      date,
      price,
      description,
      days,
      url,
      url2,
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
      description10
    } = this.state;
    const { filteredItems } = this.state;
    const currentDate = new Date(); // Get the current date

    return (
      <TourPackage>

        <InputContainer>
          <div className="tourContent">

            <form onSubmit={this.handleSubmit}>
              <div className="cardDiv">
                <div className="inputContainer">
                  <label htmlFor="location1" className="labelLocation">
                    Search your destination
                  </label>
                  <div className="inputFlex">
                    <GrLocation className="icon" />
                    <input
                      type="text"
                      id="location1"
                      className="inputLocation"
                      name="location"
                      placeholder="Location"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="inputContainer">
                  <label htmlFor="location2" className="labelLocation">
                    Select your date
                  </label>
                  <div className="inputFlex">
                    <input
                      type="date"
                      id="location2"
                      className="inputLocation"
                      name="selectedDate"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="inputContainer">
                  <label htmlFor="location3" className="labelLocation">
                    Max price
                  </label>
                  <div className="inputFlex">
                    <GrMoney className="icon" />
                    <input
                      type="text"
                      id="location3"
                      className="inputLocation"
                      name="maxPrice"
                      placeholder="price"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <button type="submit" className="searchBtn">
                  Search
                </button>
              </div>
            </form>
          </div>
        </InputContainer>

        <div className="pbtn">
          <p>Admin</p>
          <hr></hr>

          <button className="popbtn" onClick={this.getUpcomingNationalTours}>
            National Tours
          </button>

          <button className="popbtn" onClick={this.getUpcomingInternationalTours}>
            International Tours
          </button>
          <button className="popbtn" onClick={this.getExpiredTours}>
            Expired Tours
          </button>

          <button className="popbtn" onClick={this.toggleAddForm}>
            Add Tour
          </button>

          <button className="popbtn" onClick={this.toggleUpdateForm}>
            Update Tour
          </button>

          <button className="popbtn" onClick={this.toggleCouponForm}>
            Add Coupon
          </button>

          <Link to={`/Signup`}> <button className="popbtn" >
            Add Admin
          </button></Link>



        </div>


        <CardContainer>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className="card" key={item.id}>
                <div className="card-content">
                  <img src={item.url} alt={item.name} className="card-image" />
                  <p>ID : {item.id}</p>
                  {this.isTourExpired(item.date) && (
                    <div className="alert-sign">
                      <span role="img" aria-label="Expired">
                        ⚠️
                      </span>
                    </div>
                  )}
                  <h4>{item.destination}</h4>

                  <div class="dateprice">
                    <FaRupeeSign class="iconprice"></FaRupeeSign>
                    <h5 class="price">{item.price}</h5>
                    <h5 class="date ">{item.date}</h5>
                    <FaCalendar class="icondate"></FaCalendar>
                    <h5 class="days">{item.days} days</h5>
                  </div>

                </div>
                <div className="card-actions">
                  <div><Link to={`/TotalBookings/${item.id}`}>
                    <button className="Bookbtn">Total Bookings</button>
                  </Link>
                  </div>

                  <button
                    className="deletebtn"
                    onClick={() => this.handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            this.state.items.map((item) => (
              <div className="card" key={item.id}>
                {this.isTourExpired(item.date) && (
                  <div className="alert-sign">
                    <span role="img" aria-label="Expired">
                      ⚠️
                    </span>
                  </div>
                )}
                <div className="card-content">
                  <img src={item.url} alt={item.name} className="card-image" />
                  <h4>{item.destination}</h4>

                  <div class="dateprice">
                    <FaRupeeSign class="iconprice"></FaRupeeSign>
                    <h5 class="price">{item.price}</h5>
                    <h5 class="date ">{item.date}</h5>
                    <FaCalendar class="icondate"></FaCalendar>
                    <h5 class="days">{item.days} days</h5>
                  </div>


                </div>
                <div className="card-actions">
                  <div>
                    <Link to={`/booknow/${item.id}`}>
                      <button className="Bookbtn">Book now</button>
                    </Link>
                  </div>


                </div>
              </div>
            ))
          )}
        </CardContainer>

        {isAddFormVisible && (
          <PopupForm>
            <button className="close-btn" onClick={this.toggleAddForm}>
              X
            </button>
            <h2>Add Tour:</h2>

            <div>
              <label htmlFor="destinationInput">Destination:</label>
              <input
                type="text"
                id="destinationInput"
                name="destination"
                value={destination}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
  <label htmlFor="nameInput">Type of tour:</label>
  <select
    id="nameInput"
    name="name"
    value={name}
    onChange={this.handleInputChange}
    defaultValue="national"
  >
     <option value="" >Option</option>
    <option value="national" >National</option>
    <option value="international">International</option>
  </select>
</div>



            <div>
              <label htmlFor="dateInput">Date:</label>
              <input
                type="date"
                id="dateInput"
                name="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="priceInput">Price:</label>
              <input
                type="number"
                id="priceInput"
                name="price"
                value={price}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="descriptionInput">Description:</label>
              <input
                type="text"
                id="descriptionInput"
                name="description"
                value={description}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="DaysInput">Duration(days):</label>
              <select
                id="DaysInput"
                name="days"
                value={days}
                onChange={this.handleInputChange}
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="urlInput">Image URL:</label>
              <input
                type="text"
                id="urlInput"
                name="url"
                value={this.state.url}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="url2Input">Image URL 2:</label>
              <input
                type="text"
                id="url2Input"
                name="url2"
                value={url2}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="url3Input">Image URL 3:</label>
              <input
                type="text"
                id="url3Input"
                name="url3"
                value={url3}
                onChange={this.handleInputChange}
              />
            </div>

 {/* Loop to generate day inputs and descriptions */}
 {Array.from({ length: days }, (_, index) => (
              <div key={`day${index + 1}`}>
                <label htmlFor={`day${index + 1}Input`}>{`Day ${index + 1}:`}</label>
                <input
                  type="text"
                  id={`day${index + 1}Input`}
                  name={`day${index + 1}`}
                  value={this.state[`day${index + 1}`]}
                  onChange={this.handleInputChange}
                />
                <label htmlFor={`description${index + 1}Input`}>{`Description Day ${index + 1}:`}</label>
                <textarea
                  id={`description${index + 1}Input`}
                  name={`description${index + 1}`}
                  value={this.state[`description${index + 1}`]}
                  onChange={this.handleInputChange}
                />
              </div>
            ))}
            <button onClick={this.handleAddItem}>Add Item</button>
          </PopupForm>
        )}

        {isUpdateFormVisible && (
          <PopupForm>
            <button className="close-btn" onClick={this.toggleUpdateForm}>
              X
            </button>
            <h2>Update Item:</h2>
            <div>
              <label htmlFor="updateIdInput">ID:</label>
              <input
                type="number"
                id="updateIdInput"
                name="id"
                value={this.state.id}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="tourtypeInput">Type of tour:</label>
              <select
                id="tourtypeInput"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              >
                <option value="national">National</option>
                <option value="international">International</option>
              </select>
            </div>

            <div>
              <label htmlFor="updateDestinationInput">Destination:</label>
              <input
                type="text"
                id="updateDestinationInput"
                name="destination"
                value={destination}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="updateDateInput">Date:</label>
              <input
                type="date"
                id="updateDateInput"
                name="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="updatePriceInput">Price:</label>
              <input
                type="number"
                id="updatePriceInput"
                name="price"
                value={price}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="updateDescriptionInput">Description:</label>
              <input
                type="text"
                id="updateDescriptionInput"
                name="description"
                value={description}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="updateDaysInput">Duration(days):</label>
              <select
                id="updateDaysInput"
                name="days"
                value={days}
                onChange={this.handleInputChange}
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="urlInput">Image URL:</label>
              <input
                type="text"
                id="urlInput"
                name="url"
                value={this.state.url}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="url2Input">Image URL 2:</label>
              <input
                type="text"
                id="url2Input"
                name="url2"
                value={url2}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="url3Input">Image URL 3:</label>
              <input
                type="text"
                id="url3Input"
                name="url3"
                value={url3}
                onChange={this.handleInputChange}
              />

            </div>

            {/* Loop to generate day inputs and descriptions */}
            {Array.from({ length: days }, (_, index) => (
              <div key={`day${index + 1}`}>
                <label htmlFor={`day${index + 1}Input`}>{`Day ${index + 1}:`}</label>
                <input
                  type="text"
                  id={`day${index + 1}Input`}
                  name={`day${index + 1}`}
                  value={this.state[`day${index + 1}`]}
                  onChange={this.handleInputChange}
                />
                <label htmlFor={`description${index + 1}Input`}>{`Description Day ${index + 1}:`}</label>
                <textarea
                  id={`description${index + 1}Input`}
                  name={`description${index + 1}`}
                  value={this.state[`description${index + 1}`]}
                  onChange={this.handleInputChange}
                />
              </div>
            ))}
            <button onClick={this.handleUpdateItem}>Update Item</button>
          </PopupForm>




        )}

        {isCouponFormVisible && (
          <PopupForm>
            <button className="close-btn" onClick={this.toggleCouponForm}>
              X
            </button>
            <h2>Update Item:</h2>
            <div>
              <label htmlFor="updateCouponInput">Update Coupon code:</label>
              <input
                type="text"
                id="updateCouponInput"
                name="coupon"
                value={coupon}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="updateDiscountInput">Discount % : </label>
              <input
                type="number"
                id="updateDiscountInput"
                name="discount"
                value={discount}
                onChange={this.handleInputChange}
              />
            </div>

            <button onClick={this.handleAddCoupon}>Update Item</button>
          </PopupForm>




        )}
      </TourPackage>
    )
  }
}

export default Admin;
