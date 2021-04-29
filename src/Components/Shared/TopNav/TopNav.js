import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo160Final.png';

const TopNav = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogOut = () => {
        sessionStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <nav className="pl-4 pr-4 navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#ceffff'}}>
            <div className="container-fluid">
                <Link className=" ms-5 navbar-brand" to="/">
                    <img src={logo} className='img-fluid' alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-4 ms-auto">
                        <Link className='nav-link' to='/'>
                        <button className="btn btn-outline-info">
                        Home
                        </button>
                            
                        </Link>
                        <Link className='nav-link' to='/dashboard'>
                        <button className="btn btn-outline-info">
                            Dashboard
                        </button>    
                            </Link>
                        <Link className='nav-link' to='/contact'>
                        <button className="btn btn-outline-info">    
                            Contact
                        </button>    
                        </Link>
                        
                            {
                                loggedInUser.email || sessionStorage.getItem('token')?
                            <Link className='nav-link'>    
                            <button onClick={handleLogOut} className="btn btn-danger">
                                Logout
                            </button>
                            </Link> 
                            :  
                            <Link className='nav-link' to='/login'>
                            <button className="btn btn-primary">
                                Login
                            </button>  
                            </Link>
                            }
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;