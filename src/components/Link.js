import React from 'react';

const Link = ({ href, children }) => {
    return (
        <a href={ href } className="link">
            { children }
        </a>
    );
}

export default Link;