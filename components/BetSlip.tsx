"use client"
import { useRecoilState } from 'recoil';
import { betSlipState } from '@/atoms/betSlipAtom';
import { betsState } from '@/atoms/betsAtom';
import { paymentState } from '@/atoms/paymentAtom';
import { XMarkIcon, TrophyIcon, CheckCircleIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { signIn, useSession } from 'next-auth/react'
import axios from 'axios';

interface Bet {   
    id: string,
    strike: number,
    event_id: string,
    bet_amt: number
}

function BetSlip () {

    const [openBetSlip, setOpenBetSlip] = useRecoilState(betSlipState)
    const [payment, setPayment] = useRecoilState(paymentState)
    const [bets, setBets] = useRecoilState(betsState)
    const { data: session } = useSession();

    const deleteBet = (index: number) => {
        setBets((bets) => bets.filter((_, i) => i !== index))
    }

    const userData = {
        email: session?.user?.email
    }

    async function handlePayment () {
        // const getUser = await axios.get(`http://svc-ed-quarkus-backend.cc-betting-demo.svc.cluster.local/customer/membership?email=${encodeURIComponent(session?.user?.email!)}`)
        // const getUser = await axios.get(`https://route-ed-quarkus-backend-ssl-cc-betting-demo.apps.cluster-r8szc.r8szc.sandbox1991.opentlc.com/customer/membership`, { params: {email: session?.user?.email!} })
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        setPayment(true)
        for (const bet of bets) {
            setBets((bets) => bets.filter((_, i) => i !== i ))
        }
        // setOpenBetSlip(false)
        setPayment(false)
    }

    const handleSignin = (e: any) => {
        e.preventDefault()
        signIn()
    }

    const renderBetsButton = () => {
        if (bets.length > 0) {
            return (
                <div onClick={() => setOpenBetSlip(true)} className='flex flex-col items-center justify-center h-20 w-20 rounded-full bg-red-600 shadow-sm shadow-red-600 animate-pulse hover:animate-none cursor-pointer ease-in duration-200 hover:scale-105'>
                    <p className='text-xs font-bold'>{bets.length}</p>
                    <BanknotesIcon className='text-black h-10 w-10' />
                </div>
            )
        }
    }

    return (            
        <>
        <div className={`${bets.length > 0 ? 'flex fixed' : 'hidden'} flex-col items-center justify-center lg:top-16 lg:h-[200px] right-6 sm:right-12 md:right-16 lg:pr-8 xl:pr-36 bottom-20 sm:bottom-28 z-10`}>
            {renderBetsButton()}
        </div>
        <div className={`flex flex-col items-start justify-center bottom-0 right-0 w-full h-full md:w-[33vw] md:h-full bg-[#070D0D] border-t md:border-l border-gray-700 lg:p-4 space-y-4 text-white fixed h-full z-20 lg:z-40 ease-in-out duration-300 ${openBetSlip ? "translate-x-0 " : "translate-x-full"}`}>
            <div className="flex relative w-full h-32 flex-row items-center justify-center border-b border-gray-700 p-4 lg:p-0 mt-14 md:mt-12">
                <div onClick={() => setOpenBetSlip(false)} className="flex absolute left-1 top-1 md:top-2 h-14 w-14 items-center justify-center rounded-full border border-gray-700 border-dashed cursor-pointer">
                    <XMarkIcon className="text-red-600 h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold text-gray-700">Bet Slip</h2>
            </div>
            <div className='flex flex-col w-full h-screen items-center justify-start space-y-4 overflow-y-scroll scrollbar-hide p-4 lg:p-0'>
                <>
                {bets.map((bet, i) => (
                    <div key={i} className={`flex-col w-full h-[200px] items-center justify-center border border-gray-700 rounded-xl ease-in-out duration-200 ${i+1 === bets.length ? 'mb-12' : 'mb-0'}`}>
                        <div className="flex relative w-full h-1/4 items-center justify-center border-b border-gray-700">
                            <div onClick={() => deleteBet(i)} className="flex absolute right-1 top-1 h-10 w-10 items-center justify-center rounded-full border border-gray-700 border-dashed cursor-pointer">
                                <XMarkIcon className="text-red-600 h-8 w-8" />
                            </div>
                            <div className="flex items-center justify-center w-3/4 pr-4">
                                <p className='line-clamp-1'>{bet.event_id}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-[175px] items-center p-4">
                            <div className="flex w-full h-1/3 flex-row items-center justify-around">
                                <h1>Match Result</h1>
                                <div className="flex h-14 w-14 mr-2 items-center justify-center rounded-full border border-gray-700 border-dashed">
                                    <TrophyIcon className="text-red-600 h-8 w-8" />
                                </div>
                            </div>
                            <div className="flex w-full h-[200px] flex-row items-center justify-around pb-2">
                                <h2>{bet.strike}</h2>
                                <h2>{bet.bet_amt}</h2>
                            </div>
                        </div>
                    </div>
                ))}
                </>
            </div>
            <div role="hidden" className="flex flex-col w-full h-[200px] md:h-[250px] lg:h-[200px] items-center justify-around border-t border-gray-700">
                
                <div className="flex flex-col items-center justify-center w-full h-[200px] md:h-[250px]">
                    {session ? (
                        <div className='flex flex-col w-full pb-16 sm:pb-24 md:pb-32 lg:pb-8 md:h-full items-center justify-center space-y-4'>
                            <>
                            {payment ? (
                                <CheckCircleIcon className='text-green-400 animate-pulse' />
                            ) : (
                                <div className={`${bets.length === 0 ? 'hidden' : 'flex'} flex-row items-center justify-center space-x-2 w-36 h-14 border border-gray-700 bg-black animate-pulse hover:animate-none cursor-pointer rounded-full`} onClick={handlePayment}>
                                <p>🥷</p>
                                <p className="text-white">ShadowPay</p>
                                </div>
                            )}
                            </>
                        </div>
 
                    ) : (
                        <div className='flex flex-col w-full pb-4 md:pb-12 md:h-full items-center justify-center space-y-4'>
                            <span className="text-center text-gray-700 bg-[#070D0D]">Sign in to place your bets</span>
                            <div className="flex flex-row items-center justify-center space-x-2 w-36 h-14 border border-red-600 bg-inherit hover:bg-black animate-pulse hover:animate-none cursor-pointer rounded-full" onClick={(e) => handleSignin(e)}>
                                <p className="text-white">Sign In</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default BetSlip