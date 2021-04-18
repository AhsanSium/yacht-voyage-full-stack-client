import React from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterMid from './FooterMid/FooterMid';
import FooterTop from './FooterTop/FooterTop';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <FooterTop></FooterTop>
            <FooterMid></FooterMid>
            <FooterBottom></FooterBottom>
        </footer>
    );
};

export default Footer;