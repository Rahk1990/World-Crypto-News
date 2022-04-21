import React, {useState, useEffect} from 'react';
// import axios from 'axios';
const RelatedCharts = ({chartedEntries}) => {

    const [goodCounts, setGoodCounts] = useState(0) ;// Counter for Good counts
    const [badCounts, setBadCounts] = useState(0); // Counter for Bad counts
    
    // console.log("Made it RELATED",chartedEntries)
    
    
    const goodDayCount = () => {
   
        let counter = 0;
        chartedEntries.forEach((entries) => { counter += entries.good});

                console.log("counted good", goodCounts)
    
            
            console.log(`There are ${counter} good days`)
            setGoodCounts(counter) ;// adds 1 to counter for "Good"
            return true;
        };
    const badDayCount = () => {
   
        let counter = 0;
        chartedEntries.forEach((entries) => { counter += entries.bad});

                console.log("counted good", badCounts)
    
            
            console.log(`There are ${counter} Bad days`)
            setBadCounts(counter) ;// adds 1 to counter for "Good"
            return true;
        };

        function handleSubmit(e){

            goodDayCount();
            badDayCount();
            e.preventDefault(e);
        }
        useEffect(() => {
                goodDayCount();
                badDayCount();
            }, []);
            
            
            
            return(
                <div className='box-1'key={chartedEntries.index}>
        <form onSubmit={handleSubmit} >
        <button >Count</button>
        </form>


        <h3>{`Good Counts are${goodCounts}`}</h3>
        <h3>{chartedEntries.id}</h3>
        <h3>{chartedEntries.good}</h3>


    </div>

        
        );

}


export default RelatedCharts;
