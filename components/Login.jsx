import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {

    const { authenticate } = useMoralis()

    return (
        <div className="bg-black relative">
            <h1>Login</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-10">
                
                {/* Logo */}
                <Image
                    className='object-cover rounded-full'
                    src='https://www.bbconsult.co.uk/wp-content/uploads/2016/09/81b3e0_7bbd31e51ebf437baf384172b82bd3cbmv21.webp'
                    width={200}
                    height={200}
                />

                {/* Login Button */}
                <button
                    className='bg-[#bbe1fa] rounded-lg p-5 font-bold text-[#0F4C75]'
                    onClick={authenticate}
                >
                    Login to Metaverse
                </button>
            </div>

            {/* Background Picture */}
            <div className="w-full h-screen">
                <Image
                    src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
    )
}

export default Login
