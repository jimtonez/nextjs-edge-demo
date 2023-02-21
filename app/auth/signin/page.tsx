import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import SignInComponent from './SignInComponent'

async function SignIn() {

    const providers = await getProviders();

    return (
      <>
        <div className="2xl:container flex m-auto pt-10 px-4 justify-center">
          <div className="relative lg:w-6/12 bg-[#070D0D] rounded-xl shadow-lg border border-gray-700 border-dashed">
            <SignInComponent providers={providers} />
          </div>
        </div>
      </>
    )
  }
  
  export default SignIn