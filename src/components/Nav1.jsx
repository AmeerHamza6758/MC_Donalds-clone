import React from 'react';
// import './Nav1.css'

const Nav1 = () => {
  return (
    <div class="container">
        
        <div className='d-flex'>
        <a class="navbar-brand" href="#"><img src="https://mcdonalds.com.pk/wp-content/uploads/2022/06/McDonalds_Logo.png" /></a> 
    <div className='navfirst'>
              <ul className='nav1'>
            <li> <a href='#'>Careers </a></li>
            <li> <a href='#'>Contact US </a></li>
        </ul>
           
        <ul className='nav2'>
            <li> <a href='#'> Search </a></li>
            <li> <a href='#'>Locate Me </a></li>
            
        </ul>
      </div>
      
      
      <button class="btn btn-primary  rounded-0.5 d-flex text-black " style={{ backgroundColor: "#ffbc0d", color: "black", border: "none" }} type="submit">Order on McDelivery</button>
      </div>
      
      </div>
     );
}

export default Nav1;
