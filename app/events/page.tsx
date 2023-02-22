import { Inter } from '@next/font/google'
import Leagues from '../../components/Topics'
import Events from '../../components/Events'
import Stack from '../../components/Stack'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen flex-col'>
      <div className='space-y-4'>
        <Events />
        <Leagues />
        <Leagues />
        <Stack />
      </div>
    </main>
  )
}
