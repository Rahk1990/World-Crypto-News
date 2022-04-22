import React from 'react';


const RelatedArticles = ({ searchingEntries }) => {


    return (

        <div >
            <h2 >Relative Articles</h2>

            {searchingEntries.map((article) => {


                return (
                    <div className='articles' key={article.id}>
                        <div >

                            {/* <td>{article.index }</td> */}
                            <h3>{article.id}</h3>
                            <h3>{article.title}</h3>
                            <h3>{article.author}</h3>
                            <h3>{article.urls}</h3>
                            <h3>{article.comment}</h3>
                            <h3>{article.good}</h3>


                        </div>

                    </div>
                );
            })}


        </div>

    );

}
export default RelatedArticles

