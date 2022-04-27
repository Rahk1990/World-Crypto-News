import React, { useState } from 'react';



const SearchRelatedBar = (props) => {
    const [searchEntries, setSearchEntries] = useState('')



    function handleSubmit(e){
        sendsSearch()
        e.preventDefault()
    }
    
    
    function sendsSearch(){
        props.sendSearch(searchEntries)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchEntries} onChange={(e) => setSearchEntries(e.target.value)} type='text' placeholder='Search...'></input>

                <button type='submit'>Search </button>
 
                
            </form>
        </div>
    )
    
}

export default SearchRelatedBar