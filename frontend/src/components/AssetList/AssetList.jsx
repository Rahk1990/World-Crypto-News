import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import CoinGeeko from '../apis/CoinGeeko'

// For setting the table to hold the tokens
const AssetList = () => {
    
   const [assets, setAssets] = useState ([])
    
    useEffect(() => {
        const fetchData = async () => {

          
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
              // params: {
              //   vs_currency: "usd",
              //   ids: "bitcoin,ethereum"
              // }
            })
            console.log(response.data)
            setAssets(response.data)
            console.log("AS ASSETS", assets)
        }

        fetchData()

      }, [])
  return (
    <div>AssetList</div>
  )
}

export default AssetList