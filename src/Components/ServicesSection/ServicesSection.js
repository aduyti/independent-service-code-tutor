import React from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService.js';
import ServicesCard from '../ServiceCard/ServiceCard';

const ServicesSection = () => {
    const [services] = useService();
    return (
        <div className="container my-3">
            <h1 className="text-primary">My Services</h1>
            <CardGroup>
                <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                    {
                        services.length && services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                    }
                </Row>
            </CardGroup>
        </div>
    );
};

export default ServicesSection;