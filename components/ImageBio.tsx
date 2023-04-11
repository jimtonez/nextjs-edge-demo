import Image from 'next/image'
import styles from '../app/page.module.css'


interface Image {
    name: string,
    description: string
}


function ImageBio ( image: Image) {

    const renderImage = () => {
        if (image.name === "nextjs"){
            return (
                <Image priority className={`${styles.logo}`} src="/next.svg" alt="Next.js Logo" width={180} height={37}/>
            )
        } else if (image.name=== "quarkus") {
            return (
                <Image priority className={''} src="/runtimes.svg" alt="Next.js Logo" width={180} height={37}/>
            )
        } else if (image.name === "postgres") {
            return (
                <Image priority className={''} src="/postgres.png" alt="Next.js Logo" width={65} height={37}/>
            )
        } else if (image.name === "amq") {
            return (
                <Image priority className={''} src="/amq.png" alt="Next.js Logo" width={180} height={37}/>
            )
        } 
    }

    return (
       
        <div className="flex flex-col w-full h-full space-y-4">
            <div className="flex flex-col md:flex-row w-full h-[450px] md:h-[350px] lg:h-[500px] items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                <div className='flex flex-col w-full md:w-1/2 h-3/4 md:h-full items-center justify-center border border-gray-700 border-dashed rounded-xl'>
                    <div className="flex h-1/4 w-full items-center justify-center animate-pulse p-4">
                        {renderImage()}
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 h-full space-y-4">
                    <div className='hidden md:flex flex-row items-center w-full h-auto bg-[#070D0D] border border-gray-700 border-dashed rounded-xl space-x-2 p-4'>
                        <div className='flex h-8 w-auto items-center justify-center border border-purple-400 rounded-xl p-2'>
                            <p className="text-white w-full text-lg font-normal">{image.name}</p>
                        </div>
                        <div className='flex h-8 w-auto items-center justify-center border border-green-400 rounded-xl p-2'>
                            <p className="text-green-400 w-full text-lg font-normal">latest</p>
                        </div>
                        <div className='flex h-8 w-auto items-center justify-center border border-green-400 rounded-xl p-2'>
                            <p className="text-green-400 w-full text-lg font-normal">active</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full bg-[#070D0D] border border-gray-700 border-dashed rounded-xl p-4'>
                        <p className="text-white w-full text-xl font-normal">{image.description}</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ImageBio