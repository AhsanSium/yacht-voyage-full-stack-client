import React from 'react';
import { useForm } from "react-hook-form";


const FooterTop = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://quiet-journey-44427.herokuapp.com/addNewsLetter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            response.json()
            alert('Email Added');
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    };

    return (
        <div className=' p-3 pt-5'>
            <h2 className='p-2'>Newsletter</h2>
            <small className='m-5'>Get the Latest News and Special Offers</small>
            <form className="row g-3 d-flex justify-content-center p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3 col-md-12 w-50">
                    <input type="text" className="form-control" placeholder="Your E-mail" aria-label="email" aria-describedby="button-addon2" type='email' className="form-control" {...register("email", { required: true })} />
                    <button className="btn btn-outline-primary" type="submit" id="button-addon2">Sign Up</button>
                </div>
                    {errors.email && <span className='text-danger'>This field is required</span>}
                <div className="col-md-12 d-flex justify-content-center align-items-">
                    <input  className="form-check-input mt-0" type="checkbox" {...register("checkBox", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    <small className='ms-2'>I agree that my submitted data is being collected and stored.</small>
                </div>
                    {errors.checkBox && <span className='text-danger'>This field is required</span>}
            </form>

        </div>
    );
};

export default FooterTop;