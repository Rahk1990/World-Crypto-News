import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {

    const [searchedEntries, setSearchedEntries] = useState([]);
    const navigate = useNavigate()


    async function getSearchArticles() {
        let response = await axios.get('http://127.0.0.1:8000/api/articles/');
        setSearchedEntries(response.data);
        console.log(response.data);
        console.log("returned from search", searchedEntries)
        searchFilter();
    }
    navigate("/")

    const searchFilter = (searchedEntries) => {
        console.log(searchedEntries)
        let entryMatch = searchedEntries.filter((entries) => {
            if (entries.toLowerCase().includes(searchedEntries.toLowerCase())) {
                return true

            }
            else return false
        }
        )
        console.log(entryMatch)
    };

    function handleSubmit(e) {
        getSearchArticles();

        e.preventDefault();

    }
    useEffect(() => {
        getSearchArticles()
    }, []);


    return (
        <div>SearchPage</div>,
        <div>
            <form onSubmit={handleSubmit}>
                <input value={''} onChange={(e) => setSearchedEntries(e.target.value)} type='text' placeholder='Search...'></input>
                <button type='submit'>Search </button>
            </form>

{/* 

            <div className='articles' key={searchedEntries.id}>
                <div >

                    <td>{searchedEntries.index }</td>
                    <h3>{searchedEntries.id}</h3>
                    <h3>{searchedEntries.title}</h3>
                    <h3>{searchedEntries.author}</h3>
                    <h3>{searchedEntries.urls}</h3>
                    <h3>{searchedEntries.comment}</h3>
                    <h3>{searchedEntries.good}</h3>


                </div> */}

            {/* </div> */}
        </div>
    )
}

export default SearchPage