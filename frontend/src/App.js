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
import RelatedArticles from "./components/RelatedArticles/RaletedArticles";






function App() {
  
  const [searchEntries, setSearchEntries] = useState([]);
  const [searchableEntries, setSearchableEntries] = useState([]);
  const [apiArticles, setApiArticles] = useState([])


//COMES FROM ARTICLE API
  const apiArticleFetch =(apiArticles) =>{
  setApiArticles(apiArticles)
  console.log("MAde it As searchable Article",apiArticles) 
  }
  

//SEARCH ENTRIES FROM SEARCH BAR
  const searchArticles = (searchEntries) => {
  setSearchEntries(searchEntries)
  console.log("MADE IT TO APP PAGE SEARCH ENTIRES!",searchEntries)
  }
  
//HERE IS WHERE THE ARTICLE SHOULD CROSS REFERENCE WITH THE SEARCH
  const apiSearches = (searchableEntries, apiArticles) => {
    setSearchableEntries(searchableEntries, apiArticles)
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
              <SearchBar searchArticles={searchArticles} />
              <WatchListContextProvider>
              <AssetList />
              </WatchListContextProvider>
              <ArticleList apiArticleFetch={apiArticleFetch} />
              <RelatedArticles searchEntries={searchEntries} />
              {/* <ApiSearcher  searchableEntries={apiSearches} apiArticles={apiSearches}   /> */}

          
       
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
