import React from 'react';
import { Link } from 'react-router-dom';

const YachtCard = ({yacht}) => {
    return (
        <div className="col-md-6  mt-2 ">

                   
        <div className="card h-100">
        <Link className="nav-link" to={`/yachtBooking/${yacht._id}`}>
                <img src={`data:image/jpeg;base64,${yacht.image.img}`} alt="" className="card-img"/>
                    <div className="card-body text-center">
                        <h5 style={{color:'#125294'}} className="card-title">{yacht.name}</h5>
                        <p style={{color:'#2F5A69'}} className="card-text">${yacht.price}/Week</p>
                        <p style={{color:'#2F5A69'}} className="card-text">{yacht.location}</p>
                    </div>
                    <div className="card-footer row">
                         <div className="col-sm-4">{yacht.speed} Knots</div>
                         <div className="col-sm-4">{yacht.people}</div>
                         <div className="col-sm-4">{yacht.bed}</div>
                    </div>
                    
            </Link>
            </div>

        </div>
    );
};

export default YachtCard;