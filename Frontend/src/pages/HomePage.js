import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../components/Footer";
import TourService from "../Services/TourServices";
import CouponService from "../Services/CouponService";

const HomePage = () => {

  const [lastEntry, setLastEntry] = useState(null);
  const [lastSecEntry, setLastSecEntry] = useState(null);
  const [lastThirdEntry, setLastThirdEntry] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await TourService.getItems();
      const sortedItems = response.data.sort((a, b) => b.bookings - a.bookings);
      setItems(sortedItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await CouponService.getItems(); // Use the getItems method from TourService to fetch data
      const data = response.data;
      const lastEntry = data[data.length - 1];
      const lastSecEntry = data[data.length - 2];
      const lastThirdEntry = data[data.length - 3];
      setLastEntry(lastEntry);
      setLastSecEntry(lastSecEntry);
      setLastThirdEntry(lastThirdEntry);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  const getStarted = () => {

    window.scrollTo({
      top: 700,
      behavior: 'smooth'
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <main className="main" id="main">
        <section className="section hero">
          <div
            className="hero__video-container"
            style={{ width: '100%', height: 'auto', position: 'relative', overflow: 'hidden' }}
          >
            <video className="hero__video" autoPlay muted loop style={{ width: '100%', height: 'auto', objectFit: 'cover' }}>
              <source src="/media/v1.mp4" type="video/mp4" />
              {/* Your browser does not support the video tag. */}
            </video>
          </div>

          <div className="hero__content" style={{ textAlign: 'center', color: '#fff', zIndex: 1, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1 className="hero__title" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Explore the World <br />
              just one Click
            </h1>

            <button onClick={getStarted} className="button button-hero" style={{ fontSize: '1.5rem', padding: '1rem 2rem', backgroundColor: '#ffffff', color: '#333333', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Get Started
            </button>
          </div>
        </section>

        <section className="section tour container">
          <h3 className="section-title">Popular Tour</h3>
          {items.slice(0, 6).map((item) => (
            <div className="tour__container" key={item.id}>
              <div className="tour__card">
                <img src={item.url} alt={item.name} className="tour__card-img" />
                <div className="tour__data">
                  <h5 className="tour__data-title">{item.destination}</h5>
                </div>
                <Link to={`/booknow/${item.id}`} className="tour__link"></Link>
              </div>
            </div>
          ))};



        </section>


        <section className="section discount-slider container">
          <h3 className="section-title">Discount Coupon</h3>
          <div className="discount-slider__container">
            <Slider {...sliderSettings}>
              <div className="discount-slide">
                <div className="discount-info">
                  <span className="discount-info__text">{lastEntry && <p>{lastEntry.discount}%</p>}</span>
                  <span className="discount-info__subtext">Hurry Up!!! </span>
                  <span className="discount-info__text">{lastEntry && <p>{lastEntry.coupon}</p>}</span>
                </div>
                <img src="/media/Rajasthan.jpg" alt="Discount Slide 1" />
              </div>
              <div className="discount-slide">
                <div className="discount-info">
                  <span className="discount-info__text">{lastSecEntry && <p>{lastSecEntry.discount}%</p>}</span>
                  <span className="discount-info__subtext">Grab the offer </span>
                  <span className="discount-info__text">{lastSecEntry && <p>{lastSecEntry.coupon}</p>}</span>
                </div>
                <img src="/media/Kerala.jpg" alt="Discount Slide 2" />
              </div>
              <div className="discount-slide">
                <div className="discount-info">
                  <span className="discount-info__text">{lastThirdEntry && <p>{lastThirdEntry .discount}%</p>}</span>
                  <span className="discount-info__subtext"> Off on our latest tours</span>
                  <span className="discount-info__text">{lastThirdEntry && <p>{lastThirdEntry.coupon}</p>}</span>
                </div>
                <img src="/media/kedarnath.jpg" alt="Discount Slide 3" />
              </div>
            </Slider>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .discount-slide {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
        }
        
        .discount-info {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 10px;
          border-radius: 5px;
          color: red;
          font-weight: bold;
          text-align: center;
          z-index: 1;
          animation: bounce 1s infinite;
        }
        
        .discount-info__text {
          font-size: 2rem;
          font-family: 'Roboto', sans-serif;
        }
        
        .discount-info__subtext {
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
        }
        
        
        @keyframes bounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        
      `}</style>
    </>
  );
};

export default HomePage;