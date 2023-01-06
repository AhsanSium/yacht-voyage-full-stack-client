import React, { useEffect, useState } from 'react';
import yachtImg1 from '../../../images/arno-senoner-JSjdBEAJnCc-unsplash.jpg';
import yachtImg2 from '../../../images/alina-kacharho-86wR5GZJZdQ-unsplash.jpg';
import yachtImg3 from '../../../images/chuttersnap-MxuJykvWgw0-unsplash.jpg';
import YachtCard from './YachtCard/YachtCard';
import './YachtCollection.css';

// const yachtData = [
//     {
//         img:yachtImg1,
//         name: 'Aquavita',
//         price: 9500,
//         location: 'FLORIDA/NEW ENGLAND',
//         speed:36,
//         people:10,
//         bed:4
//     },
//     {
//         img: yachtImg2,
//         name: 'Axioma',
//         price:4500,
//         location: 'CENTRAL AMERICA',
//         speed:42,
//         people:10,
//         bed:4
//     },
//     {
//         img: yachtImg3,
//         name: 'Eureka',
//         price:4500,
//         location: 'CENTRAL AMERICA',
//         speed:42,
//         people:10,
//         bed:4
//     },
//     // {
//     //     img:,
//     //     name: '',
//     //     price:,
//     //     location: '',
//     //     speed:,
//     //     people:,
//     //     bed:
//     // },
//     // {
//     //     img:,
//     //     name: '',
//     //     price:,
//     //     location: '',
//     //     speed:,
//     //     people:,
//     //     bed:
//     // },
//     // {
//     //     img:,
//     //     name: '',
//     //     price:,
//     //     location: '',
//     //     speed:,
//     //     people:,
//     //     bed:
//     // },
//     // {
//     //     img:,
//     //     name: '',
//     //     price:,
//     //     location: '',
//     //     speed:,
//     //     people:,
//     //     bed:
//     // },
//     // {
//     //     img:,
//     //     name: '',
//     //     price:,
//     //     location: '',
//     //     speed:,
//     //     people:,
//     //     bed:
//     // },
//     // {
//     //     img:,
//     //     name: '',
//     //     price:,
//     //     location: '',
//     //     speed:,
//     //     people:,
//     //     bed:
//     // },
// ]

const YachtCollection = () => {

    const [yacht, setYacht] = useState({
        loading: false,
        data: null
    });

    useEffect(() => {
        setYacht({ loading: true })
        fetch('https://yacht-voyage-server.onrender.com/yachts')
            .then(res => res.json())
            .then(data => {
                setYacht({ loading: false, data });
                //console.log(data);
            })
            .catch(err => {
                //console.log(err);
            });

    }, [])

    return (
        <div className='yacht-wrapper'>
            <div className='container-fluid'>
                <h2>Yachts for Charter</h2>
                <div className="row p-5 yacht-content">
                    {
                        yacht.loading ? <h3 className='text-center text-warning'>Loading Data</h3> :
                            yacht.data?.map(singleYacht => <YachtCard key={singleYacht._id} yacht={singleYacht}></YachtCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default YachtCollection;