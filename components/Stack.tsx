import Image from 'next/image'
import styles from '../app/page.module.css'

function Stack() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4 pt-10 pb-20">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-2">
                <div className='flex items-center h-24 justify-center p-4 bg-[#070D0D] border border-red-600 border-dashed rounded-xl shadow-md cursor-pointer'>
                <Image
                priority
                src="/openshift.svg"
                alt="OpenShift Logo"
                width={180}
                height={37}
                />
                </div>
                <div className="flex flex-row items-center justify-around space-x-2">
                    <div className='flex w-full h-24 items-center justify-center pt-4 px-2 bg-[#070D0D] border border-white border-dashed rounded-xl shadow-md cursor-pointer'>
                    <Image
                    priority
                    className={`${styles.logo}`}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    />
                    </div>
                    <div className='flex w-full h-24 items-center justify-center p-3 bg-[#070D0D] border border-green-300 border-dashed rounded-xl shadow-md cursor-pointer'>
                    <Image
                    priority
                    // className={`${styles.logo}`}
                    src="/nodejs.svg"
                    alt="Node.js Logo"
                    width={180}
                    height={37}
                    />
                    </div>
                    <div className='flex w-full h-24 items-center justify-center p-3 px-2 bg-[#070D0D] border border-blue-300 border-dashed rounded-xl shadow-md cursor-pointer'>
                    <Image
                    priority
                    // className={`${styles.logo}`}
                    src="/tailwind.png"
                    alt="Next.js Logo"
                    width={80}
                    height={37}
                    />
                    </div>
                </div>
                <div className='flex h-24 items-center justify-center p-4 bg-[#070D0D] border border-red-600 border-dashed rounded-xl shadow-md cursor-pointer'>
                <Image
                priority
                src="/runtimes.svg"
                alt="OpenShift Logo"
                width={180}
                height={37}
                />
                </div>
                <div className='flex h-24 items-center justify-center p-4 bg-[#070D0D] border border-red-600 border-dashed rounded-xl shadow-md cursor-pointer'>
                <Image
                priority
                src="/coreos.svg"
                alt="OpenShift Logo"
                width={180}
                height={37}
                />
                </div>
            </div>
        </section>
    )
}

export default Stack