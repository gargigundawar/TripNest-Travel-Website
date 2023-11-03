import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewService from "../Services/ReviewService";
import { FaStar, FaSearch, FaFilter } from "react-icons/fa";
import TourServices from "../Services/TourServices";



const Page = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sort{
    margin-top:30px;
  }
  .tours{
    color:#ffff;
    margin-top:200px;
    margin-left:50px;
    
  }
  .bookings{
    color:#ffff;
    margin-top:-70px;
    position:absolute;
    margin-left:50px;
  }
  .travel{
    color:#ffff;
   // margin-top:-230px;
    position:absolute;
    font-size:30px;
    margin-bottom:180px;
    margin-left:50px;
  }
  .tourpara{
    font-size:30px;
    color:#ffff;
    margin-top:100px;
    margin-bottom:0px;
    margin-left:50px;
    position:absolute;
  }

  


`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 30px;
  margin: 20px;
  width: 400px;
  height: 450px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  p {
   margin-top: 15px;
   height:240px;
  }
  .date {
    color: grey;

    
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const Emoji = styled.span`
  font-size: 24px;
`;

const StarIcon = styled(FaStar)`
  font-size: 20px;
  color: ${(props) => (props.filled ? "#FFD700" : "#ccc")};
`;

const HeroReview = styled.div`
  width: 100%;
  height: 55vh;
  background-image:url(/media/banner3.jpg);
  display: flex;
  background-size: cover;
   align-items: center;
//   justify-content: center;

  img{
    margin-top:25px;
    height:320px;
    margin-left:1100px;
    border-radius:50%;
    width:370px;
    margin-bottom:-10px;
    position:absolute;
 
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: left;
  background-color: #ffff;
  padding: 5px;
  border-radius: 20px;
  margin-left: 350px;
  width:330px;
  position:absolute;
  

`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 20px;
  width: 250px;
  margin-left: 30px;
  font-size:18px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 33px;
  color: #ccc;
  margin-left: 700px;
  margin-right: 5px;
  position:absolute;

  cursor: pointer;
  &:hover {
    color: #ffff;
  }

`;



const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [lastEntry, setLastEntry] = useState(null);
  const [totalBookings, setTotalBookings] = useState(null);


 
  const reviewsPerPage = 9;

 
  useEffect(() => {
    fetchData();
   
  }, []);


  const closeFilterPopup = () => {
    setIsFilterOpen(false);
  };
  const fetchDataBookings = async () => {
    try {
      const response = await TourServices.getItems(); // Use the getItems method from TourService to fetch data
      const data = response.data;
  
      // Calculate the sum of bookings for all tours
      const totalBookings = data.reduce((sum, tour) => sum + tour.bookings, 0);
  
      setTotalBookings(totalBookings); // Update the state with the sum of bookings
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataBookings();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await TourServices.getItems(); // Use the getItems method from TourService to fetch data
      const data = response.data;
      const maxId = Math.max(...data.map(item => item.id)); // Extract the maximum ID from the data
      setLastEntry(maxId);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleSearchClick = () => {
    const filteredResults = reviews.filter((review) =>
      review.destination.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredReviews(filteredResults);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText); // Update the search text state
  };

  useEffect(() => {
    fetchReviews();
  }, [sortOption]);

  useEffect(() => {
    // Sort reviews based on the selected sorting option
    if (sortOption === "newest") {
      setFilteredReviews([...filteredReviews].sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else if (sortOption === "oldest") {
      setFilteredReviews([...filteredReviews].sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
  }, [sortOption, filteredReviews]);

  const fetchReviews = async () => {
    try {
      const response = await ReviewService.getItems();
      setReviews(response.data);
      setFilteredReviews(response.data); // Initialize filteredReviews with all reviews
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const paginateReviews = () => {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return filteredReviews.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const emojis = ["😞", "😐", "😊", "😄", "😃"];

  return (
    <Page>
      <HeroReview>
        
        
     <div class="count"></div>
      <p class="tourpara">Tours</p>
      <h1 class="bookings">{totalBookings}</h1>
      <br></br>
      <p class="travel">Happy Travellers</p>
      <h1 class="tours">{lastEntry}</h1>
      
     
        <SearchBar>
        
          <SearchInput
            type="text"
            placeholder="Search by destination"
            onChange={handleSearch}
            value={searchText}
          />
         
        </SearchBar>
        <SearchIcon
            onClick={handleSearchClick}
            style={{ color: "#ccc", cursor: "pointer" }}
          />


        <img src="https://img.freepik.com/premium-photo/indian-asian-family-enjoying-beach-summer_466689-23029.jpg?w=996"></img>
      </HeroReview>
      <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "20px" }}>
        <div onClick={() => setIsFilterOpen(!isFilterOpen)} style={{ cursor: "pointer" }} class="sort">
          <span class="sort">Sort</span>
          <FaFilter style={{ marginLeft: "5px", fontSize: "20px", margintop: "50px" }} />
        </div>
        {isFilterOpen && (
          <div style={{ position: "absolute", marginTop: "10px", backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "5px", padding: "5px" }}>
            <div>
              <label>
                <input
                  type="radio"
                  name="sortFilter"
                  value="newest"
                  onChange={() => { setSortOption("newest"); closeFilterPopup(); }}
                  checked={sortOption === "newest"}
                />
                Newest to Oldest
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="sortFilter"
                  value="oldest"
                  onChange={() => { setSortOption("oldest"); closeFilterPopup(); }}
                  checked={sortOption === "oldest"}
                />
                Oldest to Newest
              </label>
            </div>
          </div>
        )}
      </div>

      <CardContainer>
        {paginateReviews().map((review) => (
          <Card key={review.id}>
            <h4>Destination: {review.destination}</h4>
            <RatingWrapper>
              Rating: {[...Array(review.rating / 2)].map((_, index) => (
                <StarIcon key={index} filled={true} />
              ))}
              <Emoji>{emojis[review.rating / 2 - 1]}</Emoji>
            </RatingWrapper>
            <p>Feedback: {review.feedback}</p>
            <p className="date">Date: {review.date}</p>
          </Card>
        ))}
      </CardContainer>

      {/* Pagination Buttons */}
      <div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </Page>
  );
};

export default ReviewsPage;
