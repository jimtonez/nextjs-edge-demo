import '../styles/globals.css'
import Header from '../components/Header'
import { getServerSession } from "next-auth"
import AuthContext from './AuthContext'

// import dynamic from 'next/dynamic'
// const Header = dynamic(() => import("../components/Header"), {
// ssr: false,
// });

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContext session={session}>
        {children}
        </AuthContext>
      </body>
    </html>
  )
}
