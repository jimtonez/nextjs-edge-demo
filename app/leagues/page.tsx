import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import Features from '../../components/Features'
import Stack from '../../components/Stack'
import Leagues from '@/components/Topics'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='flex h-screen flex-col'>
      <div className='space-y-4'>
        <Leagues />
        <Features />
        <Stack />
      </div>
    </main>
  )
}
