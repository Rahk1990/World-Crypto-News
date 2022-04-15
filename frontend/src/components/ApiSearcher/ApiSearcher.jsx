import React, { useState } from 'react';


function ApiSeacher ({searchableEntries, apiArticles}){
  
  const [searches, setSearches] = useState([])
  const [articles, setArticles] = useState([])

  let search = searchableEntries.map(el => el.text)
  setSearches(search)
  console.log(searches)

  let article = apiArticles.map(el => el.slug)
  setArticles(article)
  console.log(articles)
  
  
  searchableEntries.filter((searches,article) => {
      if(searches.name.toLowerCase().includes(searches.toLowerCase()) === apiArticles.name.toLowerCase().includes(articles.toLowerCase())){
          
      return(
        
        <div ><h3>{article.slug}</h3></div>,
        <img src={article.parsely.meta.image.url} alt="" />,
        <div>{article.canonical_url}</div>,
        <div>{article.excerpt.rendered}</div>
       
      );          
      // else return false (<h4>No Articles</h4>);
    }
    
});
}

export default ApiSeacher;