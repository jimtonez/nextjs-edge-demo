import { events } from "@/constants"
import { StaticImageData } from "next/image";
import { useState } from 'react'

// interface Props {
//     team: string;
//     logo: StaticImageData;
//     odds: string;
//     trend: string;
// }

const MatchResult = () => {

    const [predictionState, setPredictionState] = useState("R")
    // const renderOdds = (result) => {
    //     <div className={`flex flex-col h-1/3 w-full items-center border-gray-700 border-dashed`}>
    //         <div key={result.team} className="flex flex-col w-8 md:w-14 h-8 md:h-14 rounded-xl border border-gray-700 p-4 space-x-4">
    //             <p className="text-white">{result.odds}</p>
    //         </div>
    //     </div>
    // }

    return (
        
         <div className={`flex flex-col h-10 w-20 items-center justify-center border border-green-300 border-dashed rounded-xl`}>
            <p className="text-white">151</p>
        </div>           
     
    )

}

export default MatchResult