import React, {useState, useEffect} from 'react';
import { Chart } from "react-google-charts";
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
            
            const data = [
                ["Investment Bias", "Articles Saved"],
                ["Good Investment Days", goodCounts],
                ["Bad Investment Days", badCounts],

              ]; 
            

              const options = {
                title: "My Daily Invesment Bias",
              };

              
            return(
                <div className='box-1'key={chartedEntries.index}>


            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
                />
        <form onSubmit={handleSubmit} >
        <button >Count</button>
        </form>


   


    </div>

        
        );

}


export default RelatedCharts;
