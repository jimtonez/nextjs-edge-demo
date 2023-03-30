import { useSession } from 'next-auth/react'

export async function getSubscription() {

    const { data: session } = useSession()
    const email = session!.user?.email
    const res = await fetch(`/api/users?email=${email}`);
    const data = await res.json();
    console.log(data)

}