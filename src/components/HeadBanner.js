import React from 'react';
import bannerImage from './BlueBanner.svg';

function HeadBanner() {
    const bannerStyle = {
        width: '100%',
        height: '300px',
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
    };

    const textStyle = {
        color: '#fff',
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lineHeight: '2',
        display: 'block',
    };

    return (
        <div style={bannerStyle}>
            <h1 style={textStyle}>Task To Do App</h1>
            
        </div>
    );
}

export default HeadBanner;
