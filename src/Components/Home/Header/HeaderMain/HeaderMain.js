import React from 'react';
import BoatImg from '../../../../images/ship.png';
const HeaderMain = () => {
    return (
        <div className='' style={{backgroundColor:'#fff1ad78'}}>
            <div className='container-md row d-flex align-items-center p-5'>
                <div className='col-md-7'>
                    <img src={BoatImg} alt="" className="img-fluid w-75"/>
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