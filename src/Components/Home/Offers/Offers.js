import React from 'react';
import { faFlag, faDharmachakra, faAnchor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Offers.css';

const Offers = () => {
    return (
        <div className='container-fluid'>
            <div className='row offer-container d-flex align-items-center'>
                <div className="col-md-6 offers-text-area">
                    <h2 className="mb-4">Our Offers</h2>
                    <div className="row p-3">
                        <div className="col-md-4">
                            <FontAwesomeIcon className="icon mb-3" icon={faDharmachakra} size="4x"  />
                            <h4>Yacht Charters</h4>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon className="icon mb-3" icon={faFlag} size="4x"  />
                            <h4>Yacht Sales</h4>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon className="icon mb-3" icon={faAnchor} size="4x"  />
                            <h4>Yacht Management</h4>
                        </div>
                    </div>
                    <button className="btn btn-primary">Learn More</button>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    );
};

export default Offers;