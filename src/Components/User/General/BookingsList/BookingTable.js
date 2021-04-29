import React, { useContext } from 'react';
import { UserContext } from '../../../../App';

const BookingTable = ({ booking }) => {

    console.log(booking)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleStatusChange = ( id, event) => {
        console.log(id,event.target.value);

        const data = {id: id, status: event.target.value};

        fetch('https://quiet-journey-44427.herokuapp.com/updateStatus',{
            
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Product Updated');
            })
            .catch(err => {
                console.log(err);
            })

            // fetch('https://quiet-journey-44427.herokuapp.com/yachtById/' + yachtId)
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            //     newYacht.data = data;
            //     newYacht.isLoading = false;
            //     setYacht(newYacht);
            // })
            // .catch(err => {
            //     console.log(err);
            // })

        }

    return (      
            <tr>
            <td>{booking.username ? booking.username : (booking.user? booking.user.name : '')}</td>
            <td>{booking.product?.name}</td>
            <td>{booking.product?.price}</td>
            <td>{booking.orderTime ? booking.orderTime: ''}</td>
            <td>{booking.status ? booking.status: ''}</td>
            <td>
                {
                    loggedInUser.admin &&
                    <select onChange={(e) =>handleStatusChange(booking._id, e)} class="form-select" aria-label="Default select example">
                        <option selected>Status</option>
                        <option name='Pending' value="Pending">Pending</option>
                        <option name='On Going' value="On Going">On Going</option>
                        <option name='Done' value="Done">Done</option>
                    </select>

                }
            </td>
            </tr>
        
    );
};

export default BookingTable;