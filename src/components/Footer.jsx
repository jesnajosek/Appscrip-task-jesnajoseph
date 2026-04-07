import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Ecom Platform</h3>
                    <p>Your one stop shop for amazing products at great prices. Discover quality everyday.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@ecom.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ecom. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
