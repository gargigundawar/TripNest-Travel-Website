import React from "react";
import BucketServices from "./../Services/BucketServices";
import styled from "styled-components";


const Buckets = styled.div`
.vaishubtn {
  background-color: #ec4e4e;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top:20px;
  margin-right:20px;
  margin-bottom:20px;
  background:linear-gradient(to right, rgb(255, 106, 0) , rgb(255, 42, 0));
}
`


class Bucket extends React.Component {
  handleAddToBucket = () => {
    const { tourid, email } = this.props;

    const bucketData = {
      tourId: tourid,
      email: email,
    };

    // Call the service to add to the bucket list
    BucketServices.addItem(bucketData)
      .then((response) => {
        alert("Added to bucket list:", response.data);
        // Handle any UI updates or notifications here
      })
      .catch((error) => {
        alert("Error adding to bucket list:", error);
      });
  };

  render() {
    return (
      <Buckets>
      <div >
        <button className="vaishubtn" onClick={this.handleAddToBucket}>Add to bucket list</button>
      </div>
      </Buckets>
    );
  }
}

export default Bucket;