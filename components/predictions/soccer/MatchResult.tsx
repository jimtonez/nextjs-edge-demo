import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { betSlipState } from '@/atoms/betSlipAtom'
import { betsState } from '@/atoms/betsAtom'
import { uuid } from 'uuidv4';

interface Bet {
    strike: number,
    event_id: string
}

const MatchResult = ( bet: Bet ) => {

    const [openBetSlip, setOpenBetSlip] = useRecoilState(betSlipState)
    const [bets, setBets] = useRecoilState(betsState)
    const [selected, setSelected] = useState(false)
    const [betId, setBetId] = useState("")

    const handleStrike = () => {
        const newId = uuid()
        console.log(bet.event_id)
        setBets([
            ...bets,
            {   
                id: newId,
                strike: bet.strike,
                event_id: bet.event_id,
                bet_amt: 50
            },
        ]);
        setBetId(newId)
        setSelected(true)
        setOpenBetSlip(true)
    }

    useEffect(() => {
        if (selected) {
            let queue = false
            for (const strike of bets) {
                if (strike.id === betId ) {
                    queue = true
                } 
            }
            if (!queue) {
                setSelected(false)
            }
        }
    }, [bets])

    return (
        
         <button disabled={selected} onClick={handleStrike} className={`flex flex-col h-10 w-20 items-center justify-center border ${selected ? "border-gray-700 animate-none" : 'border-green-400 hover:border-green-200 border-dashed animate-pulse'} rounded-xl`}>
            <p className="text-white">{bet.strike}</p>
        </button>           
     
    )

}

export default MatchResult