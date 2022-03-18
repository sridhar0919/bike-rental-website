import React from 'react';
import './css/Homepage.css';
import Footer from './Footer';
import navImage from './images/kirill-petropavlov-f_gCjlNcVWo-unsplash.jpg';
import Navbar from './Navbar';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="image-section">
        <img src={navImage} alt="nav"></img>
        <div>
          <h1>FIND YOUR PERFECT BIKE</h1>
          <p>We have some amazing bikes for you to choose.</p>
          <button type="submit">Book Now</button>
        </div>
      </div>
      <div className="home-content">
        <div className="content-first">
          <p>
            <span>Find the Best</span>&nbsp;Bike For You
          </p>
          <p>
            You will be able to fully enjoy your holiday and your ride! Any
            problems? Our passionate team will be happy to help you!! No waste
            of time during your holidays to find a rental point on the spot! No
            language barrier, thanks to our multilingual team! At the same price
            you would pay on the spot! At the same price you would pay on the
            spot! We have best bikes with best deals.
          </p>
        </div>
        <div className="content-second">
          <div className="second-inside">
            <div className="first-adv">
              <p>
                <i class="fa-solid fa-3x fa-calendar-days"></i>
              </p>
              <p>40+</p>
              <p>Years In Business</p>
            </div>
            <div className="first-adv">
              <p>
                <i class="fa-solid fa-3x fa-motorcycle"></i>
              </p>
              <p>1000+</p>
              <p>New Bikes For Sale</p>
            </div>
            <div className="first-adv">
              <p>
                <i class="fa-solid fa-3x fa-motorcycle"></i>
              </p>
              <p>999+</p>
              <p>Used Bikes For Sale</p>
            </div>
            <div className="first-adv">
              <p>
                <i class="fa-solid fa-3x fa-circle-user"></i>
              </p>
              <p>850+</p>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
