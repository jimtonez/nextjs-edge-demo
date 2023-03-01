import Image from 'next/image'
import Link from 'next/link'
import { leagues } from '@/constants'

function Leagues () {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4">
            <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
                <p className='text-white text-base lg:text-xl font-semibold'>Leagues</p>
            </div>
                <>
                {leagues.map((league, index) => (
                    <div key={league.name} className='cursor-pointer aspect-w-3 aspect-h-2 col-span-1 lg:col-span-1 xl:col-span-2'>
                        <Link href={league.route} className="flex flex-col items-center justify-center bg-[#212427] border border-gray-700 rounded-xl shadow-md">
                            <div className="flex bg-[#070D0D] border-b border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold">{league.name}</p>
                            </div>
                            <div className='flex items-center w-full h-full justify-center rounded-xl p-4'>
                                <div className="flex h-1/3 w-1/3 aspect-h-2 items-center justify-center">
                                    <Image className="object-contain rounded-xl" src={league.logo} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                </>
        </section>
    )
}

export default Leagues