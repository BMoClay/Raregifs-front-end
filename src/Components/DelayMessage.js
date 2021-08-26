// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const DelayMessage = (delay) => {

//     const [isVisible, setIsVisible] = useState(true);
//     const [delayMessage, setDelayMessage] = useState(false)
   
//     // useEffect(() =>
//     // {
//     //     setTimer(delay);
//     // }, []);

//     // const setTimer = (delay) =>
//     // {
//     //     setTimeout(() => setIsVisible(false), delay);
//     // };

//     useEffect(() => {
//         const timer = setTimeout(() => {
//           console.log('This will run after 1 second!')
//         }, 1000);
//         return () => clearTimeout(timer);
//       }, []);

//     return (
//         <div>
//             {isVisible ? (
//             <>
//             <div><h2>{delayMessage}</h2></div>
//             </>
//            ) : (
//                <>
//            <span />
//            </>
//            )}
//         </div>
//     )
// }

// export default DelayMessage
