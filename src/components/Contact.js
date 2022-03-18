import React from 'react';
import Navbar from './Navbar';
import './css/Contact.css';
import Footer from './Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="title-contactdetails">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="form-content">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="Name *" required />
            <input type="text" placeholder="Email *" required />
            <input type="tel" placeholder="Contact Number *" required />
            <textarea name="message" placeholder="Message" required />
            <button className="message-button">Send Message</button>
          </form>
        </div>
        <div className="details-rightcontent">
          <h2>Contact Us</h2>
          <div className="details-full">
            <p>
              <span>
                <i class="fa-solid fa-location-dot"></i>&nbsp;Address:&nbsp;
              </span>
              53, Periyar Layout, Anna Nagar, Chennai-600040
            </p>
          </div>
          <div className="details-full">
            <p>
              <span>
                <i class="fa-solid fa-phone"></i>&nbsp;Phone:&nbsp;
              </span>
              (044) 24781432
            </p>
          </div>
          <div className="details-full">
            <p>
              <span>
                <i class="fa-solid fa-envelope-open"></i>&nbsp;Email:&nbsp;
              </span>
              bikerentalchennai@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
