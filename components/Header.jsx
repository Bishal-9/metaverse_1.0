import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {

    const { user } = useMoralis()

    return (
        <div className='sticky top-0 p-5 z-50 bg-[#1b262c] shadow-sm text-[#bbe1fa] border-b-2 border-[#bbe1fa]'>
            <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        src='https://www.bbconsult.co.uk/wp-content/uploads/2016/09/81b3e0_7bbd31e51ebf437baf384172b82bd3cbmv21.webp'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full'
                    />
                </div>

                <div className="col-span-4 text-left lg:text-center">

                    <div className='relative h-48 w-48 lg:mx-auto border-[#bbe1fa] border-8 rounded-full'>

                        {/* Avatar */}
                        <Avatar logoutOnPress />
                    </div>

                    {/* Welcome Message */}
                    <h1 className='text-3xl'>Welcome to the Bishal9 Metaverse</h1>

                    {/* User name */}
                    <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

                    {/* Change username component */}
                    <ChangeUsername />

                </div>
            </div>
        </div>
    )
}

export default Header
