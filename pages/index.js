import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'

export default function Home() {

    const { isAuthenticated, isInitializing } = useMoralis()

    if (!isAuthenticated) return <Login />

    if (isInitializing) (
        <div className='flex items-center justify-center w-screen h-screen bg-black'>
            <h1 className='text-5xl text-[#bbe1fa] animate-pulse'>Loading...</h1>
        </div>
    )

    return (
        <div className="h-screen overflow-y-scroll bg-gradient-to-b from-[#1b262c] to-[#3282b8] overflow-hidden">
            <Head>
                <title>Metaverse Challenge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-screen-2xl mx-auto">
                {/* Header */}
                <Header />

                {/* Messages */}
                <Messages />
                
            </div>
        </div>
    )
}
