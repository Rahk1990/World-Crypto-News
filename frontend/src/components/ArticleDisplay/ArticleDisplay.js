import React from "react";
// import ArticleList from "../ArticleList/ArticleList";
// import propsList from "../propsList/propsList"

    const ArticleDisplay = ({article}) =>{
        
 
        console.log("Articles to Display")
        // const ArticleInfo = article.map((article) => article.id)
        // console.log("article info!", `${ArticleInfo}`)


        return (
       
            <li key={article.index} className="articlelist list-group mt-2" >
        
                    
          
                <span >
            </span>
            </li>



        );
    }
    export default ArticleDisplay