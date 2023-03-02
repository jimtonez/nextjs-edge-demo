import { Inter } from '@next/font/google'
import Leagues from '../components/Topics'
import Features from '../components/Features'
import Header from '../components/Header'
import Stack from '../components/Stack'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='flex h-screen flex-col overflow-y-scroll scrollbar-hide'>
      <Header />
      <div className='space-y-4'>
        <Features />
        <Leagues />
        <Stack />
      </div>
      <NavBar />
    </main>
  )
}
