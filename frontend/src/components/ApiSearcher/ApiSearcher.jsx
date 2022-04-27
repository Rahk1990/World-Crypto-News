import React from 'react';


function ApiSeacher ({searchBarResults}){
  
  //   const [searches, setSearches] = useState([])
  //   const [articles, setArticles] = useState([])
  
  
  
  // const search = searchEntries.map(el => el)
  // setSearches(search)
  // console.log(searches)
  
  // let article = apiArticles.filter(el => el.title)
  // setArticles(article)
  // console.log(articles)
  
  console.log(`Search Bar Entry is ${searchBarResults}`)
 

// function searchEntries({searchEntries}){
//   let articles = searchEntries.map(el=> el)
//   console.log(`Search Bar Articles is ${articles}`)
 
// }

  // useEffect(() => {
  //   searchArticle()
  //   searchEntries()
  // }, []);
  
  // searchBarEntries.filter((searches,apiArticles) => {
  //      (searches.name.toLowerCase().includes(searches.toLowerCase()) === apiArticles.name.toLowerCase().includes(apiArticles.toLowerCase()))
          
      return(
        
        <div >{searchBarResults.title}</div>,
        // <img src={article.parsely.meta.image.url} alt="" />
        <div>searches</div>
       
      );          
    }
    // else return (<h4>No Articles</h4>);
    

// );
// }

export default ApiSeacher;