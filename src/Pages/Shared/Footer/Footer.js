import React from 'react';
import '../../HomeParent/Home/Home.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-link">
                    <img src={logo} alt="" />

                    <div className="links">
                        <Link>About Online Food</Link>
                        <Link>Read our blog</Link>
                        <Link>Signup to deliver</Link>
                        <Link>Add your restaurant</Link>
                    </div>

                    <div className="links">
                        <Link>Get help</Link>
                        <Link>Read FAQs</Link>
                        <Link>View all citiesss</Link>
                        <Link>Restaurant near me</Link>
                    </div>
                </div>

                <div className="copyright-privacy">
                    <p>Copyright &copy; {year} Onion Food</p>

                    <div className="privacy">
                        <Link>Privacy</Link>
                        <Link>Term of use</Link>
                        <Link>Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;