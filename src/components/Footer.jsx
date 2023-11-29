import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import image1 from "../images/app_store_badge.png"
import image2 from "../images/google_play_badge1.png"
import "./Footer.css"

function Footer() {
    const [data, setData] = useState([
        {
            heading: "Our Company",
            list1: "Our Community",
            list2: "Our History"
        },
        {
            heading: "Carrers",
            list1: "Corporate",
            list2: "Resturant"
        },
        {
            heading: "Contact us",
            list1: "Suggestion",
            list2: "Complaint"
        }, {
            heading: "Newsroom",
            list1: "Local",
            list2: ""
        }

    ])
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {data.map((item) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <ul className='d-flex flex-column gap-3 list-unstyled'>
                                    <li><b>{item.heading}</b></li>
                                    <li>{item.list1}</li>
                                    <li>{item.list2}</li>

                                </ul>
                            </div>
                        )
                    })}

                </div>
                <br />
                <div className='links'>
                    <div className='icons2'>
                        <a href='#'><FaFacebook /></a>
                        <a href='#'><FaInstagram /></a>
                        <a href='#'><FaTwitter /></a>
                        <a href='#'><FaLinkedin /></a>
                        <a href='#'><FaInstagram /></a>
                    </div>

                    <div>
                        <a href='#'><img src={image1} /> </a>
                        <a href='#'><img src={image2}/> </a>
                    </div>

                </div>
                <hr />
                <div class="footer">
                    <nav>
                        <a href="#">Contact</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </nav>
                    <span className="end-item">©2023 McDonald's. All Rights Reserveddd.</span>

                </div>

            </div>
        </div>
    )
}

export default Footer
