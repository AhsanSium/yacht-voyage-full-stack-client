import React from 'react';
import BoatImg from '../../../../images/PhotoshoppedLogo.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <div className='header-wrapper'>
            <div className='w-100 row d-flex align-items-center p-5'>
                <div className='col-md-7'>
                    <img src={BoatImg} alt="" className="img-fluid w-75"/>
                </div>
                <div className='col-md-5 text-start'>
                    <h1 className='fs-1'>Boats and Yachts Rental</h1>
                    <p>Experience the most incredible selection of Boats and Yachts Rentals Professionally crewed By High Quality Personal </p>
                    <button className='btn btn-info ps-5 pe-5'>Book Now!</button>
                </div>    
            </div>

        </div>
    );
};

export default HeaderMain;