import { createContext, useState } from "react";
import Asset from "../components/Asset/Asset";



export const WatchListContext = createContext();



export const WatchListContextProvider = props =>{
    const [watchList, setWatchList] = useState ([])
    
    return (
        <WatchListContext.Provider value={{ watchList }}>
            {props.children}
        </WatchListContext.Provider>
    );
};