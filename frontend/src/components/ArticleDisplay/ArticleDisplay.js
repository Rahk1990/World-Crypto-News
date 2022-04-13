import React ,{useState} from "react";

// import ArticleList from "../ArticleList/ArticleList";
// import propsList from "../propsList/propsList"

    const ArticleDisplay = ({article, id}) => {
        // const [articleById, setArticleById] = useState ([]);
        // setArticleById(
        //     article.map(article => article.id)
        // );
        const {index, key, link} = article;
        
        // console.log("Articles to Display", articleById)
        // const ArticleInfo = article.map((article) => article.id)
        // console.log("article info!", `${ArticleInfo}`)


        return (
       
            <li key={article.index} className="articlelist list-group mt-2" >
            <h4>{index + 1}</h4>
            <h4>{id}</h4>
            <h4>{key}</h4>
            <h4>{link}</h4>
        
            </li>



        );
    }
    export default ArticleDisplay