import axios from 'axios'
import { WatchListContext } from '../../context/watchList'
import React, { useState, useEffect, useContext} from 'react'
import Asset from '../Asset/Asset';
// import CoinGeeko from '../apis/CoinGeeko'

// For setting the table to hold the tokens
const AssetList = () => {
    
   const [assets, setAssets] = useState ([{id:null, symbol:null, name:" ", block_time_in_minutes:" ", image:" ", market_data:" ", last_updated:" ", localization:""}])
   const { watchList } = useContext (WatchListContext); 
   const [isLoading, setIsLoading] = useState(false)

   
   useEffect(() => {
     const fetchData = async () => {
       setIsLoading(true)
       
       const response = await axios.get("https://api.coingecko.com/api/v3/coins/", {
         params: {
           vs_currency: "usd",
           ids: watchList.join(","),
          }
        });
        console.log(response.data) // All Assets Returned here!
        setAssets(response.data)
        console.log("AS ASSETS", assets)
        setIsLoading(false)
      }
      
      fetchData()
      
    }, []);
    
    const renderAssets = () => {
      
      if(isLoading) {
        return <div>Loading...</div>
      }
      
      return (
        <ul className="assetlist list-group mt-2">
          <AssetList />
          {/* {assets.map(asset => {
            return <Asset key={asset.id} asset={asset}/>
          })} */}
          </ul>
        )
        
      }
      console.log("WATCH LIST HERE!!!!", watchList)
      
  return (<div>{renderAssets()} {assets}</div>)
};

export default AssetList