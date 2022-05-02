import React from "react";
// import { Link } from "react-router-dom";




const Asset = ({asset}) => {

// setAsset(assetsList.data)
console.log(asset, 'Asset Page')

  return (
  <div >

    <li className="assetlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-light">
        <img className="assetlist-image" src={asset.image} alt={asset.id} />
        <span className="text-decoration-none">{asset.current_price}</span>
        <span className="text-success mr-2">
          <i className="fas fa-sort-down align-middle mr-1"></i>
          {asset.price_change_percentage_24}
        </span>
        
        {/* <span
          className={
            asset.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {asset.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {asset.price_change_percentage_24h}
        </span> */}
        {/* <i className="delete-icon far fa-times-circle text-danger"></i> */}
    </li>
  </div>
    
  );
};

export default Asset;