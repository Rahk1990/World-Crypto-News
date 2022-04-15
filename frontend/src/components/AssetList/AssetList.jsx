import axios from 'axios'
import { WatchListContext } from '../../context/watchList'
import React, { useState, useEffect, useContext} from 'react'
import Asset from '../Asset/Asset';
// import CoinGeeko from '../apis/CoinGeeko'

// For setting the table to hold the tokens

// id:null, symbol:null, name:" ", block_time_in_minutes:" ", image:" ", market_data:" ", last_updated:" ", localization:""
const AssetList = () => {
    
   const [assets, setAssets] = useState ([]);
   const { watchList } = useContext (WatchListContext); 
   const [isLoading, setIsLoading] = useState(false);

   
   useEffect(() => {
     const fetchData = async () => {
       setIsLoading(true)
       
       const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbnb%2Ctether&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
         params: {
           vs_currency: "usd",
           ids: watchList.join(","),
          },
        });
        console.log("Data from Coingeeko API request",response.data) // All Assets Returned here!
        setAssets(response.data);
        console.log("Success conv to 'assets' array", [{assets}])
        setIsLoading(false);
      };
      
      fetchData();
      
    },[]);
    


    const renderAssets = () => {
      
      if(isLoading) {
        return <div>Loading...</div>;
      }
      
      return (
        <ul className="assetlist list-group mt-2">

          {assets.map(asset => {
            return <Asset key={asset.id} asset={asset} />;
          })}
          </ul>
        );
        
      };
      
      console.log("WATCH LIST HERE!!!!2", watchList)
      
    return <div>{renderAssets()}</div>

    };

export default AssetList