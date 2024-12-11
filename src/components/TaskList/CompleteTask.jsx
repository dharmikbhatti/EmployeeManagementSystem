import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

const CompleteTask = ({data}) => {
    return (
        <>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-rotate-2">
                <div className="h-2 bg-cyan-300"></div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-cyan-700 rounded-full">{data.category}</span>
                        <span className="text-sm text-white">{data.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{data.title}</h2>
                    <p className="text-white opacity-90 mb-4">{data.description}</p>

                    <div className="flex gap-4">
                        <h1 className="w-full px-6 py-3 font-semibold text-white bg-gradient-to-r rounded-lg transform transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer select-none">
                            <IoCheckmarkSharp className="w-6 h-6 text-white animate-pulse" />
                            <span className="tracking-wide text-xl">Completed Task</span>
                        </h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CompleteTask