import React from 'react';
import { Image } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container my-5 d-flex flex-wrap justify-content-between">
            <div style={{ width: '400px' }} className="mx-auto order-1 order-lg-0 my-auto">
                <h1 className="text-secondary">Anirudhya Duyti</h1>
                <p style={{ textAlign: 'justify' }} className="text-primary">I am an JavaScript developer with some MERN stack knowledge. I wish to be a Full Stack Web Developer and get a full time job according to my expertise.
                    My current goal is to get accepted as an intern in a foreign company. </p>
            </div>
            <div style={{ width: '300px' }} className="mx-auto order-0 order-lg-1">
                <Image fluid src="https://static.vecteezy.com/system/resources/previews/005/228/939/large_2x/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-black-color-illustration-flat-style-image-vector.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;