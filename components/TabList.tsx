import { videoTypeTags, sportsTypeTags } from "@/constants"

function TabList () {

    return (
        <div className='col-span-1 md:col-span-4'>
        <ul role="list" className="flex flex-row sticky bg-[#010202] z-10 w-full h-auto items-center justify-start w-auto py-4 md:p-4 space-x-2 overflow-x-scroll scrollbar-hide">
        <>
        {videoTypeTags.map((videoType) => (
          <li key={videoType.id} className="w-auto">
            <div key={videoType.id} className='flex cursor-pointer h-6 lg:h-8 w-auto items-center justify-center bg-gray-700 border border-blue-400 rounded-full space-x-3 p-3'>
                <div className='w-1/4'>
                    <p>{videoType.icon}</p>
                </div>
                <div className='w-3/4 text-white'>
                    <p>{videoType.name}</p>
                </div>
            </div>
          </li>
        ))}
        </>
        <>
        {sportsTypeTags.map((videoType) => (
          <li key={videoType.id} className="w-auto">
            <div key={videoType.id} className='flex cursor-pointer h-6 lg:h-8 w-auto items-center justify-center bg-gray-700 border border-red-600 rounded-full space-x-3 p-3'>
                <div className='w-1/4'>
                    <p>{videoType.icon}</p>
                </div>
                <div className='w-3/4 text-white'>
                    <p>{videoType.name}</p>
                </div>
            </div>
          </li>
        ))}
        </>
    </ul>
    </div>
    )

}

export default TabList