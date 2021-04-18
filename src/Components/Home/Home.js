import React from 'react';
import Footer from '../Shared/Footer/Footer';
import TopNav from '../Shared/TopNav/TopNav';
import Contact from './Contact/Contact';
import Count from './Count/Count';
import HeaderMain from './Header/HeaderMain/HeaderMain';
import Offers from './Offers/Offers';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Welcome from './Welcome/Welcome';
import YachtCollection from './YachtCollection/YachtCollection';

const Home = () => {
    return (
        <div>
            <TopNav></TopNav>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <Welcome></Welcome>
            <Count></Count>
            <YachtCollection></YachtCollection>
            <Offers></Offers>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;