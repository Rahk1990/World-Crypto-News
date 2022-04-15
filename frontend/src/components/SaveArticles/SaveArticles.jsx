import axios from 'axios';
import React, { useState } from 'react';



const SaveArticles = (props) => {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [urls, setUrls] = useState('');
    const [comment, setComment] = useState('');


    async function handleSubmit(event){
    event.preventDefault(event);

    let newEntry = {
        title:"new title",
        // title:props.parsely.meta.headline,
        author:"John",
        // author:props.parsely.meta.author.name,
        urls:"www.samples.com",
        // urls:urls,
        comment:" ",
    }
    await axios.post("127.0.0.1:8000/api/articles/", newEntry)
    props.fetchArticleData();
    console.log(comment)
}

    return ( 

        <form onSubmit={handleSubmit}>
            
            <input value={`Title Saved! ${title}`} onChange={(event) => setTitle(event.target.value)} placeholder={"Saving Title"}/>

            
            <input value={`${author}`} onChange={(event) => setAuthor(event.target.value)} placeholder={"Saving Author"} />
      
            
            <input  value={`${urls}`} onChange={(event) => setUrls(event.target.value)} placeholder={"Saving Urls"}/>
    
            <tr><label>Comment</label></tr>
            <input type={null}  onChange={(event) => setComment(event.target.value)} />
            <button type='submit'>Save Article</button>
        </form>
     );
}
 
export default SaveArticles;