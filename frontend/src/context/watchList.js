import { createContext, useState } from "react";
// import Asset from "../components/Asset/Asset";



export const WatchListContext = createContext();



export const WatchListContextProvider = props =>{
    const [watchList, setWatchList] = useState (["bitcoin", "ethereum", "tether", "binancecoin"]) // Assets to be displayed 
    
    return (
        <WatchListContext.Provider value={{ watchList }}>
            {props.children}
        </WatchListContext.Provider>
    );
};