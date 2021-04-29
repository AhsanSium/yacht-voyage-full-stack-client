import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterMid = () => {
    return (
        <div className='container-fluid'>

        <div className='row mt-5 p-5'>
            <div className="col-md-4 p-2">
                <h4>Address</h4>
                <p>Street:4253  Still Pastures Drive <br /> City:
                NORTH BRANCH
                <br />
                State:
                MN
                <br />
                State Full:
                Minnesota
                <br />
                Zip Code:
                55056
                <br />
                Phone Number:
                803-389-2028
                </p>
            </div>
            <div className="col-md-4 p-2">
                <h4>Menu</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                       <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to='/login'>Login</Link>
                    </li>
                    
                </ul>
            </div>
            <div className="col-md-4 row p-2">
                <h4>Social</h4>
                <div className="col-sm-4">
                    <a target="_blank" href='https://facebook.com'>
                    <FontAwesomeIcon className="icon mb-3" icon={faFacebook} size="4x"  />
                    </a>
                </div>
                <div className="col-sm-4">
                    <a target="_blank" href="https://twitter.com/">
                    <FontAwesomeIcon className="icon mb-3" icon={faTwitter} size="4x"  />
                    </a>
                </div>
                <div className="col-sm-4">
                    <a href="https://instagram.com">
                    <FontAwesomeIcon className="icon mb-3" icon={faInstagram} size="4x"  />
                    </a>
                </div>
            </div>

        </div>
        </div>
    );
};

export default FooterMid;