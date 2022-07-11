// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { WatchListContextProvider } from "./context/watchList";
import ArticleList from "./components/ArticleList/ArticleList";
import SaveArticles from "./components/SaveArticles/SaveArticles";
import DisplaySearches from "./components/DisplaySearches/DisplaySearches";

// import ApiSearcher from "./components/ApiSearcher/ApiSearcher";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import GetUserArticles from "./components/SearchBar/SearchBar";
import AssetList from "./components/AssetList/AssetList";
import RelatedArticles from "./components/RelatedArticles/RaletedArticles";
import RelatedCharts from "./components/RelatedCharts/RaletedCharts";
// import ApiSeacher from "./components/ApiSearcher/ApiSearcher";
import SearchRelatedBar from "./components/SearchRelatedBar/SearchRelatedBar";






function App() {

  const [searchEntries, setSearchEntries] = useState([]);
  // const [searchBarEntries, setSearchBarEntries] = useState([]);
  const [searchBarResults, setSearchBarResults] = useState([]);
  // const [chartedEntries, setChartedEntries] = useState([]);
  // const [apiArticles, setApiArticles] = useState([])



  //COMES FROM ARTICLE API
  const apiArticleFetch = (apiArticles) => {
    setApiArticles(apiArticles)
    console.log("MAde it As searchable Article", apiArticles)
  }
  //Entries to be Charted
  const chartEntries = (chartedEntries) => {
    setChartedEntries(searchEntries)
    console.log(chartedEntries)
  }

  //SEARCH ENTRIES FROM SEARCH BAR
  const searchArticles = (searchEntries) => {
    setSearchEntries(searchEntries)
    console.log("MADE IT TO APP PAGE SEARCH ENTIRES!", searchEntries)
  }


  
  //HERE IS WHERE THE ARTICLE SHOULD CROSS REFERENCE WITH THE SEARCH
  // BE MORE DISCRIPTIVE WITH NAMING CONVENTION
  const searchBarResult = (thingToSeachBy) => {
    console.log('Ready for search', searchEntries)
    let searchMatch = searchEntries.filter((searches) => {
      return searches.title.includes(thingToSeachBy)
    })
    console.log("SEARCH MATCH", searchMatch)

    setSearchBarResults(searchMatch)
  }





  useEffect(() => {
    //searchBarResult(searchBarEntries);

  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />

              {/* ADD POSSIBLE "ON-CLICK" TO RETURN ARTICLES RETLATED TO TOKEN THATS CLICKED */}
              <div className="assetBox">

                <WatchListContextProvider>
                  <AssetList />
                </WatchListContextProvider>
              </div>
              <br />
              {/* 
                <div className="margin">
                    </div> */}
              <div className="container-2">


                <div >
                  <div className="box-1">
                    <GetUserArticles searchArticles={searchArticles} />
                    <SearchRelatedBar sendSearch={searchBarResult} />
                  </div>
                  <div className="box-2">
                    <RelatedCharts chartedEntries={searchEntries} />
                  </div>
                </div>

              </div>
              <div className="container-1">
                <div className="box-1">
                  <SaveArticles article={searchEntries} />
                </div>
                {/* 
                <div>
                  <ApiSeacher searchBarResults={searchBarResults} />
                </div> */}
              </div>
              <h2 className="container">Articles</h2>
              <div className="container-3" >

                <div className="articleBox">
                  <div className="box-2"  >
                    <ArticleList apiArticleFetch={apiArticleFetch} />
                  </div>
                  <div className="box-3">
                    <RelatedArticles searchingEntries={searchEntries} />
                  </div>
                  <div className="box-4">
                    <DisplaySearches searchEntries={searchBarResults} />
                  </div>
                </div>


                {/* <div className="box-4">
                    </div> */}



              </div>



              {/* <ApiSearcher  searchableEntries={apiSearches} apiArticles={apiSearches}   /> */}



            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/searchpage" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
