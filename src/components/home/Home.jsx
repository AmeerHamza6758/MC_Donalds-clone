import React from 'react';
import './Home.css'
import img1 from '../images/Remote1.png'
import img2 from '../images/Remote2.png'

const Home = () => {
  return (
    <div >
      <div className='homeDesign'>
        <div>
          <div className='imageDesign'>
            <img src={img1} alt="Logo Here" />
          </div>
        </div>
        <div className='text'>
          <span> Do you want my Resume?</span>
          <button> Download Now!</button>
        </div> </div>
      <div className='homeDesign_bottom'>
        <div>
          <div className='text_bottom'>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem obcaecati nostrum molestiae et iure doloremque voluptatum qui dolore possimus aut laboriosam inventore recusandae unde, dignissimos suscipit quibusdam, corporis voluptatibus?</p>
          </div>
        </div>
        <div className='imageDesign'>
          <img src={img2} alt='second image' />
        </div>
      </div>
    </div>
  );
}

export default Home;
