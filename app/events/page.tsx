import { Inter } from '@next/font/google'
import { RecoilRoot } from 'recoil'
import Events from '../../components/Events'
import Stack from '../../components/Stack'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-screen flex-col scrollbar-hide'>
      <div className='space-y-4'>
        <Events />
        <Stack />
      </div>
    </main>
  )
}
