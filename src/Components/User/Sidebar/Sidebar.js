import React, { useContext, useEffect } from 'react';
import { button, Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";
import tw from "twin.macro";
import styles from './Sidebar.module.css';
import styled from "styled-components";
import '../../../index.css';

const Sidebar = ({ setMenu }) => {

    const Container = tw.div`relative h-screen bg-indigo-400`;
    const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
    const Button = tw.button`bg-blue-200 hover:bg-blue-500 hover:text-white rounded-md p-3 mt-3`

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //console.log(loggedInUser);

    const handleLogOut = () => {
        if(window.confirm('Are You Sure, You want to Logout?')){
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            window.location.reload();
            setLoggedInUser(''); 
        }
    }

    useEffect(()=>{
        
        if(!loggedInUser.email){
            const token = sessionStorage.getItem('token');
            const isAdmin = sessionStorage.getItem('admin');
            const decoded = jwt_decode(token);
            const signedInUser = {name: decoded.name, email:decoded.email, admin:isAdmin}
            setLoggedInUser(signedInUser);
            //console.log(decoded);
        }
    },[]);

    return (
        <div>
         {/* <Container> */}

            <div className="sidebar-header p-4">
                <h3 className='text-light'>{loggedInUser.admin ? 'Admin' : 'User'}</h3>
            </div>

            <div className="list-group">

                {loggedInUser.admin === false &&
                    <div className="user">

                        <Button onClick={() => setMenu('book')} className="list-group-item list-group-item-action" aria-current="true">
                            Book
                        </Button>

                        <Button onClick={() => setMenu('bookingList')} className="list-group-item list-group-item-action">Booking List</Button>

                        <Button onClick={() => setMenu('review')} className="list-group-item list-group-item-action">Review</Button>



                    </div>

                }

                {loggedInUser.admin &&

                    <div className="admin">

                        <Button onClick={() => setMenu('allBookingList')} className="list-group-item list-group-item-action">All Booking List</Button>
                        <Button onClick={() => setMenu('addYacht')} className="list-group-item list-group-item-action">Add Yacht</Button>
                        <Button onClick={() => setMenu('makeAdmin')} className="list-group-item list-group-item-action">Make Admin</Button>
                        <Button onClick={() => setMenu('manageYacht')} className="list-group-item list-group-item-action">Manage Yacht</Button>

                    </div>
                }

                <Link className="mt-5 list-group-item list-group-item-info" to='/'>
                    Home
                </Link>
                <Button onClick={handleLogOut} className="list-group-item list-group-item-danger">
                                Logout
                </Button>
            </div>
            {/* </Container> */}
        </div>
    );
};

export default Sidebar;