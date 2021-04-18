import React from 'react';
import BoatImg from '../../../../images/realistic-cuise-liner-luxury-voyage_208581-416.jpg';
const HeaderMain = () => {
    return (
        <div className='bg-info'>
            <div className='container-fluid row d-flex align-items-center'>
                <div className='col-md-7 ps-5'>
                    <img src={BoatImg} alt="" className="img-fluid"/>
                </div>
                <div className='col-md-5 text-start'>
                    <h1 className='fs-1'>Boats and Yachts Rentals</h1>
                    <p>Experience the most incredible selection of Boats and Yachts Rentals Professionally crewed By High Quality Personal </p>
                    <button className='btn btn-primary'>Book Now!</button>
                </div>    
            </div>

        </div>
    );
};

export default HeaderMain;