import axios from 'axios'
// import { WatchListContext } from '../../context/watchList'
import React, { useState, useEffect} from 'react'
// import CoinGeeko from '../apis/CoinGeeko'

// For setting the table to hold the tokens

// id:null, symbol:null, name:" ", block_time_in_minutes:" ", image:" ", market_data:" ", last_updated:" ", localization:""
const ArticleList = () => {
    
    const [article, setArticle] = useState ([]);
    //    const { watchList } = useContext (WatchListContext); 
    //    const [isLoading, setIsLoading] = useState(false);
    
    
    
    
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
        const fetchData = async () => {
            //    setIsLoading(true)
            
            const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5670c13885a442beb2feb771941140bf", {
                params: {
                    articles: [],
                    totalResults: 10,
                },
            });
            console.log("Data from News API request",response.data) // All article Returned here!
            setArticle(response.data);
            console.log("Success conv to 'article' array", [{article}])
            // setIsLoading(false);
        };
        
        fetchData();
        console.log(article)
    },[ ]);
    
    // articleFilter(article);
    
    return( 
    
    <div>
        <h1>Articles will appear here!!</h1>
        <li className="articlelist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="articlelist-image" src={article.image} alt="" />
        <span className="text-decoration-none">{article.title}</span>
        
    </li>
    
    </div>
    )
    };

    export default ArticleList