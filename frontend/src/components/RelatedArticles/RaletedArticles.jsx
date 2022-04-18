import React from 'react';

const RelatedArticles = (props) => {

    // let article = {

    //     title: title,
    //     author: author,
    //     urls: urls,
    //     comment:comment

    // }
        

    return(
        
        
        <table>
    <div>
        <thead>
            <tr>
                <th>Title</th>
                <th>URL</th>
                <th>Author</th>
                <th>Comment</th>
                <th>Image</th>
            </tr>
        </thead>

    </div>
    <div>
        <tbody>
            {props.searchEntries.map((article, index) => {
                return(
                    <div>
                        <tr>
                        <td>{index + 1 }</td>
                        <td>{article.title}</td>
                        <td>{article.author}</td>
                        <td>{article.urls}</td>
                        <td>{article.comment}</td>

                        </tr>
                    </div>
                    );
                })}

        </tbody>
    </div>
    </table> 
    );

}
export default RelatedArticles

