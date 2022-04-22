import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
// import axios from 'axios';
const RelatedCharts = ({ chartedEntries }) => {

    const [goodCounts, setGoodCounts] = useState();// Counter for Good counts
    const [badCounts, setBadCounts] = useState(); // Counter for Bad counts
    const [counter, setCounter] = useState(0)
    // console.log("Made it RELATED",chartedEntries)


    const goodDayCount = () => {

        let counts = 0;
        chartedEntries.forEach((entries) => { counts += entries.good });

        console.log("counted good", goodCounts)


        console.log(`There are ${counts} good days`)
        setCounter(counts)
        return true;
    };

    const badDayCount = () => {

        let counts = 0;
        chartedEntries.forEach((entries) => { counts += entries.bad });
        
        console.log("counted good", badCounts)
        
        
        console.log(`There are ${counts} Bad days`)
        setCounter(counts)
        return true;
    };
    
    function handleSubmit(e) {
        
        goodDayCount();
        badDayCount();
        e.preventDefault(e);
    }
    useEffect(() => {
        goodDayCount();
        setGoodCounts(counter);// adds 1 to counter for "Good"
        badDayCount();
        setBadCounts(counter);// adds 1 to counter for "Good"
    }, []);

    const data = [
        ["Investment Bias", "Articles Saved"],
        ["Good Investment Days", goodCounts],
        ["Bad Investment Days", badCounts],

    ];


    const options = {
        title: "My Daily Invesment Bias",
    };


    return (
        <div >
            <form  onSubmit={handleSubmit} >
                <button className='button' >Get Bias Chart</button>
            </form>

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
}


export default RelatedCharts;
