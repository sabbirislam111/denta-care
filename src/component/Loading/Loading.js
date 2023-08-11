import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex justify-center">
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;