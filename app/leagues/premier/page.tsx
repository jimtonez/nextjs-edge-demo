"use client"
import { Inter } from '@next/font/google'
import Stack from '../../../components/Stack'
import Leagues from '../../../components/Topics'
import Features from '@/components/Features'
import LeagueHeader from '@/components/LeagueHeader'
import premier from '../../../public/premier.webp'
import { useEffect, useState } from 'react'
import Upcoming from '../../../components/Upcoming'

const inter = Inter({ subsets: ['latin'] })

export default function Premier() {

  return (
      <div className='space-y-4'>
        <LeagueHeader logo="🏴󠁧󠁢󠁥󠁮󠁧󠁿" name="Premier League" border="border-purple-700" />
        <Upcoming league="premier" />
        <Features />
        <Stack />
      </div>
  )
}
