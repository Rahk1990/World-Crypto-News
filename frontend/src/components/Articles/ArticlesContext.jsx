import { createContext, useState } from "react";
// import Asset from "../components/Asset/Asset";




export const ArticlesListContext = createContext();

// const articlesCatcher = ({key}) =>{
// let articles = key.map(key = key.index)
// console.log("New articles here!!",articles)
// return articles;
// };



export const ArticlesListContextProvider = props =>{
    const [articlesList, setArticlesList] = useState ([0,1,2,3,4]) // Assets to be displayed 
    
    return (
        <ArticlesListContext.Provider value={{ articlesList }}>
            {props.children}
        </ArticlesListContext.Provider>
    );
};