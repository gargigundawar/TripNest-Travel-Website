import React, { useEffect, useState } from "react";
// import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css"; // Link to your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faBinoculars } from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    id: 1,
    name: "Vaishnavi Rode",
    imageSrc: "./media/vaishnavi.jpg",
    description: "Student of Mechanical Engineering.\n\n Currently Persuing B.Tech from MIT Academy Of Engineering, Alandi Pune",
  },
  {
    id: 2,
    name: "Prithviraj Gorule",
    imageSrc: "./media/Prithviraj.jpg",
    description: "Student of Computer Science Engineering.\n\n Currently Persuing B.Tech from MIT Academy Of Engineering, Alandi Pune.",
  },
  {
    id: 3,
    name: "Sanika Mungase",
    imageSrc: "./media/Sanika.jpg",
    description: "Student of Electronics and Telecommunication Engineering.\n\n Currently Persuing B.Tech from MIT Academy Of Engineering, Alandi Pune.",
  },
  {
    id: 4,
    name: "Gargi Gundawar",
    imageSrc: "./media/Gargi.jpg",
    description: "Student of Electronics and Telecommunication Engineering.\n\n Currently Persuing B.Tech from MIT Academy Of Engineering, Alandi Pune.",
  },
  // Add more team members as needed
];

  const About = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setFadeIn(true);
      }, 300);
  
      return () => clearTimeout(timeout);
    }, []);
  
    // Add a new state to track whether the team members are visible
    const [teamMembersVisible, setTeamMembersVisible] = useState(false);
  
    useEffect(() => {
      // Set the team members to be visible after the fade-in animation completes
      if (fadeIn) {
        setTeamMembersVisible(true);
      }
    }, [fadeIn]);

  return (
    <>
      <Header />
      <main className="main" id="main">
        <section
          className="section about-hero"
          id="hero"
          style={{ backgroundImage: 'url(./media/bg-about.jpg)' }}
        >
          <h1 className="hero__title">About Us</h1>
        </section>

        <section className="section about">
          <div className="about__container">
            <div className="about__text">
              <h2 className="section__title">Welcome to TripNest</h2>
              <p className="about__description">
                At TripNest, we believe in creating memorable travel experiences
                that connect people with diverse cultures and breathtaking landscapes.
                Our mission is to make every journey a cherished memory, fostering
                a lifelong love for exploration.
              </p>
            </div>
            <div className="about__img-container">
              <img className="about__img" src="./media/about-image.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="section mission">
          <div className="mission__container">
            <h2 className="section_title">Our Mission <FontAwesomeIcon icon={faBullseye} className="mission_icon" /></h2>
            <p className="mission__text">
              We are committed to providing unforgettable travel experiences
              that connect people with diverse cultures and breathtaking
              landscapes. Our mission is to make every journey a cherished
              memory, fostering a lifelong love for exploration.
            </p>
          </div>
        </section>

        <section className="section vision">
          <div className="vision__container">
            <h2 className="section_title">Our Vision <FontAwesomeIcon icon={faBinoculars} className="vision_icon" /></h2>
            <p className="vision__text">
              Our vision is to become the leading provider of transformative
              travel experiences that inspire personal growth and global
              understanding. We aim to create a world where travel transcends
              boundaries and enriches lives.
            </p>
          </div>
        </section>

        <section className="section team">
        <h2 className="section__title">Our Team</h2>
        <div className="team__members">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`team__member ${fadeIn ? "fade-in" : ""} ${teamMembersVisible ? "visible" : ""}`}
            >
              <img
                className="team__member-image"
                src={member.imageSrc}
                alt={member.name}
              />
              <p className="team__member-name">{member.name}</p>
              <p className="team__member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default About;