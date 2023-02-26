"use client"
import Link from "next/link"
import { navOptions } from "@/constants"
import { BanknotesIcon, CodeBracketIcon, RadioIcon } from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react"

function NavBar () {

    const { data: session } = useSession();

     const renderButton = (icon: any) => {
        if (icon === RadioIcon){
            return (
                <RadioIcon className="navIcon" />
            )
        } else if (icon === BanknotesIcon) {
            return (
                <BanknotesIcon className="navIcon" />
            )
        } else if (icon === CodeBracketIcon) {
            return (
                <CodeBracketIcon className="navIcon" />
            )
        }
     }

     return (
        <>  
            {session ? (
                <div className="navContainer">
                    {navOptions.map((option, index) => (
                        <>
                            <Link key={option.id} href={option.route} className="navLink">
                                {renderButton(option.icon)}
                            </Link>
                        </>
                    ))}
                </div>

            ) : (
                <>
                </>
            )}
        </>
     )
}

export default NavBar