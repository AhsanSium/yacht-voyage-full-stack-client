import React, { useEffect, useState } from 'react';
import clientImg from '../../../images/client.jpg';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import './Testimonials.css';

// const testimonialsData = [
//     {
//         img:clientImg,
//         name:'Demo',
//         description:'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.',
//         rating:5
//     },
//     {
//         img:clientImg,
//         name:'Demo',
//         description:'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.',
//         rating:5
//     },
//     {
//         img:clientImg,
//         name:'Demo',
//         description:'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.',
//         rating:5
//     },
//     {
//         img:clientImg,
//         name:'Demo',
//         description:'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.',
//         rating:5
//     },
// ]

const Testimonials = () => {

    const [testimonialsData, setTestimonialsData] = useState([]);
    useEffect(() => {

        fetch('https://yacht-voyage-server.onrender.com/customer-reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonialsData(data);
                //console.log(data);
            })
            .catch(err => {
                //console.log(err);
            });
    }, [])

    return (
        <div className='p-3 pt-5 pb-5' style={{ backgroundColor: '#00d4ff8c' }}>
            <h2> Customer Review </h2>
            <div className='row p-2 mt-5'>
                {
                    testimonialsData.map(data => <TestimonialCard key={data._id} data={data}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;