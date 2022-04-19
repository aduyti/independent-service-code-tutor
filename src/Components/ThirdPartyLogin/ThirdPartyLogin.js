import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const ThirdPartyLogin = ({ children }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <p className="text-center fw-bold fs-5 mb-1">or</p>
                <p className="text-primary text-center fw-bold fs-3">{children} with</p>
                {loading && <Loading />}
                {error && <p className="text-center text-danger">{error.message}</p>}

                <Button variant="outline-primary" className="fw-bold w-50 mx-auto d-block mb-1" onClick={() => signInWithGoogle()}>Google</Button>
            </div>
        </div>
    );
};

export default ThirdPartyLogin;