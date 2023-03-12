"use client"
import { Inter } from '@next/font/google'
import Stack from '../../../../../components/Stack'
import Features from '../../../../../components/Features'
import TeamHeader from '@/components/TeamHeader'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Upcoming from '../../../../../components/Upcoming'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

interface PageProps {
    searchParams?: { name: string, logo: string }
}

export default function PremierTeam ({ searchParams }: PageProps) {

    const [isLoading, setIsLoading] = useState(false)
    const [tabState, setTabState] = useState("upcoming")
    const getEventsRef = useRef(false)

    const { data: session}  = useSession()
    const name = searchParams!.name
    const logo = searchParams!.logo

    const data = {
        name: name,
        logo: logo
    }

    const pathname = useRouter();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  return (
      <div className='space-y-4'>
        <TeamHeader name={data.name} logo={data.logo} />
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4 mt-4">
        <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
            <div className="flex flex-row w-full items-center justify-start space-x-2 pb-2 md:pb-4 border-b border-gray-700">
                <button onClick={() => setTabState("upcoming")} className={`${tabState === 'upcoming' ? 'bg-gray-600' : ''} text-sm  hover:bg-gray-600 text-white h-8 w-auto px-2 border border-gray-700 rounded-full`}>Upcoming Events</button>
                {/* <button onClick={() => setTabState("teams")} className={`${tabState === 'teams' ? 'bg-gray-600' : ''} text-sm hover:bg-gray-600 text-white h-8 w-auto px-2 border border-gray-700 rounded-full`}>Teams</button> */}
            </div>
        </div>
        </section>
        {session ? (
            <>
            </>
        ): (
            <Features />
        )}
        <Upcoming />
        <Stack />
      </div>
  )
}