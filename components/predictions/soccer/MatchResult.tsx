interface Odds {
    number: number
}

const MatchResult = ( odds: Odds ) => {

    return (
        
         <div className={`flex flex-col h-10 w-20 items-center justify-center border border-green-300 border-dashed rounded-xl`}>
            <p className="text-white">{odds.number}</p>
        </div>           
     
    )

}

export default MatchResult