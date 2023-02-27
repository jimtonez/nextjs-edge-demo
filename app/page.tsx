"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Leagues from '../components/Topics'
import Features from '../components/Features'
import Header from '../components/Header'
import Stack from '../components/Stack'
import NavBar from '../components/NavBar'
import TabList from '@/components/TabList'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [leagues, setLeagues] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      setIsLoading(true)
      fetch("https://v3.football.api-sports.io/teams?league=39&season=2022", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "89b7bc16f57fa2a0a569559b00671513"
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setLeagues(data)
        setIsLoading(false)
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <main className='flex h-screen flex-col'>
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
