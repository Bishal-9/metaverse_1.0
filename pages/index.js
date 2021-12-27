import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Metaverse Challenge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-2xl'>Welcome to Metaverse Challenge</h1>
        </div>
    )
}
