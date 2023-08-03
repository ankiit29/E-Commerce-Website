import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                        repellat ad magni dolor, autem cumque aut perferendis. Quaerat nobis
                        tenetur sint veritatis amet.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
                            amet!
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone No. 1234567890</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: ankityadav10291@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">HeadPhones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless EarBuds</span>
                    <span className="text">Home Theater</span>
                    <span className="text">Projectors</span>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms And Condition</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        JSDEVSTORE 2023 CREATED BY DEV. PREMIUM E-COMMERCE SOLUTIONS
                    </div>
                    <img src={Payment} alt="payment"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
