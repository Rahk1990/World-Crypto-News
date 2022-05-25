import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GetUserArticles = (props) => {

    const [searchedEntries, setSearchedEntries] = useState([]);



    function handleSubmit(e) {
        getRelatedArticles();

        e.preventDefault();

    }

    async function getRelatedArticles() {
        let response = await axios.get('http://127.0.0.1:8000/api/articles/');
        setSearchedEntries(response.data);
        console.log(response.data);
        console.log("returned from search", searchedEntries)
        searchableEntries(searchedEntries);
    }

    function searchableEntries(searchedEntries) {
        props.searchArticles(searchedEntries)
    }

    useEffect(() => {
        getRelatedArticles()
    }, []);



    return (
        <div >
            <form onSubmit={handleSubmit}>
                <button type='submit'>Get Related </button>
            </form>


        </div>
    )

}

export default GetUserArticles;