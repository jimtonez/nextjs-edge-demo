"use client"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import { firstNameState } from "@/atoms/firstNameAtom"
import { lastNameState } from "@/atoms/lastNameAtom"
import { subscriptionState } from "@/atoms/subscriptionAtom"
import { paymentState } from "@/atoms/paymentAtom"
import Summary from "./Summary"
import { CheckCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline"


function Confirm () {

    const { data: session} = useSession()
    const [firstName, setFirstName] = useRecoilState(firstNameState)
    const [lastName, setLastName] = useRecoilState(lastNameState)
    const [ subscription, setSubscription] = useRecoilState(subscriptionState)
    const [payment, setPayment] = useRecoilState(paymentState)

    const renderSummary = () => {
        if ( subscription === "Standard" ) {
            return (
                <Summary name={subscription} price="$9.99" />
            )
        } else if (subscription === "Premium") {
            return(
                <Summary name={subscription} price="$14.99" />
            )
        } else if (subscription === "Admin") {
            return (
                <Summary name={subscription} price="N/A" />
            )
        }
    }
    

    return (
            <div className="flex flex-col h-[600px]">
                <div className="flex flex-col">
                    <div className="flex flex-row w-auto items-center justify-start mt-10 space-x-4 lg:space-x-8 ">
                        <div className="flex h-20 w-20 sm:w-24 sm:h-24 rounded-full border border-gray-700 border-dashed">
                            <Image priority className="object-cover w-auto h-auto rounded-full" src={session?.user?.image!} width={75} height={75} alt="" />
                        </div>
                        <div className="flex flex-row w-3/4 max-w-[250px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] space-x-2 sm:space-x-4 text-white text-4xl font-bold sm:text-5xl truncate line-clamp-1">
                            <p>{firstName + " " + lastName}</p>
                        </div>
                    </div>
                    <div role="hidden" className="mt-12 border-t border-gray-700">
                        <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-700 bg-[#070D0D]">Summary</span>
                        <div className="flex flex-col w-full h-[150px]">
                            <p className="text-white text-2xl font-bold">Account Summary:</p>
                            {renderSummary()}
                        </div>
                    </div>
                    
                        <div role="hidden" className="mt-12 border-t border-gray-700">
                            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-700 bg-[#070D0D]">Select Payment</span>
                            <div className="flex flex-col items-center justify-center w-full h-[150px]">
                                {!payment ? (
                                    <div className="flex flex-row items-center justify-center space-x-2 w-36 h-14 border border-gray-700 bg-black animate-pulse hover:animate-none cursor-pointer rounded-full" onClick={() => setPayment(true)}>
                                        <p>🥷</p>
                                        <p className="text-white">ShadowPay</p>
                                    </div>
                                ) : (
                                    <CheckCircleIcon className="h-36 h-36 text-green-400 animate-pulse mt-4" />
                                )}
                            </div>
                        </div>
                  
                </div>
            </div>
        )

}

export default Confirm