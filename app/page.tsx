import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Leagues from '../components/Topics'
import Features from '../components/Features'
import Header from '../components/Header'
import Stack from '../components/Stack'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen flex-col'>
      <Header />
      <div className='space-y-4'>
        {/* <Hero /> */}
        <Features />
        <Leagues />
        <Leagues />
        <Stack />
      </div>
      <NavBar />
    </main>
  )
}
