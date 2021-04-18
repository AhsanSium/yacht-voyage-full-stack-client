import React from 'react';
import { faShip, faDharmachakra, faSwimmer, faFish, faCompass } from '@fortawesome/free-solid-svg-icons';
import ServicesCard from './ServicesCard';

const servicesData = [
    {
        name:'Sailing',
        description:'We offer an excellent way to learn the basics of boat sailing.',
        icon:faShip
    },
    {
        name:'Club',
        description:'Join our premier private yacht club in the Pacific ocean.',
        icon:faDharmachakra
    },
    {
        name:'Diving',
        description:'All our yachts are equipped with everything divers need.',
        icon:faSwimmer
    },
    {
        name:'Fishing',
        description:'Our yachts are built to explore untouched fishing grounds.',
        icon:faFish
    },
    {
        name:'Tours',
        description:'We offer you exclusive yacht tours with professional crew.',
        icon:faCompass
    },
]

const Services = () => {
    return (
        <div style={{backgroundColor:'#FAF6F1'}} className=''>
            <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-lg-5 p-2 w-100">
                {
                    servicesData.map(service => <ServicesCard service={service} ></ServicesCard> )
                }
            </div>

        </div>
    );
};

export default Services;