import React from 'react';
import './Home.css';
import NavBar from './Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

function Home() {
  return (
    <div className="home-section" id='home'>
      {/* Navbar (fixed) */}
      <NavBar />

      {/* Background video */}
      <video className="background-video" autoPlay loop muted>
        <source src="src/back-video/12716-241674181_medium.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="overlay-text">
        <div className="about-text text-center text-white">
          <h1>
            <span className="intro-text d-inline-block">I'm a</span>
            <span className="main-text d-inline-block ps-3">FULL-STACK</span>
            <span className="dev-text d-block">DEVELOPER</span>
          </h1>

          {/* Buttons */}
          <div className="d-flex flex-column align-items-center gap-3 pt-4">
            <a
              href="#about"
              className="btn btn-outline-primary btn-lg fw-bold w-100 mb-3"
              style={{ maxWidth: '250px' }}
            >
              <FaUser size={22} className="me-2 text-info" />
              About Me
            </a>
            <a
              href="#contact"
              className="btn btn-outline-primary btn-lg fw-bold w-100"
              style={{ maxWidth: '250px' }}
            >
              <FaPhoneAlt size={22} className="me-2 text-info" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
