import Image from "next/image"
import { useMoralis } from "react-moralis"

function Avatar({ username, logoutOnPress }) {

    const { user, logout } = useMoralis()

    return <Image
        src={`https://avatars.dicebear.com/api/big-smile/${username || user.get('username')}.svg`}
        layout="fill"
        className="rounded-full bg-black cursor-pointer hover:opacity-75"
        onClick={() => logoutOnPress && logout()}
    />
}

export default Avatar
