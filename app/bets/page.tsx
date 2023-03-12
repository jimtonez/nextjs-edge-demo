import { Inter } from '@next/font/google'
import Events from '../../components/Events'
import Stack from '../../components/Stack'
import Bets from '@/components/Bets'
import TabList from '@/components/TabList'
import Upcoming from '@/components/Upcoming'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen flex-col'>
      <div className='space-y-4'>
        <Bets />
        <Stack />
      </div>
    </main>
  )
}
