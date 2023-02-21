// "use client"
import Image from 'next/image'
import proBowl from '../public/probowl.jpg'
import { events } from "../constants"

function Hero () {

    return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto">
        <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 px-4 py-2'>
            <p className='text-white text-base lg:text-xl font-semibold'>Events</p>
        </div>
        <div className='col-span-1 md:col-span-2 lg:col-span-4 shadow-md'>
            <div className='flex flex-col md:px-4 xl:space-x-4'>
                <ul className='list-none flex-col space-y-4'>
                    {events.map((event, index) => (
                        <li key={event.id} className='flex aspect-w-3 aspect-h-2 lg:aspect-video items-center justify-between'>
                            <iframe key={event.id} id={event.id} className="object-cover md:rounded-xl lg:rounded-l-xl" width="100%" height="100%" src={event.url} />
                        </li>
                    ))}
                </ul>
            {/* <div className='hidden xl:flex bg-[#070D0D] w-1/4 border border-gray-700 border-dashed shadow-lg rounded-xl items-center justify-between px-4'>
                <div className='flex-1 text-white rounded-xl space-y-4'>
                    <div className="flex cursor-pointer aspect-video items-center justify-between rounded-xl">
                        <Image className="object-cover rounded-xl lg:rounded-l-xl" src={proBowl} alt="" /> 
                    </div>
                    <div className="flex cursor-pointer aspect-video items-center justify-between rounded-xl">
                        <Image className="object-cover rounded-xl lg:rounded-l-xl" src={proBowl} alt="" /> 
                    </div>
                    <div className="flex cursor-pointer aspect-video items-center justify-between rounded-xl">
                        <Image className="object-cover rounded-xl lg:rounded-l-xl" src={proBowl} alt="" /> 
                    </div>
                </div>
            </div> */}
            </div>     
        </div>
    </section>
    )

}

export default Hero