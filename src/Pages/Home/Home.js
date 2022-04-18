import React from 'react';
import Banner from '../../Components/Banner/Banner'
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import QA from '../../Components/QA/QA';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <QA></QA>
        </div>
    );
};

export default Home;