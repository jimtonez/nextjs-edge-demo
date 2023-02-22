import { Inter } from '@next/font/google'
import Leagues from '../../components/Topics'
import Hero from '../../components/Hero'
import Stack from '../../components/Stack'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen flex-col'>
      <div className='space-y-4'>
        <Hero />
        <Leagues />
        <Leagues />
        <Stack />
      </div>
    </main>
  )
}
