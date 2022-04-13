import React, { createContext, useState } from "react";
// import Asset from "../components/Asset/Asset";






export const ArticlesListContext = createContext();

// function ArticleId({articleId}) {
// return <h3><ArticleId />Article 1{articleId}</h3>;
// }
// let indexList = ArticleId();
// console.log(indexList)
// const ArticlesById = ({indexList}) => {
//         const {id} = indexList
// }


export const ArticlesListContextProvider = (props) =>{
    const [articlesList, setArticlesList] = useState ([]) // Assets to be displayed 
   
    return (
        <ArticlesListContext.Provider value={{ articlesList }}>
            {props.children}
        </ArticlesListContext.Provider>
    );
};
export default ArticlesListContextProvider;