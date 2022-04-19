import React, { useState } from 'react';
import './css/Resetpassword.css';
import resetPasswordImg from './images/kundan-bana-R0aRi3MYVVU-unsplash.jpg';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Resetpassword() {
  const [pwd, setPwd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const resetSubmit = () => {
    console.log(token);
    if (pwd === confirmPassword) {
      axios
        .put(
          `https://bikerental-portal.herokuapp.com/users/reset-password/${token}`,
          {
            password: pwd,
          }
        )
        .then((res) => {
          console.log(res);
          toast.success('Password reset successfully');
        })
        .catch((err) => console.log(err));
    } else {
      toast.warning('Password does not match.Kindly enter again');
    }
    setConfirmPassword('');
    setPwd('');
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <div className="resetpwd-total">
          <div>
            <img src={resetPasswordImg} className="resetpwd-image" />
          </div>
          <div className="resetpwd-content">
            <h1>RESET PASSWORD</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                resetSubmit();
              }}
            >
              <input
                type="password"
                name="password"
                value={pwd}
                placeholder="New password*"
                className="resetpwd-inputs"
                onChange={(e) => setPwd(e.target.value)}
                autoComplete="off"
                required
              />
              <input
                type="password"
                name="confirm_password"
                value={confirmPassword}
                placeholder="Confirm password*"
                className="resetpwd-inputs"
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off"
                required
              />
              <button className="resetpwd-button">RESET</button>
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
    </div>
  );
}
