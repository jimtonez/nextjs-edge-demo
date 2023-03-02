import { Inter } from '@next/font/google'
import Stack from '../../../components/Stack'
import Teams from '../../../components/Teams'
import Features from '../../../components/Features'
import LeagueHeader from '@/components/LeagueHeader'
import ncaa from '../../../public/ncaa.png'
import StaticTeams from '../../../components/StaticTeams'

const inter = Inter({ subsets: ['latin'] })

export default function NCAA() {

  return (
      <div className='space-y-4'>
        <LeagueHeader logo="🏀" name="NCAA Basketball" border="border-blue-300" />
        {/* <Teams league="ncaa" /> */}
        <StaticTeams league="ncaa" />
        <Features />
        <Stack />
      </div>
  )
}
