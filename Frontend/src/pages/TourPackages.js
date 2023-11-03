import React from "react";
import { GrCalendar, GrLocation, GrMoney } from 'react-icons/gr';
import styled from "styled-components";
import TourService from "../Services/TourServices";
import { Link, useParams } from "react-router-dom";
import CouponService from "../Services/CouponService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope ,faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

import AirplaneAnimation from "./Aeroplane";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCalendar, FaRupeeSign } from "react-icons/fa";

const TourContainer = styled.div`
width: 100%;
position: relative;
/* display: flex; */
align-items: center;
justify-content: center;
margin: auto;
z-index: 1;
overflow: hidden;
margin-top:80px;
margin-bottom:80px;


.dropdown {
  background-color: #fff;
  color: #333;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 25px;
  font-family:times-newromoan;
 font-weight:bold;
  width: 180px; /* adjust width as needed */
  margin-right: 20px; /* add margin for spacing */
  margin-bottom:50px;
  margin-bottom:50px;
  justify-content:center;
  text-align:center;
}

.option-container {
  display: flex;
  justify-content: center;
 
  margin-bottom: 50px;
  border:1px solid #fff;
 width:300px;
  border-radius:30px;
}

.option {
  cursor: pointer;
  padding: 10px 20px;
 
  border-radius: 5px;
  width:300px;
  border-radius:30px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
}

.option.selected {
  background-color: #ffff;
  color: black;
}

// .option:not(.selected):hover {
//   background-color: #f0f0f0;
// }

h1 {
  text-align: center;
  margin-top: 45px;
  margin-bottom: 45px;
  /* border: 1px solid white; */
  
  padding-bottom: 5px;
  /* border-radius: 30px; */
  color: white;
  font-size: 45px;
  /* background-color: rgba(240, 248, 255, 0.917);
  color: rgb(43, 130, 177); */
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:auto;
  object-fit: cover;
  z-index: -1;
}




.overlay {
  position: absolute;
  height: 100%;
  width: 50%;
  /* background: linear-gradient(to right, rgba(243, 250, 252, 0.887), rgba(243, 250, 252, 0)); */
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  mix-blend-mode: hard-light;
}

.tourContent {
  position: relative;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  /* max-width: 1500px; */

  margin: 0 auto;
  text-align: center;
}

.cardDiv {
  display: flex;
  justify-content: center;
  background: white;
  padding-bottom: 20px;
  color: black;
  border-radius: 30px;

  width: 1000px;
  margin: 0 auto;
  margin-bottom: 50px;

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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

  .card:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }




  .card h4 {
    margin-top: 0;
    color:black ;
    font-size: 28px;
    font-family:times-newromoan;
    position: absolute;
    /* bottom: 20px;
    left: 20px; */
    margin-bottom: 60px;
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
   
   bottom: 130px;
    left: 20px;
    /* bottom: 20px;
  
    left: 20px; */
  }
  

  .card-actions {
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
  }

  .deletebtn {
    background-color: #ec4e4e;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  .Bookbtn:not(:disabled):hover {
    background: linear-gradient(to right, hsl(187, 45%, 63%), hsl(199, 90%, 53%));
    margin-top: 20px;
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
    margin-top:55px;
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


const Title = styled.h1`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 70px;
  color: white;
  font-size: 50px;
`;

const TourPackage = styled.div`


  .pbtn {
    display: flex;
    justify-content: center;
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

class TourPackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: "",
      name: "",
      destination: "",
      date: "",
      price: "",
      description: "",
      days: "",
      url: "",
      coupon: "",
      itemData: null,
      isAddFormVisible: false,
      isUpdateFormVisible: false,
      isCouponFormVisible: false,
      items: [],
      filteredItems: [],
      location: "",
      selectedDate: "",
      maxPrice: "",
      isnational:true,
      
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  
  handleDropdownChange = (isNational) => {
    this.setState({
      isnational: isNational,
    }, () => {
      // After updating the state, you may want to call your filter function here
      this.filterItems();
    });
  };
  
  

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


  filterItems = () => {
    const { items, isnational } = this.state;
  
    const filteredItems = items.filter(item =>
      isnational ? item.name.toLowerCase() === "national" : item.name.toLowerCase() === "international"
    );
  
    this.setState({ filteredItems });
  };
  
  fetchItems() {
    const currentDate = new Date();

    TourService.getItems().then((response) => {
      const filteredItems = response.data.filter(item => new Date(item.date) >= currentDate);
      const sortedItems = filteredItems.sort((a, b) => new Date(a.date) - new Date(b.date));

      this.setState({ items: sortedItems });
      this.filterItems();
    });
  }
  
  getUpcomingTours = () => {
    const currentDate = new Date();
    const upcomingTours = this.state.items.filter((item) => new Date(item.date) >= currentDate);
    this.setState({ filteredItems: upcomingTours });
  };

  fetchCoupon(){
    CouponService.getItems().then((response) =>{
      this.setState({item: response.data})
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

  handleToggle = () => {
    this.setState((prevState) => ({
      isnational: !prevState.isnational,
    }), () => {
      // After toggling, filter the items based on the new value of isnational
      this.filterItems();
    });
  }



  render() {
    const {
      itemData,
      isAddFormVisible,
      isUpdateFormVisible,
      isCouponFormVisible,
      name,
      destination,
      date,
      price,
      description,
      days,
      url,
      coupon,
    } = this.state;

    const { filteredItems } = this.state;
    const currentDate = new Date(); // Get the current date
    const {
      // ... your other state and variables ...
      isnational,
    } = this.state;

    return (
      <div>
        <TourContainer>
          <div className="overlay"></div>
          <div className="video">
            <video muted autoPlay loop type="video/mp4"><source src="/media/video.mp4" type="video/mp4" /></video>
          </div>

          <div className="tourContent">
            <div className="textDiv">
              <Title>Tour Packages</Title>
            </div>
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
        {/* <select onChange={this.handleDropdownChange} className="dropdown">
  <option value="national">National</option>
  <option value="international">International</option>
</select> */}

<div className="option-container">
  <div
    className={`option ${this.state.isnational ? "selected" : ""}`}
    onClick={() => this.handleDropdownChange(true)}
  >
    National
  </div>
  <div
    className={`option ${!this.state.isnational ? "selected" : ""}`}
    onClick={() => this.handleDropdownChange(false)}
  >
    International
  </div>
</div>


          </div>

        
               
        </TourContainer>

        <TourPackage>
         

<CardContainer>
  {filteredItems.length > 0 ? (
    filteredItems.map((item) => (
      
      <div className="card" key={item.id}>
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
            <button
                      className={`Bookbtn `}
                      // Disable the button if the card's date is less than the current date
                      //disabled={new Date(item.date) < currentDate}
                    >
                      Book now
                    </button>
            </Link>
          </div>

        
        </div>
      </div>
    ))
  ) : (
    this.state.items.map((item) => (
      <div className="card" key={item.id}>
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
            <button
                      className={`Bookbtn `}
                      // Disable the button if the card's date is less than the current date
                      //disabled={new Date(item.date) < currentDate}
                    >
                      Book now
                    </button>
            </Link>
          </div>

          
        </div>
      </div>
      
    ))
  )}
  
</CardContainer>


        </TourPackage>
        {!isnational && <AirplaneAnimation />}
        <Footer></Footer>
      </div>
    );
  }
}

export default TourPackages;