import axios from 'axios'
// import { WatchListContext } from '../../context/watchList'
import React, { useState, useEffect, useContext} from 'react';
import { ArticlesListContext } from '../Articles/ArticlesContext';
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'

// import CoinGeeko from '../apis/CoinGeeko'

// For setting the table to hold the tokens

// id:null, symbol:null, name:" ", block_time_in_minutes:" ", image:" ", market_data:" ", last_updated:" ", localization:""
const ArticleList = () => {
    
    const [article, setArticles] = useState ([]);
    const {articlesList} = useContext (ArticlesListContext);
    const [isLoading, setIsLoading] = useState(false);
    
    
    
    
    
    // const articleFilter = ({article}) => {
    //     console.log(article)
    //     let articleMatch = article.filter((article) => {
    //       if(article.name.toLowerCase().includes(article.toLowerCase())){
    //         return true
            
    //       }
    //       else return false
    //     }
    //     )
    //     console.log(articleMatch)
    //   };

    useEffect(() => {
        const fetchArticleData = async () => {
               setIsLoading(true)
            
            const response = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed", {
                params: {
                    ids: articlesList.join(","),
                    totalResults: 10,
                },
            });
             
            console.log("Data from News API AS RESPONSE data",response.data); // All article Returned here!
            setArticles(response.data);
            console.log("Data from News API request");
            setIsLoading(false);
        };
        
        fetchArticleData();
        
        // ArticleDisplay();
         },[]);

    
    const renderArticles = () => {
      
        if(isLoading) {
          return <div>Loading...</div>;
        }
        
        return (
          <ul className="articlelist list-group mt-2">
  
            {article.map(article => {
       
              return <ArticleDisplay key={article.index} article={article.link} />;
            })}
            </ul>
            
          );

        };
          
       
        
        console.log("Article LIST HERE!!!!2", articlesList)
    
    
    return(

    <div>{renderArticles()}
  
    </div>
    );
        
};

export default ArticleList
    //     <div>
    //     <h1>Articles will appear here!!</h1>
    // <ArticleDisplay article ={article}
    //     {/* <div>{renderArticles()}</div> */}
    //     {/* <button onClick={() => displayArticles()}>{article.name}</button>        */}
    //     {/* <div><fetchData /></div> */}
    //     {/* <li className="articlelist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark"> */}
    //     {/* <img className="articlelist-image" src={article.image} alt="" /> */}
    //     {/* <span className="text-decoration-none">{article.title}</span> */}
        
    // {/* </li> */}
    
    // </div>
    
