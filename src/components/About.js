import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './css/About.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="title-about">
        <h1>About Us</h1>
      </div>
      <div className="about-section">
        <h1>Get on and go!!</h1>
        <p>
          We are the bike rental manager. The only 100% dedicated bike rental
          booking website. The first Bike Rental Manager (BRM) shop was our own
          bike shop. Ever since it has been our aim to make bike rental easier
          for everyone, everywhere. We focus on making bike rentals easier for
          you. Your rental business has a unique set of challenges. We are the
          only dedicated bike rental site and will be able to offer you a
          solution to match your needs. Get in touch with us today! We provide
          affordable bike rates,we have lots of Satisfied customer feedback, you
          can have a look at our home page tool.
        </p>
      </div>
      <Footer />
    </div>
  );
}
