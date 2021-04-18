import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../../App';

const Book = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { yachtId } = useParams();
    const [shippingData , setShippingData] = useState(null);
    
    const [yacht, setYacht] = useState({
        id: '',
        isLoading: false,
        data: {}
    });

    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const newYacht = { ...yacht };
        newYacht.isLoading = true;
        newYacht.id = yachtId;
        fetch('http://localhost:5000/yachtById/' + yachtId)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                newYacht.data = data;
                newYacht.isLoading = false;
                setYacht(newYacht);
            })
            .catch(err => {
                console.log(err);
            })

    }, [setYacht])


    const onSubmit = data => {
        setShippingData(data);
    };

    const handlePaymentSuccess = paymentId => {

        const product = {name:name,price:price};

        console.log(shippingData);
        const bookingDetails = {
            username:loggedInUser.name,
            email:loggedInUser.email,
            product:product,
            shipment:shippingData , 
            id:id, 
            orderTime:new Date(),
            paymentId:paymentId};
        // const orderDetails = {products:product.data, shipment:data, user:loggedInUser, orderTime:new Date(), email:loggedInUser.email};
        console.log(bookingDetails);
        fetch('http://localhost:5000/bookYacht', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Booking Placed');
                }
            })
            .catch(err=> {
                console.log(err);
            })
        };

    // const {bed, location, name, people, price, speed } = yacht&&yacht?.data;
    // console.log(yacht?.data.image.img);

    const id = yacht.data?._id;
    const bed = yacht.data?.bed;
    const location = yacht.data?.location;
    const name = yacht.data?.name;
    const people = yacht.data?.people;
    const price = yacht.data?.price;
    const speed = yacht.data?.speed;
    const image = yacht.data?.image?.img;

    return (
        <div className=''>
            <h3>Book Now</h3>
            <div className="">
                <img src={`data:image/jpeg;base64,${image}`} alt="" className="img-fluid w-50 rounded" />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Speed</th>
                            <th scope="col">People</th>
                            <th scope="col">Bed</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{location}</td>
                            <td>{speed}</td>
                            <td>{people}</td>
                            <td>{bed}</td>
                            <td>{price}</td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <div className='row'>
                <div style={{display: shippingData ? 'none' : 'block'}} className="col-md-6 mb-5 p-5 ms-3">
                    <h2>Your Shipment Info</h2>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder='E-mail' {...register("email", { required: true, maxLength: 20 })} />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text-area" className="form-control" id="inputAddress" placeholder="Main St"  {...register("address1", { required: true, maxLength: 20 })} />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Address 2</label>
                        <input type="text-area" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" {...register("address2", { required: true, maxLength: 20 })}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" placeholder='City' {...register("city", { required: true, maxLength: 20 })}/>
                    </div>
                    
                    <div className="col-md-6">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" placeholder='Zip' {...register("zip", { required: true, maxLength: 20 })}/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" {...register("check", { required: true, maxLength: 20 })}/>
                            <label className="form-check-label d-flex" for="gridCheck">
                                I Agree to the terms
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

                </div>
                
                {/* <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input {...register("email", { required: true, maxLength: 20 })} />
                    <input type="address" {...register("address")} />
                    <input type="submit" />
                </form> */}

                
                <div style={{display: shippingData ? 'block' : 'none'}} className="col-md-6 mb-5 p-2">
                    <h2>Make Payment</h2>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default Book;