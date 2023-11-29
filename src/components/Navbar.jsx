import React from 'react';
import MacLogo from '../images/McDonalds_Logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav__bar">
    <img
      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://mcdonalds.com.pk/wp-content/uploads/2022/06/McDonalds_Logo.png"
      alt=""
    />
    <div className="nav__links">
      <div className="top__links">
        <div className="navbar_links">
          <a href="@" className="link">
            Careers
          </a>
          <a href="@" className="link">
            Contact Us
          </a>
        </div>
        <div className="btns">
          <a href="@" className="link">
            <i className="ri-search-2-line" />
            Search
          </a>
          <a href="@" className="link">
            <i className="ri-map-pin-fill" />
            Locate Me
          </a>

        </div>
      </div>
      <div className="bottom__links">
        <div className="navbar_links">
          <a href="@" className="link">
            Our Menu
          </a>
          <a href="@" className="link">
            About Our Food
          </a>
          <a href="@" className="link">
            Your Right To Know
          </a>
          <a href="@" className="link">
            Our App
          </a>
          <a href="@" className="link">
            Family
          </a>
          <a href="@" className="link">
            Trending Now
          </a>
        </div>
      </div>
    </div>
    <div>
    <a href="@" className="btn link">
            Order on deliver
          </a>
    </div>
  </nav>
  
     );
}

export default Navbar;
