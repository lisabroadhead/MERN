import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddProductForm from './AddProductForm';

const EditProduct = (props) => {
    const { id } = useParams();
    const [single,setSingle] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`).then(response=>{
            setSingle(response.data.product);
        })
    }, []);
    return(
        
        <div>

            <AddProductForm  title={`Edit: ${single.title}`} product={single.title} price={single.price} description={single.description} amount={single.amount} type={single.type} />
        </div>
    )
}

export default EditProduct;