import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
const FAQ = () => {
  const enquiries = [
    {
      question: "Where can I find information about Trip Nest tours and products?",
      answer: "Trip Nest website www.tripnest.com contains information about all tour categories and services. You can also call on Trip Nest Toll Free number 1234567891 and get all the details about tours and various products from Veena World travel advisors."
    },
    {
      question: "Can I make full payment for the tour or holiday in one go?",
      answer: "Yes, you can make the full payment at the time of booking itself in one go. Sometimes there are additional benefits for full payment, if it is done well in advance say 3/6/9/12 months prior to the tour departure. Veena World Travel Advisor will guide you on the prevailing full payment (if any), at the time of booking."
    },
    {
      question: "Will I get discount over and above the tour price?",
      answer: "The tour price is net and discount of any kind is not applicable, unless there is any ongoing specific discount offer published on the website."
    },
    {
      question: "What documents should I carry on tour?",
      answer: "The baggage allowance for check-in & carry-on baggage varies as per the airline and the class of travel. The exact baggage allowance for your scheduled airline will be conveyed to you prior to your departure. Every airline has a list of items restricted to be carried. You will find the details of the same on your air ticket."
    },
    {
      question: "What type of food will be served on my tour?",
      answer: "Generally on tour meals are served as mentioned in the itinerary/ tour program as B (Breakfast), L (Lunch), D (Dinner). These are pre-set menus which mostly include Indian meals and sometimes local or international cuisine depending on the destination and the tour. The Indian meal menu generally comprises of dal, rice, roti, two vegetables, one non-vegeterian item, salad & accompaniments and dessert."
    },
    {
      question: "How long does it take to process a refund?",
      answer: "As per the Cancellation and Refund Policy, the applicable refund will be processed within 10 working days of confirmation of the cancellation."
    },
    {
      question: "What if I lose my baggage/ luggage on tour?",
      answer: "In such case before leaving the airport you are required to fill up the complaint claim form at the airline counter. You may need to provide your hotel/ residence details to airline, so your baggage can be sent to your hotel directly by airline if you are on tour."
    },
    {
      question: "How much baggage is allowed by the airline and is there any restriction on items we carry?",
      answer: "For domestic tours in India, all guests must carry air ticket, insurance (if any), the photo identification in the form of Aadhar card, ID Card, PAN card, driving license and school / college ID for students. For International tours, all guests including children and infants must be in possession of a machine-readable passport valid for minimum of 180 days (Six Months) from their tour return date, along with applicable visas, air ticket and insurance copy."
    },
    {
      question: "What type of tours or packages does Trip Nest offer?",
      answer: "Trip Nest is popular for tours and packages across the globe. From Antarctica to Alaska, from Scandinavia to Serbia, from Australia to America, and Africa and Asia, you name it and we have it.Trip Nest is also a large tour operator for India, we show India to Indians, non-residents and foreigners. We have tours for every family and everyone in the family."
    },
    {
      question: "How many travellers will be there as a part of a group tour?",
      answer: "The number of travellers in one group tour varies depending on the destination or tour category or vehicle type used for that tour. The usual group size for an International tour is 40 - 50 guests and for an Indian tour 30 - 40 guests."
    },
    {
      question: "Can I modify or change my booking after confirmation?",
      answer: "Yes, any change or amendment is possible subject to availability, with an additional actual cost along with cancellation charges (if applicable). Your Veena World Travel Advisor will assist you with amendments as soon as s/he receives confirmation and additional charges."
    },
    // ... Add more enquiries and answers here
  ];

  const styles = `
  .faq-container {
    text-align: center;
    padding: 20px;
   
    background-size: cover; /* or contain */
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh; /* Increase or adjust as needed */
    width: 100%; /* Adjust as needed */
  }

  .faq-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .faq-item {
    margin: 10px;
    text-align: left;
    width: 100%;
    position: relative; /* Added */
  }

  .faq-question {
    font-size: 22px;
    margin-left:80px;
    font-weight:700;
  }

  .section.about.container {
    position: relative;
    top:-10%;
  }
  
  .image-container {
    position: relative;
    
  }
  
  .about__img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  .about-heading {
 padding-left:500px;
position:absolute;
top:20%;
  }
  .post-button {
    display: block;
    margin-top: 140px;
    padding: 8px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    float: right;
    margin-right: 300px;
    outline:none;
    transition: transform 0.2s; /* Adding the transition property */
  }
  
  .post-button:hover {
    transform: scale(1.1); /* Applying the scale animation on hover */
  }
  
  
  .faq-button {
    position: absolute;
  right: 50px; /* Adjust this value to align the button */
  top: 0;
  background-color: Grey;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  }

  .faq-answer {
    font-size: 18px;
    display: none;
    margin-left:80px;
    height: 0;
    overflow: hidden;
    margin-top: 10px;
    transition: height 0.3s ease;
  }
  .faq-item {
    margin: 15px 5px; /* Adjust the margin as needed */
    text-align: left;
    width: 100%;
    position: relative;
  }

  .expanded {
    display: block;
    height: auto;
  }
`;

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <section
        class="section about-hero"
        style={{backgroundImage: 'url(./media/faq.jpg)'}}
        id="hero"

      >
        <br></br>
        <h1 class="hero__title">Frequently Asked Questions</h1>
      </section>

<br></br>
<br></br>
<br></br>
<br></br>

      <style>{styles}</style>

      <div className="faq-list">
        {enquiries.map((enquiry, index) => (
          <div
            key={index}
            className="faq-item"
          >
            <div className="faq-question-container">
              <button
                className="faq-button"
                onClick={() => toggleAnswer(index)}
              >
                +
              </button>
              <h2 className="faq-question">{enquiry.question}</h2>
            </div>
            <p className={`faq-answer ${index === expandedIndex ? 'expanded' : ''}`}>{enquiry.answer}</p>
          </div>
          
          
        ))}
      </div>
      <section class="section about container">
      <div class="image-container">

      <Link to={`/PostForm`}><button class="post-button">Post Query</button></Link>


    <img class="about__img" src="./media/faqs_big.svg" alt="" />
  
    <h2 class="about-heading">Still have a doubt?<br></br> Go on, ask us!</h2>
  

  </div>
          
</section>

    </div>
  );
};

export default FAQ;