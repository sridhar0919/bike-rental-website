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
          <input type="text" id="search" name="search" placeholder="Search" />
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </nav>
    </div>
  );
}
