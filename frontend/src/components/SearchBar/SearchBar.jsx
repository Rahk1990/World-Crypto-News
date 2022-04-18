import React, { useState , useEffect } from 'react';
import axios from 'axios';
import RelatedArticles from '../RelatedArticles/RaletedArticles';


const SearchBar = (props) => {

    const [searchEntries, setSearchEntries] = useState('');
    const [searchedEntries, setSearchedEntries] = useState([]);
 
    
    function handleSubmit(e){
        getRelatedArticles();
        
        
        e.preventDefault();
        
    }
    
    async function getRelatedArticles(){
        let response = await axios.get('http://127.0.0.1:8000/api/articles/');
        setSearchedEntries(response.data);
        console.log(response.data);
        console.log("returned from search",searchedEntries)
        searchableEntries(searchedEntries);
    }
    function searchableEntries(searchedEntries) {
        props.searchArticles(searchedEntries)
    } 
    
    useEffect(() => {
        getRelatedArticles()
    },[]);
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchEntries} onChange={(e) => setSearchEntries(e.target.value)} type='text' placeholder='Search...'></input>

                <button type='submit'>Related</button>
            </form>


            {/* <RelatedArticles searchEntries={searchEntries} /> */}
        </div>
    )
    
}

export default SearchBar;