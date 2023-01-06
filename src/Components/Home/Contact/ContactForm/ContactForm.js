import { PrimaryButton } from 'Components/misc/Buttons';
import React from 'react';
import { useForm } from "react-hook-form";


const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://yacht-voyage-server.onrender.com/addContact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                response.json()
                alert('Contact Added');
            })
            .then(data => {
                //console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    };

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
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="col-md-6">
                    <label className="form-label badge rounded bg-primary"> Phone </label>
                    <input placeholder="Phone No" type="phone" className="form-control" {...register("phone")} />
                </div>
                <div className="col-md-12">
                    <label className="form-label badge rounded bg-primary"> Message </label>
                    <textarea placeholder="What's on your mind ..... " className="form-control" aria-label="With textarea" {...register("message")}></textarea>
                </div>
                <div className="col-md-12 mt-5">
                    <PrimaryButton type="button">
                        Submit
                    </PrimaryButton>
                    {/* <input className="form-control " type="submit" /> */}
                </div>
            </form>

        </div>
    );
};

export default ContactForm;