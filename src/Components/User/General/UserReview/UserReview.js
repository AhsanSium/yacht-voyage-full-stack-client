import React, { useState } from 'react';

const UserReview = () => {

    const [info, setInfo] = useState({
        name: '',
        description: '',
        rating: null
    });


    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const newFile = event.target.files[0];
        setImage(newFile);
        //console.log(image);
    }

    const handleBlur = (event) => {
        if(event.target.value === null){
            alert('Unknown Value Try again');
        }
        else{
            
            const newInfo = { ...info };
            //console.log(event.target.name, event.target.value);
            newInfo[event.target.name] = event.target.value;
            setInfo(newInfo);
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData()
        formData.append('file', image);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('rating', info.rating);
        
        const url = 'https://quiet-journey-44427.herokuapp.com/addReview';
        //console.log(image, info);
        // console.log(data);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                response.json()
                alert('Review Submitted');
            })
            .then(data => {
                //console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    };

    return (
        <div className='container mt-5'>
            <h5> Please Give us a Review</h5>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label badge rounded bg-primary">Name</label>
                    <input onBlur={handleBlur} placeholder="Name" type='text' className="form-control" name='name' />
                </div>

                <div className="col-md-6">
                    <label className="form-label badge rounded bg-primary"> Rating </label>
                    {/* <input onBlur={handleBlur} placeholder="rating" type="number" className="form-control" name='rating' /> */}
                    <select class="form-select" name='rating' onChange={handleBlur}>
                        <option selected value='null'>Select Rating</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label badge rounded bg-primary"> Image </label>
                    <input onChange={handleImageUpload} className="form-control" name="image" type="file" required name='image' />
                </div>

                <div className="col-md-12">
                    <label className="form-label badge rounded bg-primary">Description</label>
                    <textarea onBlur={handleBlur} placeholder="Description" type='text' className="form-control" name='description' />
                </div>


                <div className="col-md-12 mt-5">
                    <button type="submit" className="btn btn-success  text-light">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UserReview;