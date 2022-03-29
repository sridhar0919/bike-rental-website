import React from 'react';
import './css/Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="route-pages">
          <ul>
            <li>
              <a
                onClick={(e) => {
                  navigate('/');
                }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  navigate('/about');
                }}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  navigate('/bike-listing');
                }}
              >
                BIKE LISTING
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  navigate('/contact');
                }}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <form className="search-section">
          <button
            type="submit"
            onClick={(e) => {
              navigate('/bike-listing');
            }}
          >
            Book Now
          </button>
          {sessionStorage.getItem('logged_in') === 'yes' ? (
            <button
              type="submit"
              onClick={(e) => {
                sessionStorage.removeItem('logged_in');
                window.location.replace('/');
                navigate('/');
              }}
            >
              Logout
            </button>
          ) : (
            <button
              type="submit"
              onClick={(e) => {
                navigate('/login');
              }}
            >
              Login/Register
            </button>
          )}
        </form>
      </nav>
    </div>
  );
}
