"use client"
import { Inter } from '@next/font/google'
import Events from '../../components/Events'
import Stack from '../../components/Stack'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen flex-col scrollbar-hide'>
      <div className='space-y-4'>
        <RecoilRoot>
          <Events />
          <Stack />
        </RecoilRoot>
      </div>
    </main>
  )
}
