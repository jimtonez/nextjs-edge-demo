"use client"
import Image from 'next/image'
import { events } from "../constants"
import { useState } from "react"
import { useRecoilState } from 'recoil'
import { sportsState } from '@/atoms/sportsAtom'
import MatchResult from './predictions/soccer/MatchResult'

function SoccerEvents () {

    const [currentSport, setCurrentSport] = useRecoilState(sportsState)
    const [ predictionState, setPredictionState ] = useState("R")

    const handlePredictionState = (tab: string) => {
        setPredictionState(tab)
        console.log(predictionState)
    }

    const renderOdds = (tab: string) => {


    }

    return (

            <div className='flex flex-col lg:w-3/4 md:px-4'>
                <ul className='list-none flex flex-col space-y-4'>
                    {events.map((event, index) => (
                        <li key={event.id} className='cursor-pointer'>
                            <div className='flex flex-col aspect-w-4 aspect-h-1 sm:aspect-w-5 sm:aspect-h-1'>
                                <div className='flex w-auto h-auto items-center justify-center rounded-t-xl border border-b-0 border-gray-700 p-2 md:p-4 space-x-2 md:space-x-4'>
                                    {event.teams?.map((team, index) => (
                                        <div key={team.name} className='flex flex-col text-white w-full h-full items-center justify-center border border-gray-700 border-dashed rounded-xl p-2 lg:p-4'>
                                            <div className={`${index === 1 ? 'hidden' : 'flex'} w-14 h-14 md:w-16 md:h-16 rounded-full border border-red-600 border-2`}>
                                                <Image src={team.logo} alt="" className="object-cover h-auto w-auto rounded-full" />
                                            </div>
                                            <p className={`${index === 1 ? 'text-2xl font-bold sm:flex' : 'hidden'}`}>{event.score}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col aspect-w-3 aspect-h-2'>
                                <div className='flex'>
                                    <iframe key={event.id} id={event.id} className="border-l border-r border-gray-700" width="100%" height="100%" src={event.url} />
                                </div>
                            </div>
                            <div className='flex flex-col aspect-w-3 sm:aspect-w-2 aspect-h-2 sm:aspect-h-1'>
                                <div className='flex flex-col bg-[#070D0D] rounded-b-xl border border-gray-700 border-t-0 hover:bg-opacity-80 p-2 md:p-4 space-y-2 md:space-y-4'>
                                    <div className='hidden sm:flex flex-row w-full h-auto items-center space-x-2'>
                                        <div className='flex w-1/8'>
                                            <div className="flex h-12 lg:h-14 w-12 lg:w-14 rounded-full border border-red-600 border-2">
                                                <Image priority src={event.logo} alt="" className="object-cover h-auto w-auto rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex w-7/8 text-white text-base md:text-lg font-normal md:font-semibold">
                                            <h1 className='line-clamp-2'>{event.title}</h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center justify-between space-x-2'>
                                        {event.tags?.map((tag) => (
                                            <div key={tag.name} className='flex h-6 lg:h-8 w-auto items-center justify-between bg-gray-700 border border-red-600 rounded-full space-x-3 p-3'>
                                                <div className='w-1/4'>
                                                    <p>{tag.icon}</p>
                                                </div>
                                                <div className='w-3/4 text-white'>
                                                    <p>{tag.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex flex-row w-full h-full items-center justify-between space-x-2 md:space-x-4'>
                                        {event.predictions?.map((prediction) => (
                                            <div key={prediction.name} className='flex flex-col w-full h-full border border-gray-700 border-dashed rounded-xl'>
                                                <div className='flex flex-row h-1/4 w-full items-center rounded-t-xl border-b border-gray-700 border-dashed'>
                                                    <div className='flex justify-center w-3/4 lg:w-1/2'>
                                                        <h1 className='text-white'>{prediction.name}</h1>
                                                    </div>
                                                    <div className='flex justify-center w-1/4 lg:w-1/2 flex-row items-end space-x-2'>
                                                    {prediction.tabs?.map((tab, index) => (
                                                        <div onClick={() => handlePredictionState(tab.name.charAt(0))} key={tab.name} className={`${index !== 0 ? 'hidden lg:flex' : 'flex'} h-8 xl:h-10 w-8 xl:w-10 bg-gray-700 items-center justify-center rounded-full border border-red-600 border-2`}>
                                                            <p>{tab.name.charAt(0)}</p>
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                                <div className='flex flex-row items-center justify-around w-full h-full'>
                                                    <div className='flex flex-col w-auto h-full items-center justify-around'>
                                                    {event.teams.map((team, index) => (
                                                        <div key={team.name} className='flex w-full h-auto items-center p-1 space-x-4'>
                                                            <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-red-600`}>
                                                                <Image priority src={team.logo} alt="" className="object-cover text-white h-auto w-auto rounded-full" />
                                                            </div>
                                                            <p className='hidden sm:flex sm:line-clamp-1 text-white'>{team.name}</p>
                                                        </div>
                                                    ))}
                                                    </div>
                                                    <div className='flex flex-col w-auto h-full items-center justify-around p-1'>
                                                        {prediction.tabs?.map((tab, index) => (
                                                            <div key={index} className='flex flex-col w-auto h-auto'>
                                                                <MatchResult strike={150} event_id={event.title} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    )

}

export default SoccerEvents