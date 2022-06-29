import React from 'react';
import LeftSide from '../LeftSide/LeftSide';


const Home = () => {
    return (
        <div className='d-flex'>
            <div className='left-pic'>
                <LeftSide></LeftSide>
            </div>
            <div className='container'>
                <div >
                    <p className='d-flex align-items-end justify-content-end'>Already have an account? <span className='text-primary'> Sign In</span></p>
                </div>
                <div className=''>
                kbh
                </div>
            </div>
        </div>
    );
};

export default Home;