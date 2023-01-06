import React, { useEffect, useState } from 'react';

const ManageYacht = () => {

    const [yachts, setYachts] = useState({
        loading: false,
        data: null,
    });

    // const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };

    useEffect(() => {
        setYachts({ loading: true });
        fetch('https://yacht-voyage-server.onrender.com/yachts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setYachts({ loading: false, data: data });
            })
            .catch(err => console.log(err));
    }, [setYachts])

    const handleDelete = (id) => {
        //console.log(id);
        fetch('https://yacht-voyage-server.onrender.com/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                //console.log(result, 'Deleted');
                alert('Product Deleted');
            })
    }

    return (
        <div>
            <h3>This is Manage Yacht</h3>
            {
                yachts.loading &&
                <h3>Loading Yacht</h3>
            }
            {
                yachts.data && yachts.data.map(yacht => <li key={yacht._id} style={{ padding: '10px' }}>Name:{yacht.name} Price:  {yacht.price} <button className='btn btn-danger' onClick={() => handleDelete(yacht._id)}>Delete </button> </li>)
            }
        </div>
    );
};

export default ManageYacht;