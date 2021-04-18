import React from 'react';

const TestimonialCard = ({data}) => {
    return (
        <div className='col-lg-3 col-md-4  mt-4 border-bottom'>
            <div className="h-100">
                <img src={`data:image/jpeg;base64,${data.image.img}`} alt="" className="t-img"/>
                <div className="card-body">
                    <h5 className="card-title mt-3">{data.name}</h5>
                    <p className="card-text t-card-text"><br/>{data.description}</p>
                </div>
                <div className="card-footer">
                    <small>Rating: {data.rating}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;