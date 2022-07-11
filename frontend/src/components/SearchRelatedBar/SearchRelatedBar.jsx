import React, { useState } from 'react';



const SearchRelatedBar = (props) => {
    const [searchEntries, setSearchEntries] = useState('')


    // handles fuction from search bar
    function handleSubmit(e) {
        sendsSearch()
        e.preventDefault()
    }

    // send search results from articles to app.js
    function sendsSearch() {
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