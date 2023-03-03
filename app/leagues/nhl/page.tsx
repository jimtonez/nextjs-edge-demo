import { Inter } from '@next/font/google'
import Stack from '../../../components/Stack'
import Features from '@/components/Features'
import Teams from '../../../components/Teams'
import LeagueHeader from '@/components/LeagueHeader'
import nhl from '../../../public/NHL-emblem.jpg'
import NHLTeams from '@/components/NHLTeams'

const inter = Inter({ subsets: ['latin'] })

export default function NHL() {

  return (
      <div className='space-y-4'>
        <LeagueHeader logo="nhl" name="NHL" border="border-white" />
        <Features />
        <NHLTeams />
        <Stack />
      </div>
  )
}
