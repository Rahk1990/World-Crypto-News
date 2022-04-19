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
// import ApiSearcher from "./components/ApiSearcher/ApiSearcher";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";
import AssetList from "./components/AssetList/AssetList";
import RelatedArticles from "./components/RelatedArticles/RaletedArticles";
import RelatedCharts from "./components/RelatedCharts/RaletedCharts";






function App() {
  
  const [searchEntries, setSearchEntries] = useState([]);
  const [chartedEntries, setChartedEntries] = useState([]);
  const [apiArticles, setApiArticles] = useState([])


//COMES FROM ARTICLE API
  const apiArticleFetch =(apiArticles) =>{
  setApiArticles(apiArticles)
  console.log("MAde it As searchable Article",apiArticles) 
  }
  

//SEARCH ENTRIES FROM SEARCH BAR
  const searchArticles = (searchEntries) =>{
  setSearchEntries(searchEntries)
  console.log("MADE IT TO APP PAGE SEARCH ENTIRES!",searchEntries)
  }
  
  const chartEntries = (chartedEntries) =>{
  setChartedEntries(chartedEntries)
  console.log("Charts",chartedEntries)
  }
//HERE IS WHERE THE ARTICLE SHOULD CROSS REFERENCE WITH THE SEARCH
  

// const searchingEntries = (searchableEntries) => {
//   setSearchableEntries(searchableEntries)
//   } 
 
// const apiSearches = (searchableEntries, apiArticles) => {
//   setSearchableEntries(searchableEntries, apiArticles)
//   } 
 
  
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
              <RelatedCharts chartedEntries={chartedEntries}/>
              <RelatedArticles searchingEntries={searchEntries} />
               <ArticleList apiArticleFetch={apiArticleFetch} />
      
        
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
