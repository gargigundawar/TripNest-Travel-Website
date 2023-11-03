import React from "react";

import BookingServices from "./../Services/BookingServices";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import PaymentForm from "./PaymentForm";
// import Payment from "./Payment";
import { setToLocalStorage , getFromLocalStorage} from "../Services/localStorageUtil";
import { fa0 } from "@fortawesome/free-solid-svg-icons";

const Form = styled.div`
.container {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    justify-content:center;
  }

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  form label {
    width: calc(33.33% - 0px); /* 3 columns with some spacing */
    margin-bottom: 10px;
    //font-weight: bold;
  }

  form input,
  form textarea {
    width: calc(33.33% -0px);
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin:10px;
  }

  form button[type="submit"] {
    width: 100%;
    padding: 12px;
    background-color: #ec4e4e;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top:20px;
    
    font-size:15px;
    font-weight: bold;
    
   
  }
  form {
    
    display:flex;
    
  }
  form button:hover{
    background-color: #bb2d2f;
    color: #ffffff;
  }


`;
class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",  
      name2: "",
      name3: "",
      name4: "",
      name5: "",
      name6: "",
      email: getFromLocalStorage('userEmail'),
      mobno: "",
      address: "",
      adharno: "",
      room: "",
      totalprice: this.props.price,
      tourid:"",
      tourid: this.props.tourid,
      guests:this.props.count ,
    };
  }

  loadScript = (src) => {

    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src

      script.onload = () => {
        resolve(true)
      }

      script.onerror =() => {
        resolve(false)

      }

      document.body.appendChild(script)
    })

  }

  
   handleRazor = async(e)=>{
    e.preventDefault();
    await this.loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if(this.state.totalprice === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_JuJL4MhnOk5qLW",
        key_secret:"PkIdRFUAwV0P0ELRW77k0x2N",
        amount: this.state.totalprice * 100 ,
        currency:"INR",
        name:"Trip Nest",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Prithviraj Gorule",
          email:"prithvi.gorule@gmail.com",
          contact:"7098661035"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

 
  componentDidMount() {
    console.log("Component mounting is done");
    this.fetchBookings();
  }
  fetchBookings() {
    BookingServices.getBookings().then((response) => {
      this.setState({ bookings: response.data });
    });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {

    //setToLocalStorage("userEmail", this.state.email);
    
    setToLocalStorage("userEmail", this.state.email);
    setToLocalStorage("userName1", this.state.name1);
    setToLocalStorage("userName2", this.state.name2);
    setToLocalStorage("userName3", this.state.name3);
    setToLocalStorage("userName4", this.state.name4);
    setToLocalStorage("userName5", this.state.name5);
    setToLocalStorage("userName6", this.state.name6);
    setToLocalStorage("usermob", this.state.mobno);
    setToLocalStorage("useradhar", this.state.adharno);
    setToLocalStorage("useraddress", this.state.address);
    setToLocalStorage("userguests", this.state.guests);
    setToLocalStorage("usertotalprice", this.state.totalprice);

    event.preventDefault();
    const newBooking = { ...this.state };
    BookingServices.addBooking(newBooking).then((response) => {
      console.log(response.data);
      // Do something after successful booking creation
      // For example, show a success message or redirect to another page
      this.fetchBookings(); // Refresh the bookings list after adding a new booking
      this.setState({
        name1: "",
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        name6: "",
        email: "",
        mobno: "",
        address: "",
        adharno: "",
        room: "",
        // totalprice: "",
      });
      window.alert("Booking successful!");
    });
  };
  handleAddBooking = () => {
    const {
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      email,
      mobno,
      address,
      adharno,
      room,
      totalprice,
      tourid,
      guests,
    } = this.state;
  
    const newBooking = {
      name1: name1,
      name2: name2,
      name3: name3,
      name4: name4,
      name5: name5,
      name6: name6,
      email: email,
      mobno: mobno,
      address: address,
      adharno: adharno,
      room: room,
      totalprice: totalprice,
      tourid: tourid,
      guests:guests,
    };
  
    // Assuming there is a BookingServices.addItem function to add the booking to the backend
    BookingServices.addBooking(newBooking).then((response) => {
      console.log(response.data);
      this.fetchBookings(); // Refresh the bookings list after adding a new booking
      this.setState({
        name1: "",
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        name6: "",
        email: "",
        mobno: "",
        address: "",
        adharno: "",
        room: "",
        totalprice: this.props.price,
        
      });
      window.alert("Booking successful!");
    });
  };

  render() {
    const {
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      email,
      mobno,
      address,
      adharno,
      room,
      totalprice,
    } = this.state;


    const { count } = this.props;
    // Generate an array of numbers from 1 to count
    const countArray = Array.from({ length: count }, (_, index) => index + 1);

    return (

      <div>
        <Form>
        <h2>Booking Form</h2>
        <form onSubmit={this.handleSubmit} class="container">

          {countArray.map((num) => (
            <label key={num}>
              Name {num}:
              <input
                placeholder="Full name"
                type="text"
                name={`name${num}`}
                value={this.state[`name${num}`]}
                onChange={this.handleInputChange}
                required
              />
            </label>
          ))}

<label>Email: {email}</label>


          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobno"
              value={this.state.mobno}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label>
            Address:
           
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label>
            Aadhar Number:
            <input
              type="text"
              name="adharno"
              value={this.state.adharno}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label>
            Room:
            <input
              type="text"
              name="room"
              value={this.state.room}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label>Total Price : {this.props.price}</label>
          <br></br>
          <Link to={`/PaymentForm`}><button type="submit" onClick={this.handleSubmit}>Confirm Booking</button></Link>
          <button type="submit" onClick={this.handleRazor} >payment</button>
           

        </form>
        </Form>
      </div>
    );
  }
}

export default BookingForm;