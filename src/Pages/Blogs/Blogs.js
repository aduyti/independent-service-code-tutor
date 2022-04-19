import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto p-3">
            <div className="border border-3 rounded border-primary w-75 mx-auto p-3 my-3">
                <h3>Difference between authorization and authentication</h3>
                <p>Authentication is about validating persons credentials like User Name, User ID and password to verify their identity.While authorization is the process of granting permission to access a person in some particular places. Authentication means confirming users own identity, while authorization means granting access to the specified space. Authentication is the process of verifying person, authorization is the process of verifying the accessibility of the person.</p>
            </div>
            <div className="border border-3 rounded border-primary w-75 mx-auto p-3 my-3">
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase provides user a secure and easy access to database, authentication, hosting and so on. using firebase user can do authentication and access database through the client side code.
                    <br />
                    there are quite a few options available alternative to firebase. Such as : Auth0, Okta, Amazon congnito, backendless, keycloak .
                </p>
            </div>
            <div className="border border-3 rounded border-primary w-75 mx-auto p-3 my-3">
                <h3>What other services does firebase provide other than authentication</h3>
                <p>Cloud Firestore,
                    Cloud Functions,
                    Hosting,
                    Cloud Storage,
                    Google Analytics,
                    Predictions,
                    Cloud Messaging,
                    Dynamic Links,
                    Remote Config
                </p>
            </div>

        </div>
    );
};

export default Blogs;