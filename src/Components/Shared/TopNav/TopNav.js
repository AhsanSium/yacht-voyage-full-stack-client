import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const TopNav = () => {
    return (
        <nav className="p-4 navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#ceffff'}}>
            <div className="container-fluid">
                <Link className=" navbar-brand" to="/">
                    <img src={logo} className='img-fluid' style={{width:'120px'}} alt=""/>
                    Yachts Voyage
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
                        <Link className='nav-link' to='/login'>
                        <button className="btn btn-danger">
                            Login
                        </button>    
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;