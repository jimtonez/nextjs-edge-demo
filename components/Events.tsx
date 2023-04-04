"use client"
import Image from 'next/image'
import proBowl from '../public/probowl.jpg'
import { events } from "../constants"
import { useState } from "react"
import { useRecoilState } from 'recoil'
import { sportsState } from '@/atoms/sportsAtom'
import MatchResult from './predictions/soccer/MatchResult'
import TabList from './TabList'
import BetSlip from './BetSlip'
import SoccerEvents from './SoccerEvents'
import NHLEvents from './NHLEvents'


function Events () {

    const [currentSport, setCurrentSport] = useRecoilState(sportsState)

    const renderSport = () => {
        if (currentSport === "Soccer") {
            return (
                <SoccerEvents />
            )
        } else if (currentSport === "BasketBall" ) {
            return (
                <>
                </>
            )
        } else if (currentSport === "Hockey" ) {
            return (
                <NHLEvents />
            )
        }
    }

    return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto">
        <BetSlip />
        <TabList />
        <div className='col-span-1 md:col-span-2 lg:col-span-4 shadow-md'>
            {renderSport()}
        </div>
    </section>
    )

}

export default Events