import React from 'react';


const RelatedArticles = ({searchingEntries}) => {

    
// const [title, author, urls, comment] = searchingEntries;


    // let article = {

    //     title: searchingEntries.title,
    //     author: searchingEntries.author,
    //     urls: searchingEntries.urls,
    //     comment:searchingEntries.comment

    // }


    return(

        <div>
        <h2>Relative Articles</h2>

            {searchingEntries.map((article) => {


                return(
                    <div className='box-1'>
                        
                        {/* <td>{article.index }</td> */}
                        <h3>{article.id}</h3>
                        <h3>{article.title}</h3>
                        <h3>{article.author}</h3>
                        <h3>{article.urls}</h3>
                        <h3>{article.comment}</h3>
                        <h3>{article.good}</h3>
                        
                    

     
                    </div>
                    );
                })}


    </div>

    );

}
export default RelatedArticles

