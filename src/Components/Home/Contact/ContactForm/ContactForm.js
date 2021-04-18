import React from 'react';
import { useForm } from "react-hook-form";


const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container-sm w-75 mt-5'>
            <h5>Contact US NOW!</h5>
            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary">First Name</label>
                {/* <input type="email" className="form-control" id="inputEmail4" /> */}
                <input placeholder="First Name" type='text' className="form-control" {...register("firstName", { required: true, maxLength: 20 })} />
            </div>

            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary">Last Name</label>
                <input placeholder="Last Name" type='text' className="form-control" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            </div>
            
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary"> Email</label>
                <input placeholder="E-mail" type='email' className="form-control" {...register("email", { required: true })} />
                {errors.email&& <span>This field is required</span>}
            </div>
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary"> Phone </label>
                <input placeholder="Phone No" type="phone" className="form-control" {...register("phone")} />
            </div>
            <div className="col-md-12">
                <label className="form-label badge rounded bg-primary"> Message </label>
                <textarea placeholder="What's on your mind ..... " className="form-control" aria-label="With textarea"></textarea>
            </div>
            <div className="col-md-12 mt-5">    
                <button type="button" className="btn btn-outline-success  text-light" type="submit">Submit</button>
                {/* <input className="form-control " type="submit" /> */}
            </div>
            </form>

        </div>
    );
};

export default ContactForm;