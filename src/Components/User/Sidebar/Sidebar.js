import React, { useContext } from 'react';
import { button, Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = ({setMenu}) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser);

    return (
        <div className="d-flex flex-column bg-dark" style={{minHeight: '100%'}}>
            <div className="sidebar-header p-4">
                <h3 className='text-light'>{loggedInUser.admin ? 'Admin':'User'}</h3>
            </div>
            
            <div className="list-group">

                {   loggedInUser.admin === false &&
                    <div className="user">

                    <button onClick={()=>setMenu('book')} className="list-group-item list-group-item-action" aria-current="true">
                    Book
                    </button>

                    <button onClick={()=>setMenu('bookingList')}  className="list-group-item list-group-item-action">Booking List</button>

                    <button onClick={()=>setMenu('review')}  className="list-group-item list-group-item-action">Review</button>



                </div>
                
                }

                {   loggedInUser.admin &&

                    <div className="admin">

                    <button onClick={()=>setMenu('allBookingList')}  className="list-group-item list-group-item-action">All Booking List</button>
                    <button onClick={()=>setMenu('addYacht')}  className="list-group-item list-group-item-action">Add Yacht</button>
                    <button onClick={()=>setMenu('makeAdmin')}  className="list-group-item list-group-item-action">Make Admin</button>
                    <button onClick={()=>setMenu('manageYacht')}  className="list-group-item list-group-item-action">Manage Yacht</button>

                </div>
                }
               
                <Link className="mt-5 list-group-item list-group-item-info" to='/'>Home</Link>
            </div>
        </div>
    );
};

export default Sidebar;