import React from 'react'
import './About.css'
import about_image from '../images/aboutus.jpg'

function About() {
  return (
    <div className='about_us'>
<div>
    <img className='image_Design'src={about_image} alt="About Us!" />
</div>
<div className='text_item'>
    <h1> React Development is carried out by passionate Developers </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam iste cumque iure quia at amet commodi voluptate possimus officia! Cupiditate beatae sit praesentium ipsa cum asperiores eius commodi exercitationem? <br/><br/> Eius, cum soluta adipisci quasi nisi amet officiis omnis qui tempore corporis corrupti dolore, earum debitis doloremqu
    </p>
</div>
    </div>
  )
}

export default About