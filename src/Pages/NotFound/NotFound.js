import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/outline';

const NotFound = () => {
    return (
        <div className="container my-5">
            <h1 className="text-danger">404</h1>
            <h1>Page Not Found</h1>
            <EmojiSadIcon className="text-warning" style={{ width: '40px', height: '40px' }} />

        </div>
    );
};

export default NotFound;