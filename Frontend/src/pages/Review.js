import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import ReviewService from "../Services/ReviewService";
import Footer from "../components/Footer";



const Box = styled.div`
  //margin-top: -70px;
  display: flex;
  justify-content: center;
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url('/media/bgpic2.jpg');
  margin-bottom:-220px;

  img {
    margin-top:120px;
    height:600px;
    margin-bottom:50px;
  }

  button {
    border: none;
    color: #ffff;
    padding: 10px;
    border-radius: 20px;
    margin: 10px;
    width: 150px;
    background:linear-gradient(to right, rgb(255, 106, 0) , rgb(255, 42, 0));
  }

  button:hover {
    background:linear-gradient(to right, rgb(255, 110, 0) , rgb(255, 110, 0));
  }

  h3 {
    margin: 10px;
    padding: 10px;
  }
`;

const FeedbackForm = styled.form`
  margin-top: 120px;
  padding: 50px;
 // padding-top: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height:600px;
  background:rgba(255, 255, 255, 0.1);
  justify-content:center;

  textarea {
    margin-top: 50px;
    padding:20px;
    font-family:poppins;
    margin-left: 0px;
    margin-bottom: 0px;
    border-radius: 20px;
    width: 300px;
    height: 150px;
    background:rgba(255, 255, 255, 0.7);
  }

  .feedback {
    padding: 10px;
    position: absolute;
    font-size:1.2rem;
    font-weight:bold;
    margin-left:60px;
    
  }

  button{
    margin-left:75px;
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  padding: 20px;
  margin-left:10px;
`;

const EmojiWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  padding: 0px;
`;

const Emoji = styled.span`
  font-size: 3rem;
`;

const StarIcon = styled(FaStar)`
  cursor: pointer;
  font-size: 3rem;
  color: ${(props) => (props.filled ? "#FFD700" : "#ffff")};
  &:hover {
    color: #ffd700;
  }
`;

const Reviews = () => {
  const { destination } = useParams();
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const emojis = ["😞", "😐", "😊", "😄", "😃"];


  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0]; 
    const ratingValue = rating * 2; // Convert number of stars to rating value

    const reviewData = {
      destination: destination,
      feedback: feedback,
      date: currentDate,
      rating: ratingValue,
    };

    try {
      await ReviewService.addItem(reviewData); // Send the data to the backend
      alert("Review added successfully:", reviewData);
    } catch (error) {
      alert("Error adding review:", error);
    }
  };


  return (
    <div>
    <Box>
        <img src="/media/bgpic1.jpg"></img>
      <FeedbackForm onSubmit={handleSubmit}>
        {/* <h3>Destination: {destination}</h3> */}
        <EmojiWrapper>
          <Emoji role="img" aria-label="emoji">
            {rating > 0 ? emojis[rating - 1] : null}
          </Emoji>
        </EmojiWrapper>
        <div>
          <StarRating>
            {/* <label>Rating : </label> */}
            <br />
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                filled={rating >= index + 1}
                onClick={() => setRating(index + 1)}
              />
            ))}
          </StarRating>

          <label className="feedback">Your Feedback</label>
          <textarea
            rows="4"
            cols="50"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Feedback</button>
      </FeedbackForm>
      
    </Box>
    <Footer></Footer>
    </div>
  );

};


export default Reviews;