import React, { useState } from 'react';
import Navbar from './Navbar';
import './css/Bikespecs.css';
import titleBike1 from './images/ktm-duke390.webp';

export default function Bikespecs() {
  const [accessoriesItem, setAccessoriesItem] = useState(false);
  const [overviewItem, setOverviewItem] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="desc-mainwhole">
        <div className="desc-maincontent">
          <div className="desc-maincontentleft">
            <div className="desc-maincontentlefttop">
              <div>
                <div>
                  <h1>KTM, Duke390</h1>
                </div>
                <div>
                  <h2>
                    &#8377;12,000 <span>Per Day</span>
                  </h2>
                </div>
                <div className="desc-iconsleft">
                  <div className="desc-iconsleft1">
                    <div>
                      <i class="fa-solid fa-2x fa-calendar-days"></i>
                    </div>
                    <div>2012</div>
                    <div>Reg Year</div>
                  </div>
                  <div className="desc-iconsleft1">
                    <div>
                      <i class="fa-solid fa-2x fa-gears"></i>
                    </div>
                    <div>Petrol</div>
                    <div>Fuel Type</div>
                  </div>
                  <div className="desc-iconsleft1">
                    <div>
                      <i class="fa-solid fa-2x fa-user-plus"></i>
                    </div>
                    <div>2</div>
                    <div>Seats</div>
                  </div>
                </div>
              </div>
              <div>
                <img src={titleBike1} alt="" />
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
                    <p>
                      The Yamaha MT-15 naked bike features an all-LED headlamp
                      and tail lamp, whereas the indicators are bulbs. The LED
                      indicators are optional and available as an accessory for
                      Rs 1,490 a pair.
                    </p>
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
                        <td>
                          <i
                            class="fa-solid fa-check"
                            style={{ color: '#ff3333', fontSize: '18px' }}
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Smooth Handling</td>
                        <td>
                          <i
                            class="fa-solid fa-check"
                            style={{ color: '#ff3333', fontSize: '18px' }}
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Smooth Handling</td>
                        <td>
                          <i
                            class="fa-solid fa-check"
                            style={{ color: '#ff3333', fontSize: '18px' }}
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Smooth Handling</td>
                        <td>
                          <i
                            class="fa-solid fa-check"
                            style={{ color: '#ff3333', fontSize: '18px' }}
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Smooth Handling</td>
                        <td>
                          <i
                            class="fa-solid fa-check"
                            style={{ color: '#ff3333', fontSize: '18px' }}
                          ></i>
                        </td>
                      </tr>
                      <tr>
                        <td>Smooth Handling</td>
                        <td>
                          <i
                            class="fa-solid fa-check"
                            style={{ color: '#ff3333', fontSize: '18px' }}
                          ></i>
                        </td>
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
                <form className="bookform-submit">
                  <input
                    type="text"
                    placeholder="From Date (dd/mm/yyyy)"
                    required
                  />
                  <input
                    type="text"
                    placeholder="To Date (dd/mm/yyyy)"
                    required
                  />
                  <textarea name="message" placeholder="Message" required />
                  <button className="bookform-button">BOOK YOUR RIDE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
