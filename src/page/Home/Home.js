import React from 'react';
import AddReviews from '../../Components/AddReviews/AddReviews';
import Contacts from '../../Components/Contacts/Contacts';
import Count from '../../Components/Count/Count';
import SecondBanner from '../../Components/SecondBanner/SecondBanner';
import Services from '../../Components/Services/Services';
import SummarySlides from '../../Components/SummarySlide/SummarySlides';

const Home = () => {
    return (
        <div>
            <SecondBanner></SecondBanner>
            <SummarySlides></SummarySlides>
            <Count></Count>
            <Services></Services>
            <AddReviews></AddReviews>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;