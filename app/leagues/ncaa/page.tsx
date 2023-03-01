import { Inter } from '@next/font/google'
import Stack from '../../../components/Stack'

const inter = Inter({ subsets: ['latin'] })

export default function Premier() {

  return (
      <div className='space-y-4'>
        <h1 className='text-white'>NCAA</h1>
        <Stack />
      </div>
  )
}
