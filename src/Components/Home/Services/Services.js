import React from 'react';
import { faShip, faDharmachakra, faSwimmer, faFish, faCompass } from '@fortawesome/free-solid-svg-icons';
import ServicesCard from './ServicesCard';

const servicesData = [
    {
        id:1,
        name:'Sailing',
        description:'We offer an excellent way to learn the basics of boat sailing.',
        icon:faShip
    },
    {
        id:2,
        name:'Club',
        description:'Join our premier private yacht club in the Pacific ocean.',
        icon:faDharmachakra
    },
    {
        id:3,
        name:'Diving',
        description:'All our yachts are equipped with everything divers need.',
        icon:faSwimmer
    },
    {
        id:4,
        name:'Fishing',
        description:'Our yachts are built to explore untouched fishing grounds.',
        icon:faFish
    },
    {
        id:5,
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
                    servicesData.map(service => <ServicesCard key={service.id} service={service} ></ServicesCard> )
                }
            </div>

        </div>
    );
};

export default Services;