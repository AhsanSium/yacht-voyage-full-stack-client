import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesCard = ({service}) => {
    return (
        <div className="col mt-2 border-start border-secondary ">
            <div className="h-100">
                <FontAwesomeIcon style={{color: 'Tomato'}} icon={service.icon} size="3x"  />
                    <div className="card-body text-center">
                        <h5 style={{color:'#125294'}} className="card-title">{service.name}</h5>
                        <p style={{color:'#2F5A69'}} className="card-text">{service.description}</p>
                    </div>
            </div>
        </div>    
    );
};

export default ServicesCard;