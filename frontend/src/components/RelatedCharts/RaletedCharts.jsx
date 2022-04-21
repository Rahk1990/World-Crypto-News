import React, {useState, useEffect} from 'react';
// import axios from 'axios';
const RelatedCharts = ({chartedEntries}) => {;
    
    const [goodCounts, setGoodCounts] = useState() ;// Counter for Good counts
    const [badCounts, setBadCounts] = useState(); // Counter for Bad counts
    
    console.log("Made it RELATED",chartedEntries)
    function handleSubmit(e){
        goodDayCount();
        badDayCount();
        e.preventDefault(e);
    }
    
    
    const goodDayCount = (chartedEntries) =>{
        
        const response = chartedEntries.filter((entries) => {
        
            let data = entries.good;
            let counter = 0;
            let newlyCounted = data.map((entries) => {;
                if(entries.good===true){
                    
                    let counts = counter + 1;
                    console.log(counts)
                    return true;
                
                    // entries.good === true})
            }else{
                return true;
            }
        });
            
            console.log(response)
            console.log("counted", newlyCounted)
            console.log("counted good", goodCounts)
            setGoodCounts(counter) ;// adds 1 to counter for "Good"
            
        }
        
        );
        return;
    };
    
        const badDayCount = (chartedEntries) => {
            const response = chartedEntries.filter((entries) => {
            let data = entries.bad
            let counter = 0;
            let newlyCountedBad = data.map((entries) => {
                if(entries.bad===true) {
            
                    
                    let counts = counter + 1;
                    console.log(counts)
                    return counts;
                    // entries.bad === true});
            }
            else{
                return true;
            }});    
 
            console.log(response.data)
            console.log("counted", newlyCountedBad)
            console.log("counted good", badCounts)
            setBadCounts(newlyCountedBad) // adds 1 to counter for "Bad"
        });
        return true;
    };
    
    // useEffect(() => {
    //     goodDayCount();
    //     badDayCount();
    // }, []);


            
        return(
            <div className='box-1'key={chartedEntries.index}>
               <form onSubmit={handleSubmit} >
               <button >Count</button>
               </form>

                {/* <td>{article.index }</td> */}
                <h3>{`Good Counts are${goodCounts}`}</h3>
                <h3>{chartedEntries.id}</h3>
                <h3>{chartedEntries.good}</h3>
                {/* <h3>{article.title}</h3>
                <h3>{article.author}</h3>
                <h3>{article.urls}</h3>
                <h3>{article.comment}</h3> */}

            </div>
        
        
        
        
        
        
        );
                
            


}
export default RelatedCharts;

