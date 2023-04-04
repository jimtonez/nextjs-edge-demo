"use client"
import axios from "axios";
import { CheckIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Subscription from './Subscription'
import UserInfo from './UserInfo'
import Confirm from './Confirm'
import { useRouter } from 'next/navigation'
import { useRecoilState } from "recoil"
import { firstNameState } from "@/atoms/firstNameAtom"
import { lastNameState } from "@/atoms/lastNameAtom"
import { subscriptionState } from '@/atoms/subscriptionAtom'
import { paymentState } from '@/atoms/paymentAtom'

const steps = [
    { id: '01', name: 'Information', href: '#', status: 'complete' },
    { id: '02', name: 'Subscription', href: '#', status: 'current' },
    { id: '03', name: 'Summary', href: '#', status: 'upcoming' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function Stepper () {

    const steps = ["Information", "Subscription", "Confirm"]
    const { data: session} = useSession()
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false)
    const [firstName, setFirstName] = useRecoilState(firstNameState)
    const [lastName, setLastName] = useRecoilState(lastNameState)
    const [ subscription, setSubscription] = useRecoilState(subscriptionState)
    const [payment, setPayment] = useRecoilState(paymentState)
    const router = useRouter()

    const renderStep = () => {
        if (currentStep === 1) {
            return (
                <UserInfo />
            )
        } else if (currentStep === 2 ) {
            return (
                <Subscription />
            )
        } else if (currentStep === 3 ) {
            return (
                <Confirm />
            )
        }
    }

    const userData = {
        fName: firstName,
        lName: lastName,
        email: session?.user?.email,
        icon: "",
        subType: subscription
    }

    // console.log(session)

    
    const getUser = async () => {
        const getUser = await fetch(`/api/users`, {method: 'GET'})
        console.log(getUser)
    }
    

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // const response = await fetch('/api/users', {
        //     method: 'POST',
        //     body: JSON.stringify(userData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const data = await response.json()
        setComplete(true)
        router.push('/events')
    };

    return (
        <>
            <div className='animate-pulse hover:animate-none hover:border-gray-600 flex w-full border border-gray-700 border-dashed rounded-full p-4 items-center justify-between' onClick={() => getUser()}>
                {steps.map((step, i) => (
                    <div key={i} className={`step-item ${currentStep === i+1 && "active"} ${(i + 1 < currentStep || complete) && "complete"}`}> 
                        <div className="step">
                            {(i + 1 < currentStep || complete) ? <CheckIcon className='h-5 w-5' /> : i + 1}
                        </div>
                        <p className='text-white'>{step}</p>
                    </div>
                ))}
            </div>
            {complete ? (
                <div className="flex items-center justify-center h-[652px]">
                    <CheckCircleIcon className='h-32 w-32 text-green-400 transition ease-out duration-700 animate-ping' />
                </div>
            ) : (
                <>
                {renderStep()}
                    <div className={`flex w-full ${currentStep > 1 ? 'justify-between' : 'justify-end'}`}>
                        <button className={`${currentStep > 1 ? "w-1/4 px-6 py-3 rounded-xl bg-gray-700 transition hover:opacity-80" : "hidden"}`} onClick={() => setCurrentStep((prev) => prev - 1)}>
                        <span className="font-semibold text-white text-lg">Back</span>
                        </button>
                      
                        <button disabled={!payment} className={`${currentStep === 3 ? '' : 'hidden'} w-auto px-6 py-3 rounded-xl ${payment ? 'bg-green-400' : 'bg-gray-700'} transition hover:opacity-80`} onClick={(e) => payment && handleSubmit(e)}>
                            <span className="font-semibold text-white text-lg">Create Account</span>
                        </button>
                   
                        <button className={`${currentStep < 3 ? '' : 'hidden'} w-auto px-6 py-3 rounded-xl bg-green-400 transition hover:opacity-80`} onClick={() => setCurrentStep((prev) => prev + 1)}>
                            <span className="font-semibold text-white text-lg">Next</span>
                        </button>
               
                    </div>
                    </>
            )}

        </>

    )
}

export default Stepper