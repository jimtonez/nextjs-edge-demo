"use client"
import '../../styles/globals.css'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import TabList from '@/components/TabList'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <NavBar />
      </body>
    </html>
  )
}
