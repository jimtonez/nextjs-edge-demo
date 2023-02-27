import Image from 'next/image'

function Leagues () {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-4">
            <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
                <p className='text-white text-base lg:text-xl font-semibold'>Leagues</p>
            </div>
            <div className="col-span-1 bg-[#212427] border border-gray-700 rounded-xl shadow-md cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex bg-[#070D0D] border-b border-gray-700 w-full justify-center rounded-t-xl pb-3">
                        <p className="text-white mt-4 font-semibold">NHL</p>
                    </div>
                    <div className="p-10 h-3/4 w-3/4 flex items-center justify-center">
                        <Image className="object-cover rounded-xl" src="/NHL-emblem.jpg" alt="" width={140} height={140} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-[#212427] border border-gray-700 rounded-xl shadow-md cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex bg-[#070D0D] border-b border-gray-700 w-full justify-center rounded-t-xl pb-3">
                        <p className="text-white mt-4 font-semibold">NFL</p>
                    </div>
                    <div className="p-10 h-3/4 w-3/4 flex items-center justify-center">
                        <Image className="object-cover rounded-xl" src="/nfl-logo.jpeg" alt="" width={140} height={140} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-[#212427] border border-gray-700 rounded-xl shadow-md cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex bg-[#070D0D] border-b border-gray-700 w-full justify-center rounded-t-xl pb-3">
                        <p className="text-white mt-4 font-semibold">NBA</p>
                    </div>
                    <div className="p-10 h-3/4 w-3/4 flex items-center justify-center">
                        <Image className="object-cover rounded-xl" src="/nbalogo.webp" alt="" width={140} height={140} />
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-[#212427] border border-gray-700 rounded-xl shadow-md cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex bg-[#070D0D] border-b border-gray-700 w-full justify-center rounded-t-xl pb-3">
                        <p className="text-white mt-4 font-semibold">UFC</p>
                    </div>
                    <div className="p-10 h-3/4 w-3/4 flex items-center justify-center">
                        <Image className="object-cover rounded-xl" src="/UFC-LOGO.png" alt="" width={140} height={140} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Leagues