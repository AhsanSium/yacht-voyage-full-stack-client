import React from 'react';
import { Link } from 'react-router-dom';

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
                       <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    
                </ul>
            </div>
            <div className="col-md-4 row p-2">
                <h4>Social</h4>
                <div className="col-sm-4">Facebook</div>
                <div className="col-sm-4">Twitter</div>
                <div className="col-sm-4">Instagram</div>
            </div>

        </div>
        </div>
    );
};

export default FooterMid;