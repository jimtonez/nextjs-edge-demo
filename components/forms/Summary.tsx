

interface Subscription {
    name: string,
    price: string
}


function Summary ( subscription: Subscription) {

    const renderTag = () => {
        if ( subscription.name === "Standard" ) {
            return (
                <div className="flex animate-pulse h-8 w-24 md:h-10 md:w-26 items-center justify-center bg-red-400 border border-red-600 text-gray-700 rounded-full p-2">
                    <p>Standard</p>
                </div>
            )
        } else if ( subscription.name === "Premium") {
            return (
                <div className="flex animate-pulse h-8 w-24 md:h-10 md:w-26 items-center justify-center bg-blue-400 border border-blue-600 text-gray-700 rounded-full p-2">
                    <p>Premium</p>
                </div>
            )
        } else if ( subscription.name === "Admin") {
        return (
            <div className="flex mr-6 animate-pulse h-8 w-24 md:h-10 md:w-26 items-center justify-center bg-purple-400 border border-purple-600 text-gray-700 rounded-full p-2">
                <p>Admin</p>
            </div>
        )
        }
    }

    return (
        <div className="flex flex-col w-full h-full">
        <div className="flex flex-col w-full h-1/2 p-4 space-y-4">
            <p className="text-white text-lg font-semibold">Subscription:</p>
            <div className="flex flex-row items-center justify-between">
                {renderTag()}
                <p className="mr-12 md:mr-14 text-white text-lg font-semibold">{"Quantity:" + " " + 1}</p>
                <p className="text-white text-lg font-semibold">{subscription.price}</p>
            </div>
            <div className="flex flex-row w-full items-end justify-between">
                <p className="text-white w-full text-2xl font-semibold">Total:</p>
                <p className="text-white text-2xl font-semibold">{subscription.price}</p>
            </div>

        </div>
    </div>
    )
}

export default Summary