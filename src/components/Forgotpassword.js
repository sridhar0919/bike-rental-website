import React, { useState } from 'react';
import './css/Forgotpassword.css';
import forgotPasswordImg from './images/kundan-bana-GRhrtoaWDNg-unsplash.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Forgotpassword() {
  const [emailId, setEmailId] = useState(null);
  const navigate = useNavigate();

  const sendLink = (e) => {
    axios
      .put('https://bike-rental-m3qg.onrender.com/users/forgot-password/', {
        email: emailId,
      })
      .then((res) => {
        console.log(res);
        setEmailId('');
      })
      .catch((err) => console.log(err));
    toast.success('Reset password link successfully');
    e.preventDefault();
  };
  return (
    <div>
      <div className="forgotpwd-total">
        <ToastContainer />
        <div>
          <img src={forgotPasswordImg} className="forgotpwd-image" />
        </div>
        <div className="forgotpwd-content">
          <h1>FORGOT PASSWORD</h1>
          <form onSubmit={sendLink}>
            <input
              type="email"
              name="email_id"
              value={emailId}
              placeholder="Email address*"
              className="forgotpwd-inputs"
              autoComplete="off"
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
            <button className="forgotpwd-button">SEND LINK</button>
            <p className="forgotpwd-para">
              Back to Login!!&nbsp;
              <a
                className="forgotpwd-link"
                onClick={(e) => {
                  navigate('/login');
                }}
              >
                LOGIN
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
