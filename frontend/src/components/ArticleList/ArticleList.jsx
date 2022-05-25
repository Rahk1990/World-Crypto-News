import axios from 'axios'
import React, { useState, useEffect } from 'react';

const ArticleList = (props) => {

  const [article, setArticles] = useState([]);

  const [apiArticle, setApiArticle] = useState([])

  useEffect(() => {



    function apiArticles() {

      props.apiArticleFetch(apiArticle);
    }


    const fetchArticleData = async () => {

      const response = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed", {
        params: {
          totalResults: 10,
        },
      });


      console.log("Data from News API AS RESPONSE data", response.data); // All article Returned here!

      setArticles(response.data);
      setApiArticle(response.data);

    };

    fetchArticleData();
    apiArticles();


  }, []);

  return (

    <div>
      <h2 className='container-1'>New Articles</h2>

      {article.map((article) => {

        return (
          <div key={article.index} >

            <br />
            {/* ADD hyperlink to this list */}
            <div className='margin'>
              <img className='image' src={article.parsely.meta.image.url} alt={article.parsely.meta.publisher.logo.url} />

              Title:<h3>{article.parsely.meta.headline}</h3></div>
            <div className='margin'>URL:<h3>{article.canonical_url}</h3></div>
            <div className='margin'>Summary:<h3>{article.excerpt.rendered}</h3></div>

          </div>

        )
      })}
    </div>

  );

};

export default ArticleList

