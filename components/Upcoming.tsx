"use client"
import Image from 'next/image'
import Link from 'next/link'
import { leagues } from '@/constants'
import React, { useEffect, useState } from 'react'
import { PassThrough } from 'stream'

export type MatchType = {
    id: number,
    teams: Object,
    round: string
}

interface League {
    league: string
}

function Upcoming ( league: League ) {

    const [events, setEvents] = useState<MatchType[]>([]);
    const [isLoading, setIsLoading] = useState(false)
  
    const fetchUpcmoming = async () => {
      const res = await fetch(`/api/leagues/${league}/upcoming`);
      const data = await res.json();
    
    for (const event of data) {
        events.push({...event})
    }
    console.log(events)
    }
    
    useEffect(() => {
    //   fetchUpcmoming()
    },[])

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4">
                <>
                {events.map((event, index) => (
                    <Link key={event.id} href="/events" className='cursor-pointer aspect-w-3 aspect-h-2 col-span-1 lg:col-span-1'>
                        <div className="flex flex-col items-center justify-center bg-[#212427] border border-gray-700 rounded-xl shadow-md">
                            <div className="flex bg-[#070D0D] border-b border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold">{event.round}</p>
                            </div>
                            <div className='flex items-center w-full h-full justify-center rounded-xl p-4'>
                                <div className="flex h-1/3 w-1/3 aspect-h-2 items-center justify-center">
                                    {/* <Image className="object-contain rounded-xl" src={league.logo} alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                </>
        </section>
    )
}

export default Upcoming