import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './css/Verifyuser.css';
import verifyUserImg from './images/kundan-bana-GRhrtoaWDNg-unsplash.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Verifyuser() {
  const { token } = useParams();

  const verifySubmit = () => {
    axios
      .get(
        `https://bikerental-portal.herokuapp.com/users/verify-email/${token}`
      )
      .then((res) => {
        console.log(res);
        toast.success('Email Verified. Account activated successfully');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Link expires');
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="verifyemail-total">
        <div>
          <img src={verifyUserImg} className="verifyemail-image" />
        </div>
        <div className="verifyemail-content">
          <h1>VERIFY EMAIL</h1>
          <h4>Welcome to Bike Rental !!</h4>
          <h4>
            Please click the button below to confirm your email address and
            activate your account.
          </h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifySubmit();
            }}
          >
            <button className="verifyemail-button">SEND LINK</button>
            <p className="verifyemail-para">
              Back to Login!!&nbsp;
              <a href="/login" className="verifyemail-link">
                LOGIN
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
