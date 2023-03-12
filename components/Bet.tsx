import Image from 'next/image'
import Link from 'next/link'
import MatchResult from './predictions/soccer/MatchResult'

export type MatchType = {
    id: number,
    teams: Object,
    round: string
}

// interface Bet {
//     id: number,
//     teams: Object,
//     round: string
// }

function Bet () {

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 md:max-w-3xl lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4">
            <div className="flex flex-col items-center justify-center border border-dashed border-gray-700 hover:border-gray-600 rounded-xl shadow-md">
                <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                    <p className='text-white'>Away vs. Home</p>
                </div>
                <div className='flex flex-row items-center justify-around w-full h-full md:h-3/4 xl:h-full'>
                    <div className='flex flex-col w-full h-full items-center justify-around space-y-2 sm:space-y-none md:space-y-4 px-8 py-4 sm:py-12 sm:px-12 md:py-8 md:px-8'>                           
                        <div  className='flex flex-row w-full h-1/3 items-center justify-between'>
                            <div className={`w-12 sm:w-16 h-12 sm:h-16 md:h-10 md:w-10 lg:h-16 lg:w-16 rounded-full border-2 border-red-600`}>
                                {/* <Image src={event.teams.home.logo} alt="" className="object-cover w-auto h-auto text-white rounded-full" height={50} width={50} /> */}
                            </div>
                            <p className='flex sm:line-clamp-1 text-white'>Home</p>
                            
                        </div>
                        <div  className='flex flex-row w-full h-1/3 items-center justify-between'>
                            <div className={`w-12 sm:w-16 h-12 sm:h-16 md:h-10 md:w-10 lg:h-16 lg:w-16 rounded-full border-2 border-red-600`}>
                            </div>
                            <p className='flex sm:line-clamp-1 text-white'>Tie</p>
                            
                        </div>
                        <div  className='flex flex-row w-full h-1/3 items-center justify-between'>
                            <div className={`w-12 sm:w-16 h-12 sm:h-16 md:h-10 md:w-10 lg:h-16 lg:w-16 rounded-full border-2 border-red-600`}>
                                {/* <Image priority src={event.teams.away.logo} alt="" className="object-cover w-auto h-auto text-white rounded-full" height={50} width={50} /> */}
                            </div>
                            <p className='flex sm:line-clamp-1 text-white'>Away</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bet