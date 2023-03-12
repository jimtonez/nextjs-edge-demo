import Image from 'next/image'
import Link from 'next/link'
import { leagues } from '@/constants'
import nhl from '../public/NHL-emblem.jpg'

function Leagues () {

    const renderLogo = (logo: any) => {
        if (logo === "nhl"){
            return (
                <Image className="object-fill rounded-xl" src={nhl} alt="" />
            )
        } else {
            return (
                <p className='text-8xl md:text-8xl'>{logo}</p>
            )
        } 
     }

    return (
        <section id="leagues" className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4 xl:px-0 xl:pl-4">
            <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
                <p className='text-white text-base lg:text-xl font-semibold'>Leagues</p>
            </div>
                <>
                {leagues.map((league, index) => (
                    <Link key={league.name} href={league.route} className='cursor-pointer aspect-w-3 aspect-h-2 col-span-1 lg:col-span-1'>
                        <div className="flex flex-col items-center justify-center border border-dashed border-gray-700 hover:border-slate-600 rounded-xl shadow-md">
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold">{league.name}</p>
                            </div>
                            <div className='flex items-center w-full h-full justify-center rounded-xl p-4'>
                                <div className="flex w-36 h-36 md:h-36 md:w-36 rounded-xl bg-black items-center justify-center border border-red-600">
                                    {renderLogo(league.logo)}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                </>
        </section>
    )
}

export default Leagues