import Image from 'next/image'
import { signIn } from 'next-auth/react'

function Features () {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-4 mt-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-[#070D0D] border border-gray-700 border-dashed rounded-xl shadow-md cursor-pointer">
                <div className="flex flex-col text-white rounded-xl p-4 space-y-4">
                    <h2 className='text-2xl font-semibold'>Register for Premium and get access to exclusive features!</h2>
                    <div className="flex flex-col items-start justify-between space-y-3">
                        <p className='text-md'>✅ Priority betting</p>
                        <p className='text-md'>✅ Boosted analytical speeds</p>
                        <p className='text-md'>✅ Live sporting events on Demand</p>
                    </div>
                    <div className="flex flex-row items-center justify-end">
                        <button className="text-sm text-gray-600 hover:bg-gray-600 hover:text-white h-8 w-20 border border-gray-600 hover:border-none rounded-full">Register</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features