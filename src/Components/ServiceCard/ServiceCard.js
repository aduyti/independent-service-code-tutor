import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/solid';

const ServiceCard = ({ service }) => {
    const { id, name, image, price, description } = service;
    const navigate = useNavigate();
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start text-primary fw-bold">
                        Course Description
                    </Card.Text>
                    {
                        description.map(item =>
                            <Card.Text className="text-start mb-0" key={item}>
                                <CheckIcon style={{ width: '20px', height: '20px' }} /> {item}
                            </Card.Text>
                        )
                    }
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <strong className="text-primary">${price}</strong>
                    <Button variant="primary" onClick={() => navigate(`/checkout`)}>Book Now</Button>
                    {/* <Button variant="primary" onClick={() => navigate(`checkout/${id}`)}>Book Now</Button> */}
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServiceCard;