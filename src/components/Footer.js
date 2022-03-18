import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <div className="main-third">
      <div className="content-third">
        <div>
          <h3>Locations</h3>
          <div className="total-location">
            <div>
              <p>53, Periyar Layout, Anna Nagar, Chennai-600040</p>
            </div>
            <div>
              <p>588, Nehru Street, Electronic City, Bangalore-560100</p>
            </div>
            <div>
              <p>97, Ambedkar Street, Ashok Nagar, Vijayawada-502355</p>
            </div>
          </div>
        </div>
        <div className="contact-detail">
          <h3>Contact</h3>
          <div className="details-con">
            <p>
              <i class="fa-solid  fa-envelope"></i>{' '}
              &nbsp;bikerentalchennai@gmail.com
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>&nbsp; (044) 24781432
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>&nbsp; (080) 35554555
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright&nbsp;&#169;&nbsp;2022 Bike Rental Portal
      </p>
    </div>
  );
}
