import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./TravelGuidelines.css"; // Link to your CSS file for styling

const TravelGuidelines = () => {
  return (
    <>
      <Header />
      

      <main className="travel-guidelines">
        <section className="guideline-section">
          {/* <br />
          <br />
          <br />
        <h1 className="tripnest-heading">TripNest</h1> */}
          <div className="guideline-content">
            <div className="guideline-text">
              <h1 className="guideline-title">Travel Guidelines</h1>
              <p className="guideline-intro">
                <strong>Travel Guidelines 2023</strong>
                <br />
                In the year 2020, the entire world faced an unprecedented situation with the outbreak of the pandemic. Many travel restrictions were imposed by various state and central governments of countries around the world. Many of these regulations are in place now and it is our duty as responsible citizens to abide by them.
                <br />
                <br />
                We request all guests to abide by the mandatory requirements for travel to the destination, such as RT-PCR tests, web check-in, self-declaration, e-pass formalities etc. as per the state/country, which are subject to change periodically. Any cost incurred for such requirements should be borne by the guests.
              </p>
            </div>
            <div className="guideline-image">
              <img src="./media/Guidlines.jpg" alt="Travel Guidelines" />
            </div>
          </div>
        </section>
        

        <section className="guideline-section">
        <h2 className="guideline-heading">Guests must ensure the following:</h2>
        <br />
          <div className="guideline-points">
            <div className="guideline-point">
              <div className="guideline-point-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="guideline-point-content">
                <h3 className="guideline-point-title">Covid Test</h3>
                <p>If testing for COVID-19 is a travel requirement for entry to the state/country, the guests will have to take the specified test (72/96 hours prior) and carry the test reports, which must be valid at the time of entry as per the state/country guidelines. In case the result of the COVID-19 test is positive prior to thetour, guest will not be able to join the said tour. Get in touch with travel advisor for alternate solution.</p>
              </div>
            </div>

            <div className="guideline-point">
              <div className="guideline-point-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="guideline-point-content">
                <h3 className="guideline-point-title">Self-Health Declaration</h3>
                <p>If Self-Health Declaration is a travel requirement then kindly fill-in the same.</p>
              </div>
            </div>

            <div className="guideline-point">
              <div className="guideline-point-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="guideline-point-content">
                <h3 className="guideline-point-title">Arogya Setu App</h3>
                <p>It is advisable to download and register your details on the Aarogya Setu App which should be presented to the said officials if asked for. A green status on your Aarogya Setu App is required for travel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="guideline-section">
          <div className="guideline-points">
            <div className="guideline-point">
              <div className="guideline-point-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="guideline-point-content">
                <h3 className="guideline-point-title">Safety</h3>
                <p>Adhere to safety guidelines as outlined by Hotels/Airlines/Associates/sightseeing places. It is mandatory to use a mask and carry hand sanitizer at all times while on tour</p>
              </div>
            </div>

            <div className="guideline-point">
              <div className="guideline-point-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="guideline-point-content">
                <h3 className="guideline-point-title">Hygiene</h3>
                <p>Social distancing should be followed stringently at all times. Maintaining personal hygiene is a must at all times during the tour.</p>
              </div>
            </div>

            <div className="guideline-point">
              <div className="guideline-point-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="guideline-point-content">
                <h3 className="guideline-point-title">Precautions</h3>
                <p>Intimation to respective representative, Tour Manager or Travel advisor is must, if you observe any symptoms related to COVID-19, so necessary precautions can be taken to avoid further spread.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections if needed */}
      </main>

      <Footer />
    </>
  );
};

export default TravelGuidelines;