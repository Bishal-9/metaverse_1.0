import { Fragment, useRef, useState } from 'react'
import { useMoralis } from "react-moralis"
import { Dialog, Transition } from '@headlessui/react'

function ChangeUsername() {

    const { setUserData, isUserUpdating, userError, user } = useMoralis()
    const [open, setOpen] = useState(false)
    const [userName, setUserName] = useState('')
    const cancelButtonRef = useRef(null)

    const setUsername = e => {
        e.preventDefault()

        
        // const username = prompt('Enter your new username (current: ' + user.getUsername() + ')')
        
        if (!userName) return 
        
        setUserData({ username: userName })
        setOpen(false)
        setUserName('')
    }

    const handleToggle = e => {
        e.preventDefault()

        setOpen(true)
    }

    return (
        <div className="text-sm absolute top-5 right-5">
            <button
                className="hover:text-[#3282b8]"
                disabled={isUserUpdating}
                onClick={handleToggle}
            >
                Change your username
            </button>

            {/* Modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-[#bbe1fa] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-[#3282b8]">
                                                Enter your new username
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <input
                                                    className="text-sm text-[#bbe1fa] w-full bg-[#0f4c75] p-2 rounded-full mt-4 outline-none"
                                                    value={userName}
                                                    onChange={e => setUserName(e.target.value)}
                                                />
                                            </div>
                                            <p className='text-xs ml-5'>
                                                Current username: {user.getUsername()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#bbe1fa] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#3282b8] text-base font-medium text-white hover:bg-[#0f4c75] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f4c75] sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={setUsername}
                                    >
                                        Change username
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-[#3282b8] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3282b8] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default ChangeUsername
