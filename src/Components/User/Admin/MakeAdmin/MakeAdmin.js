import React, { useState } from 'react';

const MakeAdmin = () => {

    const [admin, setAdmin] = useState('');

    const handleBlur = (event) => {
        setAdmin(event.target.value);
        console.log(admin);
    }

    const handleAddAdmin = () => {

        const formData = new FormData()
        formData.append('email', admin);

        const url = 'http://localhost:5000/addAdmin';

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            response.json()
            alert('Admin Added');
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <div>
            <h3>This is Make Admin</h3>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onBlur={handleBlur} />
                    <button onClick={handleAddAdmin} class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    );
};

export default MakeAdmin;