// import React, { useEffect } from 'react';




// const MyComponent = props => {
//     useScript('https://use.typekit.net/foobar.js');
  
//     // rest of your component
//     useEffect(() => {
//       const script = document.createElement('script');
    
//       script.src = "https://use.typekit.net/foobar.js";
//       script.async = true;
    
//       document.body.appendChild(script);
    
//       return () => {
//         document.body.removeChild(script);
//       }
//     }, []);
    
//     const useScript = url => {
//       useEffect(() => {
//         const script = document.createElement('script');
    
//         script.src = url;
//         script.async = true;
    
//         document.body.appendChild(script);
    
//         return () => {
//           document.body.removeChild(script);
//         }
//       }, [url]);
//     };
  
//   return (
//     <body>
  
//       <script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js"></script>
//       <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
//     </body>
//   );
  
//   }
  
  
//   export default MyComponent;