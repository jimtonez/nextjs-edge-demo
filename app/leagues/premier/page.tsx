"use client"
import { Inter } from '@next/font/google'
import Stack from '../../../components/Stack'
// import { events } from '@/constants/premier'
import Leagues from '../../../components/Topics'
import Features from '../../../components/Features'
import LeagueHeader from '@/components/LeagueHeader'
import premier from '../../../public/premier.webp'
import { useEffect, useState, useRef } from 'react'
import Upcoming from '../../../components/Upcoming'
import PremierTeams from '@/components/PremierTeams'

const inter = Inter({ subsets: ['latin'] })

export type MatchType = [{
  id: number,
  teams: Object,
  round: string
}]

export default function Premier() {

    const [events, setEvents] = useState<MatchType[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const [tabState, setTabState] = useState("teams")
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

  return (
      <div className='space-y-4'>
        <LeagueHeader logo="🏴󠁧󠁢󠁥󠁮󠁧󠁿" name="Premier League" border="border-purple-700" />
        <Features />
        <Upcoming />
        <PremierTeams />
        <Stack />
      </div>
  )
}
