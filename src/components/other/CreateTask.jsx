import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5"

const CreateTask = () => {
    return (
        <>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mt-8 sm:mt-12 lg:mt-16 mx-4 sm:mx-8 lg:mx-auto max-w-2xl">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
                        <input
                            type="text"
                            placeholder="Category"
                            className="px-4 py-2 text-sm bg-gray-50 text-gray-800 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:bg-gray-100 w-full sm:w-auto"
                        />
                        <input
                            type="date"
                            className="text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:bg-gray-100 w-full sm:w-auto"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Task Title"
                        className="w-full text-xl sm:text-2xl font-bold text-gray-800 mb-4 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-all duration-300 px-2 py-1 placeholder-gray-400"
                    />
                    <textarea
                        placeholder="Task Description"
                        className="w-full text-gray-700 mb-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none h-24 sm:h-32 rounded-lg p-3 placeholder-gray-400 hover:bg-gray-100"
                    />
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Assigned To (email or username)"
                            className="w-full text-gray-800 bg-gray-50 rounded-lg px-4 py-2.5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:bg-gray-100 border border-gray-200"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 active:shadow-inner transition-all duration-300 flex items-center justify-center gap-3">
                            <IoAddCircleOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-sm sm:text-base">Create New Task</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTask
