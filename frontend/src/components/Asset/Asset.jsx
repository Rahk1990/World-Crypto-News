import React, {useState} from "react";
// import { Link } from "react-router-dom";
import assets from "../AssetList/AssetList";



const Asset = () => {
const [asset, setAsset] = useState ([])


let assetsList = assets.data

setAsset(assetsList.data)
console.log(asset)

  return (
  <div><Asset /></div>
  );
};

export default Asset;