"use client"
import { signIn, signOut} from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import DropDownMenu from "./DropDownMenu"
import Link from 'next/link'

function Header () {

    const { data: session } = useSession();

    const handleSignin = (e: any) => {
      e.preventDefault()
      signIn()
    }

    return (
      <>
        <div className="bg-[#070D0D] shadow-md border-b border-gray-700 sticky top-0 z-50">
          <div className="flex justify-between max-w-7xl mx-1 lg:mx-auto">
            <Link href={session ? '/' : "/"} className="p-4 flex items-center cursor-pointer relative">
              <span className="emoji" role="img" aria-label="rocket">⚽️</span>
              <p className="text-md text-white font-semibold pl-3">Edge Your Bets</p>
            </Link>
            <div className="flex items-center justify-end space-x-2 md:space-x-4">
              {session ? (
                  <>
                  <DropDownMenu />
                  </>
              ) : (
                <>
                <div className="flex space-x-2 p-2">
                  <button onClick={handleSignin} className="text-sm text-gray-600 hover:bg-gray-600 hover:text-white h-8 w-20 border border-gray-600 hover:border-none rounded-full">Register</button>
                  <button onClick={handleSignin} className="text-sm text-red-600 hover:bg-red-600 hover:text-white h-8 w-16 border border-red-600 hover:border-none rounded-full">Sign In</button>
                </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    )
}

export default Header