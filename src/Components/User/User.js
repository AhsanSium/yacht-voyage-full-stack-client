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
import tw from "twin.macro";

const User = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [menu, setMenu] = useState(`${loggedInUser.admin ?'allBookingList':'book'}`);

    const SidebarContainer = tw.div`relative h-full sm:w-auto lg:w-72 bg-indigo-400`;
    const ColumnContainer = tw.div`relative h-screen min-h-40`;

    return (
        <div className='container-fluid'>
            <div className="row">
           
                <div className="col-3 p-0">
                    <SidebarContainer>
                        <Sidebar setMenu={setMenu}></Sidebar>
                    </SidebarContainer>
                </div>
                <div className='col-9'>
                    <ColumnContainer>
                        <h3 className='text-primary mt-5 pt-5'>Welcome {loggedInUser.admin ? 'Admin':'User'}</h3>
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
                    </ColumnContainer>
                </div>

            </div>
        </div>
    );
};

export default User;