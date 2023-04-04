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
                    <svg className='h-52 w-52' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 132"><defs><path d="M55.648 0 0 56.262l55.989 55.814 111.71-.122 55.353-55.839L167.045 0z"></path></defs><g fill="none" fill-rule="evenodd"><path fill="#261A4C" d="m0 75.858 55.993 55.853.047-19.209L.047 56.692z"></path><path fill="#382672" d="m56.039 112.504-.05 19.206 111.73-.115.029-.032v-19.174z"></path><path fill="#4B3398" d="m168.033 112.1-.284.288v19.176l55.303-55.82.05-19.199z"></path><path fill="#5E40BE" d="M55.696.43.048 56.692l55.989 55.813 111.71-.122L223.1 56.545 167.093.43z"></path><mask fill="#fff"></mask></g></svg>
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