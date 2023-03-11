import Image from 'next/image'
import Link from 'next/link'
import { events } from '@/constants/premier'
import MatchResult from './predictions/soccer/MatchResult'

export type MatchType = {
    id: number,
    teams: Object,
    round: string
}

// interface Events {
//     id: number,
//     teams: Object,
//     round: string
// }

function Upcoming () {

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 md:max-w-3xl lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4">
                <>
                <div className='col-span-1 md:col-span-4'>
                    <p className='text-white text-base lg:text-xl font-semibold'>Upcoming Events</p>
                </div>
                {events.map((event, index) => (
                    <div key={event.fixture.id} className='flex col-span-1 md:col-span-2 aspect-w-3 aspect-h-2 cursor-pointer'>
                        <div className="flex flex-col items-center justify-center border border-dashed border-gray-700 hover:border-gray-600 rounded-xl shadow-md">
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className='text-white'>{event.teams.away.name} vs. {event.teams.home.name}</p>
                            </div>
                            <div className='flex flex-row items-center justify-around w-full h-3/4'>
                                <div className='flex flex-col w-full h-full items-center justify-around space-y-4 p-8'>                           
                                    <div  className='flex flex-row w-full h-auto items-center justify-between gap-8'>
                                        <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-red-600`}>
                                            <Image src={event.teams.home.logo} alt="" className="object-cover text-white rounded-full" height={50} width={50} />
                                        </div>
                                        <p className='flex sm:line-clamp-1 text-white'>{event.teams.home.name}</p>
                                        <MatchResult number={event.odds.home} />
                                    </div>
                                    <div  className='flex flex-row w-full h-auto items-center justify-between gap-8'>
                                        <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-red-600`}>
                                        </div>
                                        <p className='flex sm:line-clamp-1 text-white'>Tie</p>
                                        <MatchResult number={event.odds.tie} />
                                    </div>
                                    <div  className='flex flex-row w-full h-auto items-center justify-between gap-8'>
                                        <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-red-600`}>
                                            <Image src={event.teams.away.logo} alt="" className="object-cover text-white rounded-full" height={50} width={50} />
                                        </div>
                                        <p className='flex sm:line-clamp-1 text-white'>{event.teams.away.name}</p>
                                        <MatchResult number={event.odds.away} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </>
        </section>
    )
}

export default Upcoming