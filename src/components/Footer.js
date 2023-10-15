import React from 'react';
import '../styling/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} PlanPal</p>
            {/* Add any other footer content here */}
        </footer>
    );
};

export default Footer;
