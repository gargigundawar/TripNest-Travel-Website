import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getFromLocalStorage } from "../Services/localStorageUtil";
import BucketService from "./../Services/BucketServices";
import TourService from "./../Services/TourServices";
import { GrCalendar, GrLocation, GrMoney, GrTrash } from 'react-icons/gr';
const BucketList = () => {
  const [bucketList, setBucketList] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userBucketList, setUserBucketList] = useState([]);

  useEffect(() => {
    const email = getFromLocalStorage("userEmail") || "";
    setUserEmail(email);

    BucketService.getItems()
      .then((response) => {
        const bucketListData = response.data;
        setBucketList(bucketListData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filteredBucketList = bucketList.filter((item) => item.email === userEmail);
    setUserBucketList(filteredBucketList);
  }, [userEmail, bucketList]);

  const handleDelete = (bucketId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tour?");
    if (confirmDelete) {
      BucketService.deleteItem(bucketId)
        .then(() => {
         
          setUserBucketList(prevList => prevList.filter(item => item.id !== bucketId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Page>
      <h1 className="heading1">My Bucket List</h1>
      <div className="star">
        <div className="bucket-list">
          {userBucketList.length === 0 ? (
            <p>You have not added any items to your bucket list yet.</p>
          ) : (
            userBucketList.map((item) => (
              <BucketListItem key={item.id} bucketItem={item} onDelete={() => handleDelete(item.id)} />
            ))
          )}
        </div>
      </div>
    </Page>
  );
};

const BucketListItem = ({ bucketItem, onDelete }) => {
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    TourService.getById(bucketItem.tourId)
      .then((response) => {
        const tourData = response.data;
        setTourData(tourData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bucketItem.tourId]);

  if (!tourData) {
    return <div></div>;
  }

  const { destination, price, url, tourId, date, days } = tourData;

  return (
    <BucketItems>
      <div className="division">
        <img src={url} className="image" alt={destination} />
        <h2 className="heading">{destination}</h2>
        <p className="date">Date: {date}</p>
       
        <p className="price">Price: {price}</p>
        <p className="days">Days: {days}</p>
        <button className="booknow">
          <Link to={`/booknow/${bucketItem.tourId}`} className="btn">
            Book Now
          </Link>
        </button>
        <button className="delete" onClick={onDelete}>
          <GrTrash id="gr" />
        </button>
      </div>
    </BucketItems>
  );
};

const BucketItems = styled.div`
  padding: 5px;
  margin: 50px 30px;
  width: auto;
  display: flex;
  justify-self: center;
  justify-content: center;
  border-radius: 40px;
  background: linear-gradient(to right,hsla(36, 100%, 80%, 1), hsla(36, 90%, 55%, 1));

  .division {
    display: flex;
    flex-direction: row;
    margin: 5px 15px;
    width: 1000px;
    padding: 5px;
    border-radius: 30px;
    background: #ffff;
    display: flex;
    background-color: var(--body_background);
    color: var(--body_color);
  }

  .image {
    height: 100px;
    width: 100px;
    border-radius: 30px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 0px;
    width: 20%;
    margin-left: 30px;
    margin-top: 30px;
  }

  p {
    margin: 0px 30px;
    margin-top: 38px;
  }

 .booknow {
    padding: 0px 0px;
    height: 35px;
    width: 100px;
    border: none;
    border-radius: 10px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: 30px;
    background:  hsla(36, 90%, 55%, 1);

    color: black;
  }

  

  .delete{
    border:none;
    height:30px;
    margin-top:35px;
    font-size:25px;
    margin-right:20px;
   
    
  }
 

  .btn {
    color: #ffff;
    text-decoration: none;
    font-weight:bold;
  }

  .booknow:hover{
    background:  hsla(36, 100%, 64%, 1);
  }
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;

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

export default BucketList;