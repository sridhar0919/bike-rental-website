import React, { useEffect, useState } from 'react';
import './css/Bikelisting.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import recentBike1 from './images/yamaha-r15.webp';
import recentBike2 from './images/ktm-duke390.webp';
import recentBike3 from './images/suzuki-gixxer.webp';
import mainBike1 from './images/yamaha-yzf-r15.webp';
import { useNavigate } from 'react-router-dom';

export default function Bikelisting() {
  const navigate = useNavigate();
  const [homeBikes, setHomeBikes] = useState(null);
  const [brand, setBrand] = useState(null);
  const [brandBikes, setBrandBikes] = useState(null);

  const getHomeBikes = () => {
    axios
      .get('https://bikerental-portal.herokuapp.com/get-homebikes/')
      .then((res) => {
        setHomeBikes(res.data);
      })
      .catch((err) => console.log(err));
  };

  const searchBrandSubmit = (e) => {
    e.preventDefault();
    setHomeBikes(null);
    axios
      .get(`https://bikerental-portal.herokuapp.com/get-bike/${brand}`)
      .then((res) => {
        setBrandBikes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHomeBikes();
  }, []);
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
            <form className="search-form" onSubmit={searchBrandSubmit}>
              <select
                className="bike-option"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              >
                <option>Select Brand</option>
                <option value="KTM">KTM</option>
                <option value="Bajaj">Bajaj</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Ducati">Ducati</option>
              </select>
              <select className="fuel-option" required>
                <option>Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
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
            <h4>Available Bike Models</h4>
          </div>
          <div className="bikelist-main">
            {homeBikes &&
              homeBikes.map((menu, index) => {
                return (
                  <div className="bikelistcontent-main" key={index}>
                    <div className="bikelist-mainimg">
                      <img src={menu.imageUrl} alt="" />
                    </div>
                    <div className="bikelist-maindetails">
                      <a>
                        <h2>{menu.title}</h2>
                      </a>
                      <p>&#8377;{menu.rentAmountPerDay} Per Day</p>
                      <div className="bikelist-detailsspecs">
                        <div className="specs-fulldetails">
                          <p>
                            <i class="fa-solid fa-user"></i>&nbsp;
                            {menu.noOfSeats} seats
                          </p>
                        </div>
                        <div className="specs-fulldetails">
                          <p>
                            <i class="fa-solid fa-calendar-days"></i>&nbsp;
                            {menu.yearOfModel}
                            model
                          </p>
                        </div>
                        <div className="specs-fulldetails">
                          <p>
                            <i class="fa-solid fa-motorcycle"></i>&nbsp;
                            {menu.fuelType}
                          </p>
                        </div>
                      </div>
                      <button
                        className="bikesearch-button"
                        onClick={(e) => {
                          navigate(
                            `/bike-specs/${menu.title.split(',')[0]}?vehicle=${
                              menu.title
                            }`
                          );
                        }}
                      >
                        View Details&nbsp;
                        <i class="fa-solid fa-angles-right"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            {brandBikes &&
              brandBikes.map((menu, index) => {
                return (
                  <div className="bikelistcontent-main" key={index}>
                    <div className="bikelist-mainimg">
                      <img src={menu.imageUrl} alt="" />
                    </div>
                    <div className="bikelist-maindetails">
                      <a>
                        <h2>{menu.title}</h2>
                      </a>
                      <p>&#8377;{menu.rentAmountPerDay} Per Day</p>
                      <div className="bikelist-detailsspecs">
                        <div className="specs-fulldetails">
                          <p>
                            <i class="fa-solid fa-user"></i>&nbsp;
                            {menu.noOfSeats} seats
                          </p>
                        </div>
                        <div className="specs-fulldetails">
                          <p>
                            <i class="fa-solid fa-calendar-days"></i>&nbsp;
                            {menu.yearOfModel}
                            model
                          </p>
                        </div>
                        <div className="specs-fulldetails">
                          <p>
                            <i class="fa-solid fa-motorcycle"></i>&nbsp;
                            {menu.fuelType}
                          </p>
                        </div>
                      </div>
                      <button
                        className="bikesearch-button"
                        onClick={(e) => {
                          navigate(
                            `/bike-specs/${menu.title.split(',')[0]}?vehicle=${
                              menu.title
                            }`
                          );
                        }}
                      >
                        View Details&nbsp;
                        <i class="fa-solid fa-angles-right"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
