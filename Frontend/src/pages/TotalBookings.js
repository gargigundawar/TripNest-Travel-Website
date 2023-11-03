import React, { useState, useEffect } from "react";
import BookingService from "./../Services/BookingServices";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope ,faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';


const Page = styled.div`
  margin-top:120px;

   .heading{
    font-family:times-newroman;
    display:flex;
    justify-content:center;
   }
   .link{
   color: hsla(39, 90%, 50%, 1);
   font-size:20px;
   }
   .link:hover {
    
   // text-decoration: underline;
    border-bottom: solid 3px hsla(39, 90%, 50%, 1); /* Add underline with specified color on hover */
  }
 
`;


const Table = styled.table`
  width: 100%;
  margin-top:40px;
  border-collapse: collapse;
  
`;

const Th = styled.th`
background-color: #13385b;
color:#ffff;
  padding: 12px;
  
`;

const Td = styled.td`
  padding: 12px;
  text-align: center;
`;

const Tr = styled.tr`
  background-color: ${props => props.even ? '#f2f2f2' : 'white'};
  background-color: var(--body_background);
  color: var(--body_color);
`;

const TotalBookings = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchTotalBookings(id);
  }, [id]);

  const fetchTotalBookings = (tourId) => {
    BookingService.getByTourid(tourId)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total bookings:", error);
      });
  };

  return (
    <Page>
       <Link to="/Adminpage"  className="link" id="logout">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back
              </Link>
      <h2 class="heading">Total Bookings for Tour ID: {id}</h2>
      <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            
            <Th>Email</Th>
            <Th>Mobile No</Th>
            <Th>Address</Th>
            <Th>Adhar No</Th>
            <Th>No. of Guests</Th>
            <Th>Total Price</Th>
            {/* Add other fields as needed */}
          </Tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <Tr key={booking.id} even={index % 2 === 0}>
              <Td>{booking.id}</Td>
              
              <Td>{booking.email}</Td>
              <Td>{booking.mobno}</Td>
              <Td>{booking.address}</Td>
              <Td>{booking.adharno}</Td>
              <Td>{booking.guests}</Td>
              <Td>{booking.totalprice}</Td>
              {/* Add other fields as needed */}
            </Tr>
          ))}
        </tbody>
      </Table>
      </Page>
  );
};

export default TotalBookings;
