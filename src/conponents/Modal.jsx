import React from 'react'

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}
        `}>
            <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
                <div className="bg-white p-8 h-auto lg:w-[400px] rounded-lg shadow-2xl">
                    {/* Modal content */}
                    <h2 className="text-3xl font-bold mb-8 text-blue-400">Welcome Bloger</h2>
                    <form className="px-4">
                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all duration-300"
                            />
                        </div>
                        {/* Password */}
                        <div className="mb-6">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all duration-300"
                            />
                        </div>
                        {/* Login button */}
                        <div>
                            <button
                                className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-all duration-300"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Modal close button */}
                    <button
                        onClick={onClose}
                        className="w-full bg-transparent hover:bg-orange-100 text-gray-700 font-semibold py-2 px-4 rounded mt-6 transition-all duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal