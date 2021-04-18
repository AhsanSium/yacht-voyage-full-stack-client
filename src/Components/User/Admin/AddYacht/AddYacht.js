import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddYacht = () => {

    const [info, setInfo] = useState({
        name:'',
        location:'',
        price:null,
        speed:null,
        people:null,
        bed:null
    });
    const [image,setImage] = useState(null);

    const handleImageUpload = (event) => {
        const newFile = event.target.files[0];
        setImage(newFile);
        console.log(image);
    }

    const handleBlur = (event) => {
        const newInfo = {...info};
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
       
        const formData = new FormData()
        formData.append('file', image);
        formData.append('name', info.name);
        formData.append('location', info.location);
        formData.append('price', info.price);
        formData.append('speed', info.speed);
        formData.append('people', info.people);
        formData.append('bed', info.bed);
        const url = 'https://quiet-journey-44427.herokuapp.com/addYacht';
        console.log(image,info);
        // console.log(data);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            response.json()
            alert('Yacht Added')
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    };

    return (
        <div>
            <h3>This is Add Yacht</h3>
            <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary">Name</label>
                <input onBlur={handleBlur} placeholder="Name" type='text' className="form-control" name='name' />
            </div>

            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary">Location</label>
                <input onBlur={handleBlur} placeholder="Location" type='text' className="form-control" name='location' />
            </div>

            
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary"> Price </label>
                <input onBlur={handleBlur} placeholder="Price" type="number" className="form-control" name='price' />
            </div>
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary"> Speed </label>
                <input onBlur={handleBlur} placeholder="speed" type="number" className="form-control" name='speed' />
            </div>
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary"> People </label>
                <input onBlur={handleBlur} placeholder="people" type="number" className="form-control" name='people'/>
            </div>
            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary"> Bed </label>
                <input onBlur={handleBlur} placeholder="Bed" type="number" className="form-control" name='bed' />
            </div>

            <div className="col-md-6">
                <label className="form-label badge rounded bg-primary"> Image </label>
                <input onChange={handleImageUpload} className="form-control" name="image" type="file" required name='image'/>
            </div>
               
            <div className="col-md-12 mt-5">    
                <button type="submit" className="btn btn-success  text-light">Submit</button>
            </div>
            </form>
        </div>
    );
};

export default AddYacht;