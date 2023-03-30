"use client"
import { useSession } from "next-auth/react"
import { useState } from "react"
import Image from "next/image"
import { useRecoilState } from "recoil"
import { firstNameState } from "@/atoms/firstNameAtom"
import { lastNameState } from "@/atoms/lastNameAtom"

function UserInfo () {

    const { data: session } = useSession()
    const [firstName, setFirstName] = useRecoilState(firstNameState)
    const [lastName, setLastName] = useRecoilState(lastNameState)

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
                    <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-700 bg-[#070D0D]">Enter your information</span>
                </div>
            </div>
            <form action="" className="flex flex-col items-start space-y-6 py-6 text-white">
            <div className="flex flex-col w-full space-y-2">
            <label>Email:</label>
            <input
                disabled
                type="email" 
                placeholder={session!.user?.email!}
                className="w-full py-3 px-6 rounded-lg border border-gray-700 placeholder-gray-600 bg-inherit"
            />
           </div>
            <div className="flex flex-col w-full space-y-2">
            <label>First Name:</label>
            <input 
                type="text"
                value={firstName}
                maxLength={15}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full animate-pulse hover:animate-none hover:border-gray-600 py-3 px-6 rounded-lg border border-gray-700 placeholder-gray-600 bg-transparent invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
            />
            </div>
            <div className="flex flex-col w-full space-y-2">
            <label>Last Name:</label>
            <input 
                type="text"
                value={lastName}
                maxLength={15}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full animate-pulse hover:animate-none hover:border-gray-600 py-3 px-6 rounded-lg border border-gray-700 placeholder-gray-600 bg-transparent invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
            />
            </div>
        </form>
        </div>
    )

}

export default UserInfo