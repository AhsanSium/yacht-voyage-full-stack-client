import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
    
        <div className='container-fluid'>
            <div className='row welcome-container d-flex align-items-center'>
                <div className="col-sm-5">
                    
                </div>
                <div className="col-sm-7 text-container">
                    <div className='text-area'>
                        <h2>Welcome!</h2>
                        <p>We charter professionally crewed, luxury yachts throughout the Caribbean <br/> from the British Virgin Islands (BVI) to the Grenadines!</p>
                        <button className="btn btn-primary">VIEW SPECIAL OFFERS</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;