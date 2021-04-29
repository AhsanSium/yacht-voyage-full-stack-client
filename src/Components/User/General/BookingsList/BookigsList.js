import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import BookingTable from './BookingTable';

const BookigsList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [bookings, setBookings] = useState({
        loading: false,
        data: null,
    });



    


    useEffect(()=>{
        setBookings({loading: true});
        fetch('https://quiet-journey-44427.herokuapp.com/bookings?email='+loggedInUser.email, {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(bookings);
            setBookings({loading:false, data:data})
        });
    },[])

    const {id} = useParams();

    return (
        <div className='row'>
            <h3>Bookings List</h3>
            <h3>This is Bookings:  {bookings[0]?.email}</h3>
            {
                console.log(bookings)
            }
            <table className="table">
                    {
                        console.log(bookings?.data)
                    }
                    <thead>
                        <tr>
                            <th scope="col">UserName</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        bookings.loading === true
                        ? <h4>Loading Data</h4>:

                        <tbody>

                        {
                            bookings.data?.map(booking => <BookingTable key={booking._id} booking={booking}  ></BookingTable> )
                        }

                        </tbody>
                    }
                </table>
        </div>
    );
};

export default BookigsList;