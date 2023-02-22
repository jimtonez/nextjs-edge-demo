import Image from 'next/image'
import proBowl from '../public/probowl.jpg'
import { events } from "../constants"

function Events () {

    return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto">
        <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 px-4 py-2'>
            <p className='text-white text-base lg:text-xl font-semibold'>Events</p>
        </div>
        <div className='col-span-1 md:col-span-2 lg:col-span-4 shadow-md'>
            <div className='flex flex-col lg:w-3/4 md:px-4'>
                <ul className='list-none flex flex-col space-y-4'>
                    {events.map((event, index) => (
                        <li key={event.id} className='cursor-pointer'>
                            <div className='flex flex-col aspect-w-3 aspect-h-2'>
                                <div className='flex'>
                                    <iframe key={event.id} id={event.id} className=" md:rounded-xl md:rounded-b-none" width="100%" height="100%" src={event.url} />
                                </div>
                            </div>
                            <div className='flex flex-col aspect-w-2 aspect-h-1'>
                                <div className='flex flex-col bg-[#070D0D] rounded-b-xl border border-gray-700 border-t-0 hover:bg-opacity-80 p-4 space-y-4'>
                                    <div className='flex flex-row w-full h-auto items-center space-x-2'>
                                        <div className='flex w-1/8'>
                                            <div className="flex h-12 lg:h-14 w-12 lg:w-14 rounded-full border border-red-600 border-2">
                                                <Image src={event.logo} alt="" className="object-cover h-auto w-auto rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex w-7/8 text-white text-lg font-semi-bold">
                                            <h1>{event.title}</h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center justify-between space-x-2'>
                                        {event.tags.map((tag) => (
                                            <div key={tag.name} className='flex h-6 lg:h-8 w-auto items-center justify-between bg-gray-700 border border-red-600 rounded-full space-x-3 p-3'>
                                                <div className='w-1/4'>
                                                    <p>{tag.icon}</p>
                                                </div>
                                                <div className='w-3/4 text-white'>
                                                    <p>{tag.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex flex-row w-full h-3/4 items-center justify-between space-x-2'>
                                        <div className='flex flex-col w-full h-full border border-gray-700 border-dashed rounded-xl'>
                                            <div className='flex h-1/4 w-full items-center justify-center rounded-t-xl border-b border-gray-700 border-dashed'>
                                                <h1 className='text-white'>Score</h1>
                                            </div>
                                        </div>
                                        <div className='flex w-full h-full border border-gray-700 border-dashed rounded-xl'>
                                             <div className='flex h-1/4 w-full items-center justify-center rounded-t-xl border-b border-gray-700 border-dashed'>
                                                <h1 className='text-white'>Spread</h1>
                                            </div>
                                        </div>
                                        <div className='flex w-full h-full border border-gray-700 border-dashed rounded-xl'>
                                            <div className='flex h-1/4 w-full items-center justify-center rounded-t-xl border-b border-gray-700 border-dashed'>
                                                <h1 className='text-white'>Totals</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>     
        </div>
    </section>
    )

}

export default Events