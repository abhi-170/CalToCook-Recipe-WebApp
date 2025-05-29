import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaGooglePlusG } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
function Footer() {
    return (
        <>


            <div id="main" className="footer-main">
                <div id="about" className="footer-section">
                    <h1 className="footer-heading">About</h1>
                    <p className="footer-paragraph">
                        Welcome to CalToCook, Where Every Calorie Tells a Story!
                        We turn your cravings into healthy, delicious meals. Explore easy-to-follow recipes with calorie counts, cooking tips, and mouthwatering visuals. Whether you're a foodie or a fitness freak <br /><br /> — CalToCook helps you cook smarter, eat better, and live tastier!
                    </p>
                </div>

                <div id="features" className="footer-section">
                    <h1 className="footer-heading">With Us</h1>
                    <div id="images" className="image-gallery">
                        <div className="image-box"><a href="https://www.zomato.com/"><img src="/zomato.png" alt="zomato" /></a></div>
                        <div className="image-box"><a href="https://www.swiggy.com/restaurants"><img src="/swiggy.png" alt="swiggy" /></a></div>
                        <div className="image-box"><a href="https://online.kfc.co.in/"><img src="/kfc.png" alt="kfc" /></a></div>
                        <div className="image-box"><a href="https://www.bk.com/"><img src="/burgerKing.png" alt="burgerKing" /></a></div>
                        <div className="image-box"><a href="https://subway.in/"><img src="/subway.jpg" alt="subway" /></a></div>
                        <div className="image-box"><a href="https://www.mcdonalds.com/us/en-us.html"><img src="/mcd.png" alt="mcd" /></a></div>

                    </div>
                </div>

                <div id="tags" className="footer-section">
                    <h1 className="footer-heading">Tags</h1>
                    <div id="btn" className="tag-buttons">
                        <button className="tag-btn">Foods</button>
                        <button className="tag-btn">Recipe</button>
                        <button className="tag-btn">Pizza</button>
                        <button className="tag-btn">Burger</button>
                        <button className="tag-btn">Indian</button>
                        <button className="tag-btn">Asian</button>
                        <button className="tag-btn">Lunch</button>
                        <button className="tag-btn">Dinner</button>
                        <button className="tag-btn">Breakfast</button>
                    </div>
                </div>

                <div id="quicklink" className="footer-section">
                    <h1 className="footer-heading">Quick Links</h1>
                    <ul className="quick-links">
                        <li className="quick-link">About Us</li>
                        <li className="quick-link">Home</li>
                        <li className="quick-link">Contact Us</li>
                        <li className="quick-link">Privacy Policy</li>
                        <li className="quick-link">Get App Link</li>
                    </ul>
                </div>
            </div>

            <div id='lower' className='footer-lower'>
                <div id="copyright" className='footer-copyright'>
                    Copyright 2025 @ calToCook. All Rights Reserved.
                </div>
                <div id="socialApp" className='footer-social'>
                    <a className='footer-btn' href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a className='footer-btn' href="https://x.com/"><FaSquareXTwitter /></a>
                    <a className='footer-btn' href="https://www.youtube.com/"><TfiYoutube /></a>
                    <a className='footer-btn' href="https://www.google.com/"><FaGooglePlusG /></a>
                    <a className='footer-btn' href="https://www.pinterest.com/"><FaPinterest /></a>
                    <a className='footer-btn' href="https://www.instagram.com/"><TiSocialInstagram /></a>
                </div>
            </div>

        </>
    )
}

export default Footer