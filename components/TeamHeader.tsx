import Image, { StaticImageData } from 'next/image'
import { signIn } from 'next-auth/react'
import nhl from '../public/NHL-emblem.jpg'

interface TeamData {
    id: number,
    logo: string
    name: string
}

function TeamHeader (team: TeamData) {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4 mt-4">
            <div className={`col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-4 border border-gray-700 hover:border-gray-600 border-dashed rounded-xl bg-[#070D0D]`}>
                <div className="flex flex-row text-white rounded-xl rounded-r-none space-y-4 p-4">
                    <div className='flex items-start w-full h-full justify-start space-x-4'>
                        <div className='flex xs:w-1/3'>
                        <div className="flex w-28 h-28 md:w-36 md:h-36 rounded-xl bg-black items-center justify-center border border-red-600">
                            <Image className="object-fill rounded-xl" src={team.logo} alt="" width={90} height={90} />
                        </div>
                        </div>
                        <div className='flex xs:w-2/3'>
                        <h1 className='text-3xl md:text-5xl font-bold'>{team.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamHeader