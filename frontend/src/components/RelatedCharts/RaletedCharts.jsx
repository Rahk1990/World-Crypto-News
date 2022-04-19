import React, {useEffect, useState} from 'react';
// import axios from 'axios';


const RelatedCharts = ({chartedEntries}) => {
    
    // const [goodCounts, setGoodCounts] = useState([])
    // console.log(chartedEntries.author)
    // useEffect(() => {
    
    // function DisplayDayChart(){
        
    //     console.log(chartedEntries)
        
    //     async function goodDayCount(){chartedEntries.filter(entries => entries.good)};
    //     setGoodCounts(response.data)
    //     console.log("Good",goodDayCount.results)
        
    //     const goodCount = () => chartedEntries.map(entries => entries.good).count();
    //     console.log("GOOD",goodCount)
    //     // setGoodCounts(goodCount)
    //     // let badDayCount = chartedEntries.filter(entries => entries.bad).count();
    //     // let badCount = badDayCount.map(entries => entries.bad).count();
    //     // console.log("BAD!",badCount)
    
// }

// DisplayDayChart();
// DisplayDayChart();
// }, []);

    return(

        <div>
        <h2>Relative Articles</h2>
            {chartedEntries.map((article) => {
                console.log("CHARTPAGE",article)

                return(
                    <div className='box-1'key={article.index}>
                        
                        {/* <td>{article.index }</td> */}
                        <h3>{article.id}</h3>
                        <h3>{article.good}</h3>
                        {/* <h3>{article.title}</h3>
                        <h3>{article.author}</h3>
                        <h3>{article.urls}</h3>
                        <h3>{article.comment}</h3> */}

                    </div>
                    );
                })}


    </div>

    );

}
export default RelatedCharts

