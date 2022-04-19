import axios from 'axios';
import React, { useState } from 'react';



const SaveArticles = (props) => {

    const [author, setAuthor] = useState(' ');
    const [title, setTitle] = useState(' ');
    const [urls, setUrls] = useState(' ');
    const [comment, setComment] = useState(' ');


    async function handleSubmit(event){
        alert("Article Saved")
    event.preventDefault(event);

    
    let newEntry = {
        title:title,
        // title:props.parsely.meta.headline, TO PULL AUTO
        author:author,
        // author:props.parsely.meta.author.name, TO PULL AUTO
        urls:urls,
        // urls:urls, TO PULL AUTO
        comment:comment,
    }
    await axios.post("http://127.0.0.1:8000/api/articles/", newEntry)
    // props.fetchArticleData();
    console.log(comment)
}
function goodDay(){ var goodEvent = goodEvent.bubbles}
function badDay(){ var badEvent = badEvent.bubbles}

    return ( 
        <div className='container-1' key={props.index}>
            
        <form className='box-2' onSubmit={handleSubmit}>
            

           <label>Title</label>
            <input type="text" value={`${title}`} onChange={(event) => setTitle(event.target.value)} placeholder={"Title Here"}/>

            
           <label>Author</label>
            <input type="text" value={`${author}`} onChange={(event) => setAuthor(event.target.value)} placeholder={"Author Here"} />
      
            
           <label>URL of Article</label>
            <input type="text" value={`${urls}`} onChange={(event) => setUrls(event.target.value)} placeholder={"Urls Here"}/>
    
          
          
            <input className='paragraph' type="text"  onChange={(event) => setComment(event.target.value)} placeholder={"Comments"}/>

                 
            <div>
                Save Article as "Good" or "Bad" for investments?
            <button onClick={goodDay}>Good</button>
            <button onClick={badDay}>Bad</button>
                </div>
        </form>
        </div>
     );
}
 
export default SaveArticles;