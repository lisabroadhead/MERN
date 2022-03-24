import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Author from '../components/Author';

const Home = (props) => {
    const [authors,setSuthos] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`).then(response=>{
            setSuthos(response.data.authors);
        })
    }, []);


    return(
        <div>
            <h1>Authors</h1>
            <Link to="/new" className="button-lg">Add an Author</Link>
            <div className="allAuthors">
                {
                    authors.map((item,i) => {
                        return <Author key={i} author={item}/>
                    }) 
                }
            </div>
        </div>
    )
}

export default Home;