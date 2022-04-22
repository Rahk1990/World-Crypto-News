import React from 'react';


const RelatedArticles = ({ searchingEntries }) => {


    return (

        <div >
            <h2 className='articles'>Relative Articles</h2>

            {searchingEntries.map((article) => {


                return (
                    <div className='articles' key={article.id}>
                        <div >

                            {/* <td>{article.index }</td> */}
                            <h3>Article : <h6>{article.id}</h6></h3>
                            <h3>Title :<h6>{article.title}</h6></h3>
                            <h3>Author :<h6>{article.author}</h6></h3>
                            <h3>Urls :<h6></h6>{article.urls}</h3>
                            <h3>Comment:<h6>{article.comment}</h6></h3>
                           


                        </div>

                    </div>
                );
            })}


        </div>

    );

}
export default RelatedArticles

