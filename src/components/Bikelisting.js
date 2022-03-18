import React from 'react';
import './css/Bikelisting.css';
import Navbar from './Navbar';
import Footer from './Footer';
import recentBike1 from './images/yamaha-r15.webp';
import recentBike2 from './images/ktm-duke390.webp';
import recentBike3 from './images/suzuki-gixxer.webp';
import mainBike1 from './images/yamaha-yzf-r15.webp';
import { useNavigate } from 'react-router-dom';

export default function Bikelisting() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="title-bikelisting">
        <h1>Bike Listing</h1>
      </div>
      <div className="bikelisting-main">
        <div>
          <div className="search-bikes">
            <h3>
              <i class="fa-solid fa-filter" style={{ color: '#ff3333' }}></i>{' '}
              Find Your Bike
            </h3>
            <form className="search-form">
              <select className="bike-option">
                <option>Select Brand</option>
                <option value="ktm">KTM</option>
                <option value="bajaj">Bajaj</option>
                <option value="honda">Honda</option>
                <option value="suzuki">Suzuki</option>
                <option value="yamaha">Yamaha</option>
                <option value="ducati">Ducati</option>
              </select>
              <select className="fuel-option">
                <option>Select Fuel Type</option>
                <option value="ktm">Petrol</option>
                <option value="bajaj">Diesel</option>
                <option value="honda">CNG</option>
              </select>
              <button className="bikesearch-button">
                <i class="fa-solid fa-magnifying-glass"></i>&nbsp;Search Bike
              </button>
            </form>
          </div>
          <div className="recentlylisted-bikes">
            <h3>
              <i
                class="fa-solid fa-motorcycle"
                style={{ color: '#ff3333' }}
              ></i>{' '}
              Recently Listed Bikes
            </h3>
            <div className="bike-listshort">
              <div className="bike-contentshort">
                <div>
                  <img src={recentBike1} alt="" />
                </div>
                <div>
                  <h4>Yamaha, R15</h4>
                  <p>&#8377;10,000 Per Day</p>
                </div>
              </div>
              <div className="bike-contentshort">
                <div>
                  <img src={recentBike2} alt="" />
                </div>
                <div>
                  <h4>KTM, Duke390</h4>
                  <p>&#8377;15,000 Per Day</p>
                </div>
              </div>
              <div className="bike-contentshort">
                <div>
                  <img src={recentBike3} alt="" />
                </div>
                <div>
                  <h4>Suzuki, Gixxer</h4>
                  <p>&#8377;8,000 Per Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bikelist-full">
          <div className="listing-bikes">
            <h4>5 Listings</h4>
          </div>
          <div className="bikelist-main">
            <div className="bikelistcontent-main">
              <div className="bikelist-mainimg">
                <img src={mainBike1} alt="" />
              </div>
              <div className="bikelist-maindetails">
                <a>
                  <h2>Yamaha, YZF-R15</h2>
                </a>
                <p>&#8377;12,000 Per Day</p>
                <div className="bikelist-detailsspecs">
                  <div className="specs-fulldetails">
                    <p>
                      <i class="fa-solid fa-user"></i>&nbsp;2 seats
                    </p>
                  </div>
                  <div className="specs-fulldetails">
                    <p>
                      <i class="fa-solid fa-calendar-days"></i>&nbsp;2015 model
                    </p>
                  </div>
                  <div className="specs-fulldetails">
                    <p>
                      <i class="fa-solid fa-motorcycle"></i>&nbsp;Petrol
                    </p>
                  </div>
                </div>
                <button
                  className="bikesearch-button"
                  onClick={(e) => {
                    navigate('/bike-specs');
                  }}
                >
                  View Details&nbsp;<i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
            <div className="bikelistcontent-main">
              <div className="bikelist-mainimg">
                <img src={mainBike1} alt="" />
              </div>
              <div className="bikelist-maindetails">
                <a>
                  <h2>Yamaha, YZF-R15</h2>
                </a>
                <p>&#8377;12,000 Per Day</p>
                <div className="bikelist-detailsspecs">
                  <div className="specs-fulldetails">
                    <p>
                      <i class="fa-solid fa-user"></i>&nbsp;2 seats
                    </p>
                  </div>
                  <div className="specs-fulldetails">
                    <p>
                      <i class="fa-solid fa-calendar-days"></i>&nbsp;2015 model
                    </p>
                  </div>
                  <div className="specs-fulldetails">
                    <p>
                      <i class="fa-solid fa-motorcycle"></i>&nbsp;Petrol
                    </p>
                  </div>
                </div>
                <button className="bikesearch-button">
                  View Details&nbsp;<i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
