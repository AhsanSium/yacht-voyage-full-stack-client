import React from 'react';

const BookingTable = ({booking}) => {
    return (
        <tr>
            <td>{booking.username ? booking.username:booking.user.name}</td>
            <td>{booking.product?.name}</td>
            <td>{booking.product?.price}</td>
            <td>{booking.orderTime}</td>
            <td>Pending</td>
        </tr>
    );
};

export default BookingTable;