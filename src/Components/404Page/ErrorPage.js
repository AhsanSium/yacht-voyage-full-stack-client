import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../images/404page.jpg';
import {PrimaryButton} from '../misc/Buttons';

function ErrorPage() {
    return (
        <div className="d-flex justify-content-center mt-5 pt-5">
            <div className="container row d-flex align-items-center  justify-content-center">
                <div className="col-sm">
                    <img className="img-fluid" src={errorImage} alt="Error" />
                </div>
                <div className="col-sm ">
                    <Link to='/home'>
                        <PrimaryButton> Go Back </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;
