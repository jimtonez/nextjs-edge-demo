import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { teams } from '@/constants/premier'
import React, { useEffect, useState } from 'react'


function PremierTeams () {

    // const [teamData, setTeamData] = useState({ name: ''});

    // const createQueryString = useCallback(
    //     (name: string, value: string) => {
    //       const params = new URLSearchParams(searchParams);
    //       params.set(name, value);
    
    //       return params.toString();
    //     },
    //     [searchParams],
    // );

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4">
                <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
                    <p className='text-white text-base lg:text-xl font-semibold'>Teams</p>
                </div>
                <>
                {teams.map((team, index) => (
                    <Link href={{ pathname: `/leagues/premier/teams/${encodeURIComponent(team.team.id)}`, query: { name: team.team.name, logo: team.team.logo } }} key={team.team.id} className='flex col-span-1 aspect-w-3 aspect-h-2 cursor-pointer'>
                        <div className="flex flex-col items-center justify-center border border-dashed border-gray-700 hover:border-gray-600 rounded-xl shadow-md">
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className='text-white'>{team.team.name}</p>
                            </div>
                            <div className='flex items-center w-full h-full justify-center rounded-xl'>
                                <div className="flex h-36 w-36 xl:w-32 xl:h-32 aspect-h-2 items-center justify-center rounded-full">
                                    <Image priority className="object-cover rounded-xl" src={team.team.logo} alt="" width={90} height={90} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                </>
        </section>
    )
}

export default PremierTeams