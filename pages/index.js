import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'

export default function Home() {

    const { isAuthenticated, isInitializing, logout } = useMoralis()

    if (!isAuthenticated) return <Login />

    if (isInitializing) (
        <div className='flex items-center justify-center w-screen h-screen bg-black'>
            <h1 className='text-5xl text-yellow-500 animate-pulse'>Loading...</h1>
        </div>
    )

    return (
        <div className="">
            <Head>
                <title>Metaverse Challenge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-2xl'>Welcome to Metaverse Challenge</h1>
            <h3>Welcome to my first DApp</h3>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}
