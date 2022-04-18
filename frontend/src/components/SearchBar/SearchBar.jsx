import React, { useState } from 'react';
import axios from 'axios';


const SearchBar = (props) => {

    const [searchEntries, setSearchEntries] = useState('')
 

    function handleSubmit(e){
        e.preventDefault()
        getRelatedArticles()
        props.searchArticles(searchEntries)
    }

    async function getRelatedArticles(){
        let response = await axios.get('127.0.0.1:8000/api/articles/');
        setSearchEntries(response.data);
        console.log(response.data)
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchEntries} onChange={(e) => setSearchEntries(e.target.value)} type='text' placeholder='Search...'></input>

                <button type='submit'>Search</button>
                
            </form>
        </div>
    )
    
}

export default SearchBar