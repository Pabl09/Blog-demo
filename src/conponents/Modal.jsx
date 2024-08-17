import React from 'react'

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}
        `}>
            <div className="modal-container flex items-center justify-center min-h-screen">
                <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-center p-8 h-auto lg:w-[400px] rounded-lg shadow-2xl">
                    {/* Modal content */}
                    <h2 className="text-3xl font-bold mb-8 text-white">Welcome Bloger</h2>
                    <form className="px-4">
                        {/* Email */}
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full rounded-full border-0 bg-white/80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
                            />
                        </div>
                        {/* Password */}
                        <div className="mb-6">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full rounded-full border-0 bg-white/80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
                            />
                        </div>
                        {/* Login button */}
                        <div>
                            <button
                                className="w-full rounded-full bg-indigo-700 hover:bg-indigo-800 py-3 px-6 text-base font-bold text-white outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300">Login</button>
                        </div>
                    </form>

                    {/* Modal close button */}
                    <button onClick={onClose} className="w-full bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-6 rounded-full mt-6 transition-all duration-300">Close</button>
                </div>
            </div>

        </div>
    )
}

export default Modal