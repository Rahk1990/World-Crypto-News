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
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";
import AssetList from "./components/AssetList/AssetList";






function App() {
  
  const [searchEntries, setSearchEntries] = useState([]);

  const searchArticles = (searchEntries) => {
  setSearchEntries(searchEntries)
  console.log(searchEntries)
    
  let searches = searchEntries.filter((article) => {
    if(article.name.toLowerCase().includes(searchEntries.toLowerCase())){
      return true
    }
    else return false
  }
  )
  console.log(searches)
  setSearchEntries(searches)
};
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

          
              <ArticleList />
       
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
