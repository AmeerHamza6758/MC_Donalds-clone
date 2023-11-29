import React, { useState } from 'react';
import './Footer.css'
import image from '../images/HamzaLogo.png';
import { Link } from 'react-router-dom';
// import Data from './footer/Data'

const Footer = () => {
    const [footerList, setFooterList] = useState([
        {
            heading: "Resources",
            listItem1: "Home",
            listItem2: "Contact Us"
        },
        {
            heading: "Follow Us",
            listItem1: "GitHub",
            listItem2: "FaceBook"
        },
        {
            heading: "Legal",
            listItem1: "Privacy Policy",
            listItem2: "Terms & Conditions"
        }
    ]);

    return (
        <div className='footer' >
            <div className='footerDesign'>
                <div className='image_logo'>
                    <Link to=""><img src={image} alt="" /></Link>
                </div>

                <div className='footerList'>
                    {footerList.map((item, index) => (
                        <div key={index}>
                            <Link className='footerHead'>{item.heading}</Link>

                            <Link to='#'>{item.listItem1}</Link>

                            <Link t0='#'>{item.listItem2}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bottom'>
            <div className='bottom_footer'>
                <div className=''>
                    <p>&copy;Ameer Hamza All right reserved 2023.</p>
                </div>
                <div className='bottom_icons'>
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-discord-fill"></i>
                    <i class="ri-github-fill"></i>
                    <i class="ri-whatsapp-fill"></i>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;
