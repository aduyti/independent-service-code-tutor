import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomNavLink = ({ children, to }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({
        path: resolved.pathname,
        end: true
    });
    return (
        <Link className={`nav-item nav-link ${match ? "fw-bold text-primary" : "fw-normal text-dark"}`} to={to}>{children}</Link>
    );
};

export default CustomNavLink;