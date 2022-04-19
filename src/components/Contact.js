import React, { useState } from 'react';
import Navbar from './Navbar';
import './css/Contact.css';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="title-contactdetails">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="form-content">
          <h2>Get In Touch</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setName('');
              setEmail('');
              setContactNo('');
              setMessage('');
              toast.success('Message sent');
            }}
          >
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Contact Number *"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
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
