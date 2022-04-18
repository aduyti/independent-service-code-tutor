import React from 'react';
import Banner from '../../Components/Banner/Banner'
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import QASection from '../../Components/QASection/QASection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <QASection></QASection>
        </div>
    );
};

export default Home;