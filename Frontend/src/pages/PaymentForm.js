
import React, { useState } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
const PaymentForm = () => {
  const [paymentOption, setPaymentOption] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [upiId, setUpiId] = useState('');
  const onToken=(token)=>{console.log(token);  }


  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryMonthChange = (event) => {
    setExpiryMonth(event.target.value);
  };

  const handleExpiryYearChange = (event) => {
    setExpiryYear(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment processing logic here (for example, making an API call)
    console.log('Payment Option:', paymentOption);
    if (paymentOption === 'card') {
      console.log('Card Number:', cardNumber);
      console.log('Expiry Date:', `${expiryMonth}/${expiryYear}`);
      console.log('CVV:', cvv);
    } else if (paymentOption === 'scan') {
      // Handle scanning process here
      console.log('Scanning payment...');
    } else if (paymentOption === 'net_banking') {
      console.log('Selected Bank:', selectedBank);
    }
    const bookingDetails = {
            name1: "John", // Replace with the actual name values from the BookingForm state
            name2: "Doe",
            email: "john.doe@example.com",
            mobno: "1234567890",
            address: "123 Main St",
            room: "Deluxe",
            totalprice: "1000", // Replace with the actual total price from the BookingForm state
          };


    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    window.location.href = "/confirmation";


  };

  // Generate options for months (01 to 12)
  const monthOptions = [];
  for (let i = 1; i <= 12; i++) {
    const month = i.toString().padStart(2, '0');
    monthOptions.push(
      <option key={month} value={month}>
        {new Date(2023, i - 1).toLocaleString('default', { month: 'long' })}
      </option>
    );
  }

  // Generate options for years (from current year to next 10 years)
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = currentYear; i <= currentYear + 10; i++) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  // Array of bank names for Net Banking
  const bankNames = [
    "Allahabad Bank",
    "Andhra Bank",
    "Allahabad Bank",
"Andhra Bank",
"Axis Bank",
"Bank of Bahrain and Kuwait",
"Bank of Baroda - Corporate Banking",
"Bank of Baroda - Retail Banking",
"Bank of India",
"Bank of Maharashtra",
"Canara Bank",
"Central Bank of India",
"City Union Bank",
"Corporation Bank",
"Deutsche Bank",
"Development Credit Bank",
"Dhanlaxmi Bank",
"Federal Bank",
"ICICI Bank",
"IDBI Bank",
"Indian Bank",
"Indian Overseas Bank",
"IndusInd Bank",
"ING Vysya Bank",
"Jammu and Kashmir Bank",
"Karnataka Bank Ltd",
"Karur Vysya Bank",
"Kotak Bank",
"Laxmi Vilas Bank",
"Oriental Bank of Commerce",
"Punjab National Bank - Corporate Banking",
"Punjab National Bank - Retail Banking",
"Punjab & Sind Bank",
"Shamrao Vitthal Co-operative Bank",
"South Indian Bank",
"State Bank of Bikaner & Jaipur",
"State Bank of Hyderabad",
"State Bank of India",
"State Bank of Mysore",
"State Bank of Patiala",
"State Bank of Travancore",
"Syndicate Bank",
"Union Bank of India",
"United Bank of India"
    // Add more bank names here
  ];

  const styles = {
    // Style for the form container
    form: {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      position: "relative",
      top: "150px",/* Adjust the value as needed */
    
    },
    // Style for the heading
    h2: {
      marginBottom: "10px",
    },
    h3: {
      textAlign: "left",
    },
    // Style for payment option labels
    label: {
      display: "block",
      marginBottom: "10px",
    },
    // Style for card details container
    cardDetails: {
      marginTop: "20px",
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#fff",
    },
    // Style for input fields
    inputText: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    // Style for the submit button
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    // Style for the submit button on hover
    submitButtonHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
    {/* ... (existing code) */}
    
    <div>
      <h3 style={styles.h3}>Select Payment Option</h3>
      <div>
        <label style={styles.label}>
          <input
            type="radio"
            value="card"
            checked={paymentOption === 'card'}
            onChange={handlePaymentOptionChange}
          />
          Pay with Card
        </label>
        {/* StripeCheckout component added here */}
        {paymentOption === 'card' && (
          <StripeCheckout
            stripeKey="pk_test_51NZDDKSCYrghJI1xohs0GUi3dRGMmws9vrij0BKbxaKFdkbca4ZaObjTNVZDCKoLeFdjKQ1GSSldDg8lJ374hV32009NbFoRBT"
            token={onToken}
            name="TripNest"
            currency="USD" // Replace with the appropriate currency code
            description="Travel Payments" // Replace with the description of the purchase
            >
           <button type="submit" style={styles.submitButton}>
       Pay
      </button>
          </StripeCheckout>
        )}
      </div>
        <div>
          <label style={styles.label}>
            <input
              type="radio"
              value="cash"
              checked={paymentOption === 'cash'}
              onChange={handlePaymentOptionChange}
            />
           
            Scan Payment
          </label>
        </div>

        {/* Net Banking section */}
        <div>
          <label style={styles.label}>
            <input
              type="radio"
              value="net_banking"
              checked={paymentOption === 'net_banking'}
              onChange={handlePaymentOptionChange}
            />
            Net Banking
          </label>
        </div>
        {paymentOption === 'net_banking' && (
          <div>
            <select value={selectedBank} onChange={handleBankChange} required>
              <option value="" disabled hidden>
                Select Bank
              </option>
              {bankNames.map((bankName) => (
                <option key={bankName} value={bankName}>
                  {bankName}
                </option>
              ))}
            </select>
          </div>
        )}

<div>
        <label style={styles.label}>
          <input
            type="radio"
            value="upi"
            checked={paymentOption === 'upi'}
            onChange={handlePaymentOptionChange}
          />
          UPI
        </label>
      </div>
      {paymentOption === 'upi' && (
        <div>
          <label>Enter UPI ID:</label>
          <input
            type="text"
            value={upiId}
            onChange={handleUpiIdChange}
            placeholder="Enter UPI ID"
            style={styles.inputText}
            required
          />
        </div>
      )}

           
                  
       
       
      </div>
      <Link to="/Bill">
      <button type="submit" style={styles.submitButton}>
        Submit Payment
      </button>
      </Link>
    </form>
  );
};

export default PaymentForm;