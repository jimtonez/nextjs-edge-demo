"use client"
import { HomeIcon } from "@heroicons/react/24/outline";
import { signIn, signOut} from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {useState, useEffect} from "react";
import DropDownMenu from "./DropDownMenu"

function Header () {

    const { data } = useSession();
    const router = useRouter();

    return (
        <div className="bg-[#070D0D] shadow-md border-b border-gray-700 sticky top-0 z-50">
          <div className="flex justify-between max-w-7xl mx-1 lg:mx-auto">
            <div onClick={() => router.push('/')} className="p-4 flex items-center cursor-pointer relative">
              <span className="emoji" role="img" aria-label="rocket">⚽️</span>
              <p className="text-md text-white font-semibold pl-3">Edge Your Bets</p>
            </div>
            <div className="flex items-center justify-end space-x-2 md:space-x-4">
              <HomeIcon onClick={() => router.push('/')} className="hidden md:navBtn" />
              {data ? (
                  <>
                  <DropDownMenu />
                  </>
              ): (
                <div className="flex space-x-2 p-2">
                  <button onClick={() => signIn()} className="text-sm text-gray-600 hover:bg-gray-600 hover:text-white h-8 w-20 border border-gray-600 hover:border-none rounded-full">Register</button>
                  <button onClick={() => signIn()} className="text-sm text-red-600 hover:bg-red-600 hover:text-white h-8 w-16 border border-red-600 hover:border-none rounded-full">Sign In</button>
                </div>
              )}
            </div>
          </div>
        </div>
    )
}

export default Header