import React from 'react';
import { Accordion } from 'react-bootstrap';

const QASection = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-primary my-3">Frequently Asked Questions</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How the lectures are given?</Accordion.Header>
                    <Accordion.Body>
                        All live classes are taken through Zoom. And pre-recorded classes and class materials will shared through Google Drive.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What about class size?</Accordion.Header>
                    <Accordion.Body>
                        Usually there are five to ten students per class.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default QASection;