"use client"
import Image from 'next/image'
import { useState } from 'react'
import styles from '../app/page.module.css'
import { containers } from '../constants/containers'
import ImageBio from './ImageBio'

function Stack() {

    const [currentImage, setCurrentImage] = useState(0);

    const renderImage = (logo: any) => {
        if (logo === "nextjs"){
            return (
                <Image priority className={`${styles.logo}`} src="/next.svg" alt="Next.js Logo" width={180} height={37}/>
            )
        } else if (logo === "quarkus") {
            return (
                <Image priority className={`mb-3`} src="/runtimes.svg" alt="Next.js Logo" width={180} height={37}/>
            )
        } else if (logo === "postgres") {
            return (
                <Image priority className={`mb-3`} src="/postgres.png" alt="Next.js Logo" width={65} height={37}/>
            )
        } else if (logo === "amq") {
            return (
                <Image priority className={`mb-3`} src="/amq.png" alt="Next.js Logo" width={180} height={37}/>
            )
        } 
    }

     const renderBio = () => {
        if (currentImage === 0) {
            return (
                <ImageBio 
                    name="nextjs"
                    description='Front-end microservice for handling client side requests, authentication, and rendering UI components.'
                />
            )
        } else if (currentImage === 1 ) {
            return (
                <ImageBio
                    name="quarkus"
                    description='Back-end microservice for handling server-side API requests to the database.'
                />
            )
        } else if (currentImage === 2 ) {
            return (
                <ImageBio name="postgres" description='Containerized database microservice.' />
            )
        } else if (currentImage === 3 ) {
            return (
                <ImageBio name="amq" description='Data streaming microservice.' />
            )
        }
    }
    

    const handleImageTab = (e: any, index: number) => {
        e.preventDefault()
        setCurrentImage(index)
        console.log(currentImage)
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 xl:max-w-6xl mx-auto gap-4 px-2 lg:px-4 pb-20">
            <div className='col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
                <p className='text-white text-3xl font-bold'>Kubernetes Stack</p>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-2">
                <div className='flex items-center h-full justify-center p-4 cursor-pointer border border-gray-700 rounded-xl'>
                    {renderBio()}
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-2">
                <div className="flex flex-row items-center justify-around space-x-2">
                    <>
                    {containers.map((image, i) => (
                        <div key={i} onClick={(e) => handleImageTab(e,i)} className={`flex relative ${i === currentImage ? 'animate-none' : 'animate-pulse'} w-full h-24 items-center justify-center pt-4 px-2 bg-[#070D0D] border border-purple-400 border-dashed rounded-xl shadow-md cursor-pointer`}>
                            <Image
                                priority
                                className={`absolute -right-2 -top-3`}
                                src="podman.svg"
                                alt="Next.js Logo"
                                width={30}
                                height={10}
                            />
                            {renderImage(image.logo)}
                    </div>
                    ))}

                    </>
                </div>
                <div className='flex items-center h-24 justify-center p-4 bg-[#070D0D] border border-red-600 border-dashed rounded-xl shadow-md cursor-pointer'>
                    <Image
                        priority
                        src="/openshift.svg"
                        alt="OpenShift Logo"
                        width={180}
                        height={37}
                    />
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-2">
                <div className='flex items-center h-full justify-center p-4 cursor-pointer pt-24'>
                        <Image
                            priority
                            src="/redhatdev.svg"
                            alt="OpenShift Logo"
                            width={400}
                            height={400}
                        />
                    </div>
            </div>
        </section>
    )
}

export default Stack