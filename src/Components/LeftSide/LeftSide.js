import React from 'react';
import './LeftSide.css'
import leftSide from '../../img/Frame1.png'

const LeftSide = () => {
    return (
        <div>
            <img className='img-sizer' src={leftSide} alt="" />
        </div>
    );
};

export default LeftSide;