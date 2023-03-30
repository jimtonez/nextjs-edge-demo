import Image from 'next/image'

function Architecture() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-4xl mx-auto gap-4 px-2 lg:px-4 pt-10 pb-20">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-2">
                <div className='relative flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col col-span-1 items-center w-3/4 lg:w-1/3 h-full justify-between p-4 border border-red-600 border-dashed rounded-xl shadow-md cursor-pointer space-y-4 text-white'>
                        <div className='flex flex-col col-span-1 items-center w-full h-1/3 justify-center border border-dashed border-gray-700 rounded-xl'>
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold line-clamp-1">Network Optimized</p>
                            </div>
                            <div className='flex flex-col w-full h-auto items-center justify-center pt-4 px-4'>
                                <Image priority src="/virtual.png" alt="" width={90} height={90} />
                            </div>
                            <div className='flex items-center w-full h-auto justify-center pb-4 px-4'>
                                <div className='flex flex-row space-x-2'>
                                    <Image priority src="/dell.png" alt="" width={75} height={75} />
                                    <Image priority src="/mellanox.png" alt="" width={75} height={75} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col col-span-1 items-center w-full h-1/3 justify-center border border-dashed border-gray-700 rounded-xl'>
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold line-clamp-1">GPU Optimized</p>
                            </div>
                            <div className='flex flex-col w-full h-auto items-center justify-center pt-4 px-4'>
                                <Image priority src="/virtual.png" alt="" width={90} height={90} />
                            </div>
                            <div className='flex items-center w-full h-auto justify-center rounded-xl pb-4 px-4'>
                                <div className='flex flex-row items-center justify-around space-x-2'>
                                    <Image priority src="/dell.png" alt="" width={75} height={75} />
                                    <Image priority src="/nvidia.png" alt="" width={75} height={75} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col col-span-1 items-center w-full h-1/3 justify-center border border-dashed border-gray-700 rounded-xl'>
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold line-clamp-1">Edge Compute</p>
                            </div>
                            <div className='flex flex-col w-full h-auto items-center justify-center pt-4 px-4'>
                                <Image priority src="/virtual.png" alt="" width={90} height={90} />
                            </div>
                            <div className='flex items-center w-full h-auto justify-center rounded-xl pb-4 px-4'>
                                <div className='flex flex-row space-x-2'>
                                    <Image priority src="/dell.png" alt="" width={75} height={75} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col col-span-1 items-center w-3/4 lg:w-1/3 h-full justify-between p-4 border border-red-600 border-dashed rounded-xl shadow-md cursor-pointer space-y-4 text-white'>
                        <div className='flex flex-col col-span-1 items-center w-full h-1/3 justify-center border border-dashed border-gray-700 rounded-xl'>
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold line-clamp-1">Container Security</p>
                            </div>
                            <div className='flex flex-col w-full h-auto items-center justify-center pb-4 pt-4 px-4'>
                                <Image priority src="/ACS.svg" alt="" width={220} height={220} />
                            </div>
                            <div className='flex items-center w-full h-auto justify-center pb-7 px-4'>
                                <div className='flex flex-row items-center justify-around'>
                                    <Image priority src="/container.png" alt="" width={85} height={85} />
                                    <Image priority src="/container.png" alt="" width={85} height={85} />
                                    <Image priority src="/container.png" alt="" width={85} height={85} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col col-span-1 items-center w-full h-1/3 justify-center border border-dashed border-gray-700 rounded-xl'>
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold line-clamp-1">Auto-scaling</p>
                            </div>
                            <div className='flex flex-col w-full h-auto items-center justify-center pb-4 pt-4 px-4'>
                                <Image priority src="/ACM.svg" alt="" width={220} height={220} />
                            </div>
                            <div className='flex items-center w-full h-auto justify-center rounded-xl pb-4 px-4'>
                                <div className='flex flex-row items-center justify-around space-x-2'>
                                    <Image priority src="/orchestration.png" alt="" width={105} height={105} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col col-span-1 items-center w-full h-1/3 justify-center border border-dashed border-gray-700 rounded-xl'>
                            <div className="flex bg-[#070D0D] border-b border-dashed border-gray-700 w-full h-1/4 items-center justify-center rounded-t-xl">
                                <p className="text-white text-md md:text-lg font-semibold line-clamp-1">Kubernetes</p>
                            </div>
                            <div className='flex flex-col w-full h-auto items-center justify-center pb-4 pt-4 px-4'>
                                <Image priority src="/openshift.svg" alt="" width={175} height={175} />
                            </div>
                            <div className='flex items-center w-full h-auto justify-center rounded-xl pb-4 px-4'>
                                <div className='flex flex-row space-x-2'>
                                    <Image priority src="/serverstack.png" alt="" width={90} height={90} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex absolute col-span-1 w-full h-1/3 border border-dashed border-blue-300 rounded-xl bottom-0 p-4'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Architecture