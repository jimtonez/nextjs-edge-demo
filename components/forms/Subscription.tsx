"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { CheckCircleIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from "recoil"
import { firstNameState } from "@/atoms/firstNameAtom"
import { lastNameState } from "@/atoms/lastNameAtom"
import { subscriptionState } from "@/atoms/subscriptionAtom"

const subscriptions = [
    {
        name: "Standard",
        features: [
            {
                name: "Sports Betting"
            },
            {    
                name: "Live Stream"
            }
        ],
        price: "9.99"
    },
    {
        name: "Premium",
        features: [
            {
                name: "Sports Betting"
            },
            {    
                name: "Live Stream"
            },
            {    
                name: "Playback"
            },
            {    
                name: "Betting Tools"
            }

        ],
        price: "14.99"
    },
    {
        name: "Admin",
        features: [
            {
                name: "Dashboard"
            },
            {
                name: "Previews"
            },
            {
                name: "Analytics"
            },
            {
                name: "Goat Status"
            }
        ],
        price: "N/A"
    },
]

function Subscription () {

    const { data: session} = useSession()
    const [firstName, setFirstName] = useRecoilState(firstNameState)
    const [lastName, setLastName] = useRecoilState(lastNameState)
    const [ subscription, setSubscription] = useRecoilState(subscriptionState)

    return (
        <div className="flex flex-col h-[600px]">
            <div className="flex flex-col">
                <div className="flex flex-row w-auto items-center justify-start mt-10 space-x-4 lg:space-x-8 ">
                    <div className="flex h-20 w-20 sm:w-24 sm:h-24 rounded-full border border-gray-700 border-dashed">
                        <Image priority className="object-cover w-auto h-auto rounded-full" src={session?.user?.image!} width={75} height={75} alt="" />
                    </div>
                    <div className="flex flex-row  w-3/4 max-w-[250px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] space-x-2 sm:space-x-4 text-white text-4xl font-bold sm:text-5xl truncate line-clamp-1">
                        <p>{firstName + " " + lastName}</p>
                    </div>
                </div>
                <div role="hidden" className="mt-12 border-t border-gray-700">
                    <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-700 bg-[#070D0D]">Select a subscription</span>
                </div>
                <div className="flex w-full h-[350px] md:h-[350px] overflow-y-scroll scrollbar-hide md:overflow-none md:h-1/2 flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mt-4">
                    <>
                    {subscriptions.map((sub, i) => (
                        <div key={i} className={`flex hover:border-gray-600 w-auto md:w-1/3 h-full border ${sub.name === subscription ? 'border-gray-600 border-solid' : 'border-gray-700 border-dashed'} rounded-xl cursor-pointer`} onClick={() => setSubscription(sub.name)}>
                            <div className="flex flex-col w-full h-full items-center justify-center">
                                <div className={`flex relative w-full h-9 sm:h-20 md:h-1/4 items-center justify-center border-b ${sub.name === subscription ? 'border-gray-600 border-solid' : 'border-gray-700 border-dashed'} text-white p-4 sm:p-0`}>
                                    <p>{sub.name}</p>
                                    <div className={`${sub.name === subscription ? 'border-green-400 border-solid' : 'border-gray-700 border-dashed'} absolute h-5 w-5 rounded-full border border-gray-700 sm:top-2 right-2`}></div>   
                                </div>
        
                                <div className="flex flex-row md:flex-col items-center justify-center md:justify-start w-1/4 md:w-full h-full">
                                    <CheckCircleIcon className='h-10 w-10 md:hidden text-red-600' />
                                    {sub.features.map((feature, idx) => (
                                        <>
                                            <div key={idx} className="hidden md:flex flex-col sm:flex-row border border-dashed border-gray-700 rounded-xl sm:border-none w-full h-auto md:full items-center space-x-2 p-2">
                                                <CheckCircleIcon className="h-10 w-10 text-red-600" />
                                                <p className="hidden md:flex text-white">{feature?.name!}</p>

                                            </div>
                                        </>
                                    ))}
                                </div>
                                <div className={`flex items-center justify-center w-full md:border-t ${sub.name === subscription ? 'border-gray-600 border-solid' : 'border-gray-700 border-dashed'}  h-1/4 mb-2`}>
                                    <p className="text-white text-lg font-semibold p-2">${sub.price}</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    ))}
                    
                    </>

                </div>
            </div>
        </div>
    )

}

export default Subscription