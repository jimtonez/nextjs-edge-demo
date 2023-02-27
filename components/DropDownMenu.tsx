/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    UserCircleIcon,
    CogIcon,
    ArrowLeftOnRectangleIcon,
    RadioIcon,
    BanknotesIcon,
    ServerStackIcon,
    ClipboardDocumentIcon,
} from '@heroicons/react/24/outline'
import { signOut, useSession } from 'next-auth/react'
import { navOptions, accountOptions } from '@/constants'
import Link from 'next/link'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownMenu() {

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
    } else if (icon === ServerStackIcon) {
        return (
            <ServerStackIcon className="navIcon" />
        )
    } else if (icon === ClipboardDocumentIcon) {
        return (
            <ClipboardDocumentIcon className="navIcon" />
        )
    } else if (icon === UserCircleIcon) {
      return (
          <UserCircleIcon className="navIcon" />
      )
    } else if (icon === CogIcon) {
      return (
          <CogIcon className="navIcon" />
      )
    } else if (icon === ArrowLeftOnRectangleIcon) {
      return (
          <ArrowLeftOnRectangleIcon className="navIcon" />
      )
    }
 }

  return (
    <Popover className="z-0 relative">
      {({ open }) => (
        <>
          <Popover.Button className="outline-none">
            <img src={session?.user?.image!} alt="" className="mt-1.5 h-10 rounded-full cursor-pointer" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 transform -left-9 -translate-x-3/4 w-screen max-w-xs sm:px-0 mt-1">
              <div className="rounded-b-xl shadow-sm overflow-hidden">
                <div className="relative z-20 grid gap-6 bg-[#070D0D] px-5 py-6 sm:gap-8 sm:p-8">
                    <ul role="list" className="space-y-6">
                        <>
                        {navOptions.map((navOption) => (
                          <li key={navOption.id} className="flow-root">
                            <Link
                                href={navOption.route}
                                className="cursor-pointer -m-3 p-3 flex items-center gap-4 rounded-md text-base font-medium text-gray-700 hover:text-[#ff0000] hover:bg-gray-50 dark:hover:bg-opacity-5 transition ease-in-out duration-150"
                            >
                              {renderButton(navOption.icon)}
                              <span className='text-sm sm:text-lg text-white font-normal'>{navOption.name}</span>
                          </Link>
                          </li>
                        ))}
                        </>
                        <hr className='border-1 border-gray-700'></hr>
                        <>
                        {accountOptions.map((navOption) => (
                          <li key={navOption.id} className="flow-root">
                            <Link
                                href={navOption.route}
                                className="cursor-pointer -m-3 p-3 flex items-center gap-4 rounded-md text-base font-medium text-gray-700 hover:text-[#ff0000] hover:bg-gray-50 dark:hover:bg-opacity-5 transition ease-in-out duration-150"
                            >
                              {renderButton(navOption.icon)}
                              <span className='text-sm sm:text-lg text-white font-normal'>{navOption.name}</span>
                          </Link>
                          </li>
                        ))}
                        </>
                        <li key="signout" className="flow-root">
                            <Link
                                onClick={() => signOut({ callbackUrl: "/"})}
                                href=""
                                className="cursor-pointer -m-3 p-3 flex items-center gap-4 rounded-md text-base font-medium text-gray-700 hover:text-[#ff0000] hover:bg-gray-50 dark:hover:bg-opacity-5 transition ease-in-out duration-150"
                            >
                              {renderButton(ArrowLeftOnRectangleIcon)}
                              <span className='text-sm sm:text-lg text-white font-normal'>Sign Out</span>
                          </Link>
                          </li>
                    </ul>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}