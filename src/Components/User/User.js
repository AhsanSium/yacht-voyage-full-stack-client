import React, { useContext, useState } from 'react';
import Book from './General/Book/Book';
import Sidebar from './Sidebar/Sidebar';
import BookingsList from './General/BookingsList/BookigsList';
import UserReview from './General/UserReview/UserReview';
import AddYacht from './Admin/AddYacht/AddYacht';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageYacht from './Admin/ManageYacht/ManageYacht';
import AllBookingList from './Admin/AllBookingList/AllBookingList';
import { UserContext } from '../../App';

const User = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [menu, setMenu] = useState(`${loggedInUser.admin ?'allBookingList':'book'}`);

    return (
        <div className='container-fluid'>
            <div className="row">
           
                <div className="col-3 p-0">
                    <Sidebar setMenu={setMenu}></Sidebar>
                </div>
                <div className='col-9'>
                <h3 className='text-primary'>Welcome {loggedInUser.admin ? 'Admin':'User'}</h3>
                    {
                        menu === 'book' &&
                        <Book></Book>
                    }
                    {
                        menu === 'bookingList' &&
                        <BookingsList></BookingsList>
                    }
                    {
                        menu === 'review' &&
                        <UserReview></UserReview>
                    }
                    {
                        menu === 'allBookingList' &&
                        <AllBookingList></AllBookingList>
                    }
                    {
                        menu === 'addYacht' &&
                        <AddYacht></AddYacht>
                    }
                    {
                        menu === 'makeAdmin' &&
                        <MakeAdmin></MakeAdmin>
                    }
                    {
                        menu === 'manageYacht' &&
                        <ManageYacht></ManageYacht>
                    }
                   
                </div>

            </div>
        </div>
    );
};

export default User;