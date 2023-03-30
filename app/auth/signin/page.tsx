import { getProviders } from "next-auth/react";
import SignInComponent from './SignInComponent'

async function SignIn() {

    const providers = await getProviders();

    return (
      <main className='flex h-screen w-screen flex-col overflow-y-scroll scrollbar-hide'>
        <div className="flex m-auto pt-10 px-4">
          <div className="bg-[#070D0D] rounded-xl shadow-lg border border-gray-700 border-dashed">
            <SignInComponent providers={providers} />
          </div>
        </div>
      </main>
    )
  }
  
  export default SignIn