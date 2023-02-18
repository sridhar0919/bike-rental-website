import React, { useState } from 'react';
import './css/Signup.css';
import signupImage from './images/sahaj-patel-xHSCvcFoHaQ-unsplash.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const createUser = (e) => {
    if (password === confirmPassword) {
      axios
        .post('https://bike-rental-m3qg.onrender.com/users/register/', {
          email: emailId,
          fullname: fullName,
          mobile_number: mobileNumber,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.message === 'User already exists') {
            toast.error('User already exists!');
          } else {
            setFullName('');
            setMobileNumber('');
            setEmailId('');
            setPassword('');
            setConfirmPassword('');
            toast.success(
              'Verification email sent. Kindly click the link to activate the account'
            );
          }
        })
        .catch((error) => console.log(error));
    }
    setFullName('');
    setEmailId('');
    setMobileNumber('');
    setPassword('');
    setConfirmPassword('');

    e.preventDefault();
  };
  return (
    <div className="signup-total">
      <ToastContainer />
      <div>
        <img src={signupImage} className="signup-image" />
      </div>
      <div className="signupform-content">
        <h1>SIGN UP</h1>
        <form onSubmit={createUser}>
          <input
            type="text"
            name="fullname"
            value={fullName}
            placeholder="Full Name*"
            className="signup-inputs"
            autoComplete="off"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="tel"
            name="mobile_number"
            value={mobileNumber}
            placeholder="Mobile Number*"
            className="signup-inputs"
            autoComplete="off"
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <input
            type="email"
            name="email_id"
            value={emailId}
            placeholder="Email address*"
            className="signup-inputs"
            autoComplete="off"
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password*"
            className="signup-inputs"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
          <input
            type="password"
            name="confirm_password"
            value={confirmPassword}
            placeholder="Confirm Password*"
            className="signup-inputs"
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
            required
          />
          <button className="signup-button">SIGN UP</button>
          <p className="signup-para">
            Already got an account?&nbsp;
            <a
              className="signup-link"
              onClick={(e) => {
                navigate('/login');
              }}
            >
              Login Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
