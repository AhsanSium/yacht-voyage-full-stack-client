import React, { useEffect } from 'react';
import './Count.css';
import $ from 'jquery'; 




const Count = () => {
    
    useEffect(() => {
        $('.counter-count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    },[])
    

    return (
    <div className="counter p-5">

        <div className='row p-4'>
            <div className="col-md-3 p-2">
                <h2 className='counter-count'>4356</h2>
                <h5>YACHTS TO VIEW</h5>
            </div>
            <div className="col-md-3 p-2">
                <h2 className='counter-count'>102</h2>
                <h5>CHARTER DESTINATIONS</h5>
            </div>
            <div className="col-md-3 p-2">
                <h2 className='counter-count'>68</h2>
                <h5>YEARS IN BUSINESS</h5>
            </div>
            <div className="col-md-3 p-2">
                <h2 className='counter-count'>125</h2>
                <h5>YACHTS SOLD</h5>
            </div>
            
        </div>
    </div>
    );
};

export default Count;