import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" scale="1.1" style={{ scale: 55, height: '150px', width: '150px'}}>
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} src={brain} alt='logo'/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;