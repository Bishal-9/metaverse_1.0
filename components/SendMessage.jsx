import { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({ endOfMessagesRef }) {

    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState('')

    const sendMessage = e => {
        e.preventDefault()

        if (!message) return

        const Messages = Moralis.Object.extend('Messages')
        const messages = new Messages()

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then(message => {
            
        }, error => {
            console.log(error.message)
        })

        endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
        setMessage('')
    }

    return (
        <form className='flex fixed bottom-10 bg-[#1b262c] opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-[#bbe1fa]'>
            <input
                type="text"
                className="flex-grow pr-5 outline-none bg-transparent text-white placeholder-gray-500"
                placeholder={`Enter a message ${user.getUsername()}...`}
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button
                type='submit'
                className="font-bold text-[#bbe1fa]"
                onClick={sendMessage}
            >
                Send
            </button>
        </form>
    )
}

export default SendMessage
