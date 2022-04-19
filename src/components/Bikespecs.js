import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './css/Bikespecs.css';
import titleBike1 from './images/ktm-duke390.webp';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Bikespecs() {
  const [accessoriesItem, setAccessoriesItem] = useState(false);
  const [overviewItem, setOverviewItem] = useState(true);
  const [currentBike, setCurrentBike] = useState(null);
  const [loginForm, setLoginForm] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { brand } = useParams();

  const [vehicle, setVehicle] = useSearchParams();

  const bookRideSubmit = () => {
    if (sessionStorage.getItem('logged_in') === 'yes') {
      displayRazorPay(currentBike.rentAmountPerDay);
      setStartDate('');
      setEndDate('');
      setMessage('');
    } else {
      toast.error('Login to book your ride!!');
    }
  };

  const getCurrentBike = () => {
    const vehicleName = vehicle.get('vehicle');
    axios
      .get(
        `https://bikerental-portal.herokuapp.com/get-currentbike/${brand}?vehicle=${vehicleName}`
      )
      .then((res) => {
        setCurrentBike(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displayRazorPay = async (totalPayment) => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    axios
      .post('https://bikerental-portal.herokuapp.com/create/orderId', {
        amount: totalPayment * 100,
      })
      .then((res) => {
        console.log(res.data.orderId);
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: totalPayment * 100,
          currency: 'INR',
          name: 'Bike Rental',
          description: 'Thank you for using Bike Rental!',
          image: 'https://example.com/your_logo',
          order_id: res.data.orderId,
          handler: function (response) {
            // alert(`response.razorpay_payment_id`);
            alert('Ride booked successfully');
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            navigate('/');
          },
          prefill: {
            name: 'Sridhar',
            email: 'sridhar@example.com',
            contact: '9999999999',
          },
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
  };

  useEffect(() => {
    getCurrentBike();
  });

  return (
    <div>
      <ToastContainer />
      <Navbar />
      {currentBike && (
        <div className="desc-mainwhole">
          <div className="desc-maincontent">
            <div className="desc-maincontentleft">
              <div className="desc-maincontentlefttop">
                <div>
                  <div>
                    <h1>{currentBike.title}</h1>
                  </div>
                  <div>
                    <h2>
                      &#8377;{currentBike.rentAmountPerDay} <span>Per Day</span>
                    </h2>
                  </div>
                  <div className="desc-iconsleft">
                    <div className="desc-iconsleft1">
                      <div>
                        <i class="fa-solid fa-2x fa-calendar-days"></i>
                      </div>
                      <div>{currentBike.yearOfModel}</div>
                      <div>Reg Year</div>
                    </div>
                    <div className="desc-iconsleft1">
                      <div>
                        <i class="fa-solid fa-2x fa-gears"></i>
                      </div>
                      <div>{currentBike.fuelType}</div>
                      <div>Fuel Type</div>
                    </div>
                    <div className="desc-iconsleft1">
                      <div>
                        <i class="fa-solid fa-2x fa-user-plus"></i>
                      </div>
                      <div>{currentBike.noOfSeats}</div>
                      <div>Seats</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={currentBike.imageUrl} alt="" />
                </div>
              </div>
              <div className="totalbelowcontent">
                <div className="desc-contentbelow">
                  <div className="desc-contentbelowtitle">
                    <div
                      className="belowtitle1"
                      style={
                        overviewItem
                          ? { backgroundColor: '#ff3333', color: 'white' }
                          : { backgroundColor: '#e5e4e2', color: 'black' }
                      }
                      onClick={(e) => {
                        setOverviewItem(!overviewItem);
                        setAccessoriesItem(!accessoriesItem);
                      }}
                    >
                      <p>Vehicle Overview</p>
                    </div>
                    <div
                      className="belowtitle1"
                      style={
                        accessoriesItem
                          ? { backgroundColor: '#ff3333', color: 'white' }
                          : { backgroundColor: '#e5e4e2', color: 'black' }
                      }
                      onClick={(e) => {
                        setOverviewItem(!overviewItem);
                        setAccessoriesItem(!accessoriesItem);
                      }}
                    >
                      <p>Accessories</p>
                    </div>
                  </div>
                  <div className="desc-contentbelowfull">
                    <div
                      className={
                        overviewItem
                          ? 'descabout-contentactive'
                          : 'descabout-content'
                      }
                    >
                      <p>{currentBike.overview}</p>
                    </div>
                    <div
                      className={
                        accessoriesItem
                          ? 'accessories-contentactive'
                          : 'accessories-content'
                      }
                    >
                      <table style={{ width: '100%' }}>
                        <tr>
                          <th>ACCESSORIES</th>
                          <th></th>
                        </tr>
                        <tr>
                          <td>Antilock Braking System</td>
                          {currentBike.accessories[0].antiLockBraking ==
                          'Yes' ? (
                            <td>
                              <i
                                class="fa-solid fa-check"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          ) : (
                            <td>
                              <i
                                class="fa-solid fa-xmark"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Smooth Handling</td>
                          {currentBike.accessories[0].smoothHandling ==
                          'Yes' ? (
                            <td>
                              <i
                                class="fa-solid fa-check"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          ) : (
                            <td>
                              <i
                                class="fa-solid fa-xmark"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Leather Seats</td>
                          {currentBike.accessories[0].leatherSeats === 'Yes' ? (
                            <td>
                              <i
                                class="fa-solid fa-check"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          ) : (
                            <td>
                              <i
                                class="fa-solid fa-xmark"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Central Locking</td>
                          {currentBike.accessories[0].centralLocking ===
                          'Yes' ? (
                            <td>
                              <i
                                class="fa-solid fa-check"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          ) : (
                            <td>
                              <i
                                class="fa-solid fa-xmark"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Brake Assist</td>
                          {currentBike.accessories[0].brakeAssist === 'Yes' ? (
                            <td>
                              <i
                                class="fa-solid fa-check"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          ) : (
                            <td>
                              <i
                                class="fa-solid fa-xmark"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Crash Sensor</td>
                          {currentBike.accessories[0].crashSensor === 'Yes' ? (
                            <td>
                              <i
                                class="fa-solid fa-check"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          ) : (
                            <td>
                              <i
                                class="fa-solid fa-xmark"
                                style={{ color: '#ff3333', fontSize: '18px' }}
                              ></i>
                            </td>
                          )}
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="booking-form">
                  <h3>
                    <i
                      class="fa-solid fa-envelope"
                      style={{ color: '#ff3333' }}
                    ></i>
                    &nbsp;Book Now
                  </h3>
                  <form
                    className="bookform-submit"
                    onSubmit={(e) => {
                      e.preventDefault();
                      bookRideSubmit();
                    }}
                  >
                    <input
                      type="text"
                      placeholder="From Date (dd/mm/yyyy)"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="To Date (dd/mm/yyyy)"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    <button className="bookform-button">BOOK YOUR RIDE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
