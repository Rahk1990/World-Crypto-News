import React, {useState} from 'react';


const RelatedArticles = ({ searchEntries }) => {


    return (

        <div  >
            <h2 className='container-1'>My Saved Articles</h2>

            {searchEntries.map((article) => {


                return (

                    <div className='articles' key={article.id}>

                        <div>
                            The article titled {article.title}, by {article.author} from {article.urls} was notable. Here is what you thought.....{article.comment}
                        </div>
                            <h3>Article : <h6>{article.id}</h6></h3>
                            {/* <td>{article.index }</td> */}
                            <h3>Title :<h6>{article.title}</h6></h3>
                            <h3>Urls :<h6></h6>{article.urls}</h3>
                           


                       

                    </div>
                );
            })}


        </div>

    );

}
export default RelatedArticles

