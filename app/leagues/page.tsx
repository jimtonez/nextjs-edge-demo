import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import Events from '../../components/Events'
import Stack from '../../components/Stack'
import Leagues from '@/components/Topics'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='flex h-screen flex-col'>
      <div className='space-y-4'>
        <Leagues />
        <Stack />
      </div>
    </main>
  )
}