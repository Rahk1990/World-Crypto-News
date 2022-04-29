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
                <button type='submit'>Search </button>
                <input value={searchEntries} onChange={(e) => setSearchEntries(e.target.value)} type='text' placeholder='Search...'></input>

            </form>
        </div>
    )
    
}

export default SearchRelatedBar