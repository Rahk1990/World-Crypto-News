// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState} from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { WatchListContextProvider } from "./context/watchList";
import ArticleList from "./components/ArticleList/ArticleList";
import ApiSearcher from "./components/ApiSearcher/ApiSearcher";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";
import AssetList from "./components/AssetList/AssetList";






function App() {
  
  const [searchEntries, setSearchEntries] = useState([]);
  const [searchableEntries, setSearchableEntries] = useState([]);
  const [apiArticles, setApiArticles] = useState([])



  const apiArticleFetch =(apiArticles) =>{
setApiArticles(apiArticles)
console.log("MAde it As searchable Article",apiArticles) 
  }
  


  const searchArticles = (searchEntries) => {
  setSearchEntries(searchEntries)
  console.log("MADE IT TO APP PAGE!",searchEntries)
  }
  
  //HERE IS WHERE THE ARTICLE SHOULD CROSS REFERENCE WITH THE SEARCH
  const apiSearches = (searchableEntries) => {
    setSearchableEntries(searchableEntries)
    // searchEntries.filter((article) => {
    //   if(article.name.toLowerCase().includes(searchEntries.toLowerCase()) === {...apiArticles} ){
    //     console.log(searchableEntries)
    //     return(
          
    //       <div></div>
    //       // <div ><h3>{article.slug}</h3></div>,
    //       // <img src={article.parsely.meta.image.url} alt="" />,
    //       // <div>{article.canonical_url}</div>,
    //       // <div>{article.excerpt.rendered}</div>
          
    //       );          
          
          
    //     }
    //     else return false (<h4>No Articles</h4>);
    //   }
    //   )
      
      // console.log(searches,"I AM NOW SEARCHES!")
      // setSearchEntries(searches)
    // };
  } 
 
  
  console.log(searchEntries)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              <WatchListContextProvider>
              <AssetList />
              </WatchListContextProvider>
              <SearchBar searchArticles={searchArticles} />
              <ArticleList apiArticleFetch={apiArticleFetch} />
              <ApiSearcher  searchableEntries={apiSearches}  />

          
       
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
