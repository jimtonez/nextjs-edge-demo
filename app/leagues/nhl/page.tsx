"use client"
import { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/navigation'
import Stack from '../../../components/Stack'
import Features from '@/components/Features'
import Upcoming from '../../../components/Upcoming'
import LeagueHeader from '@/components/LeagueHeader'
import nhl from '../../../public/NHL-emblem.jpg'
import NHLTeams from '@/components/NHLTeams'

const inter = Inter({ subsets: ['latin'] })

export type MatchType = [{
  id: number,
  teams: Object,
  round: string
}]

export default function NHL() {

  const [events, setEvents] = useState<MatchType[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [tabState, setTabState] = useState("upcoming")
  const { data: session } = useSession()
  const getEventsRef = useRef(false)

  const fetchUpcmoming = async () => {
    const res = await fetch(`/api/leagues/premier/upcoming`);
    const data = await res.json();
    for (const match of data) {
      events.push({...match})
    }
    // console.log(events)
    setIsLoading(false)
  }
  
  useEffect(() => {
      setIsLoading(true)
      if (getEventsRef.current) return;
      getEventsRef.current = true;
      fetchUpcmoming()
  },[])

    const pathname = useRouter();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  return (
      <div className='space-y-4'>
        <LeagueHeader logo="nhl" name="NHL" border="border-purple-700" />
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4 mt-4">
        <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
          <div className="flex flex-row w-full items-center justify-start space-x-2 pb-2 md:pb-4 border-b border-gray-700">
              <button onClick={() => setTabState("upcoming")} className={`${tabState === 'upcoming' ? 'bg-gray-600' : ''} text-sm  hover:bg-gray-600 text-white h-8 w-auto px-2 border border-gray-700 rounded-full`}>Upcoming Events</button>
              <button onClick={() => setTabState("teams")} className={`${tabState === 'teams' ? 'bg-gray-600' : ''} text-sm hover:bg-gray-600 text-white h-8 w-auto px-2 border border-gray-700 rounded-full`}>Teams</button>
          </div>
        </div>
        </section>
        {session ? (
            <>
            </>
        ): (
            <Features />
        )}
        {tabState === "upcoming" ? (
          <Upcoming />
        ) : (
          <NHLTeams />
        )}
        <Stack />
      </div>
  )
}
