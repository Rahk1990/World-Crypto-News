import axios from 'axios'
import React, { useState, useEffect} from 'react';
import SaveArticles from '../SaveArticles/SaveArticles';
// import ArticlesContext from '../Articles/ArticlesContext'
// import CoinGeeko from '../apis/CoinGeeko'

// For setting the table to hold the tokens

// id:null, symbol:null, name:" ", block_time_in_minutes:" ", image:" ", market_data:" ", last_updated:" ", localization:""
const ArticleList = (props) => {
  
  const [article, setArticles] = useState ([]);
    // const [searchables, setSearchables] = useState([])
    // const [apiArticle, setApiArticle] = useState([])

    // const [isLoading, setIsLoading] = useState(false);

    
    function apiArticles(){
      // let searches = props.filter(article => article.slug);
      // setApiArticle(searches.data);
      // console.log("Articles AS SEARCHes",searches);
      props.apiArticleFetch(article);
    }
    
    function saveArticle(){
      props.SaveArticles(article)
    }

    // const getComment = () =>{
      
    // }
    
    useEffect(() => {
      const fetchArticleData = async () => {
        // setIsLoading(true)
        const response = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed", {
          params: {
            totalResults: 10,
          },
        });
        


        console.log("Data from News API AS RESPONSE data",response.data); // All article Returned here!
        console.log("Data from News API request");
        // setIsLoading(false);
        setArticles(response.data);
        

      //     if(isLoading) {
      //       return <div>Loading...</div>;
    
      // };
      }; 
        
        fetchArticleData();
        
        // ArticleDisplay();
      },[]);
      apiArticles();

    return(

    <div>
      <h2>Articles</h2>
      <h4>

      {article.map((article) => {
       
        return <div >
          <br/>
         

            <div><h3>{article.parsely.meta.headline}</h3></div>
            <img src={article.parsely.meta.image.url} alt="" />
            <div>{article.canonical_url}</div>
            <div>{article.excerpt.rendered}</div>
            <SaveArticles article={saveArticle} />    
            </div>
      })}

      </h4>
   
  
    </div>
    );
        
};

export default ArticleList

