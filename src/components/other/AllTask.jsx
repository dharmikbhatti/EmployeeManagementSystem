import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex justify-center items-center mb-8 sm:mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-colors duration-500 animate-gradient">
                            All Tasks Overview
                        </span>
                    </h1>
                </div>

                <div className="bg-gradient-to-br from-white/90 to-gray-50/90 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl backdrop-blur-lg mt-8 border border-gray-100/30 hover:shadow-2xl transition-all duration-500 hover:from-white/95 hover:to-gray-50/95">
                    <div className="bg-gradient-to-r from-blue-50/95 to-purple-50/95 mb-6 flex items-center justify-between rounded-2xl py-4 px-4 sm:px-8 shadow-lg border border-gray-100/50 hover:from-blue-100/95 hover:to-purple-100/95 transition-all duration-300">
                        <h2 className='w-1/5 font-bold text-sm sm:text-base lg:text-xl text-gray-800 text-center'>Employee</h2>
                        <h3 className='w-1/5 font-bold text-sm sm:text-base lg:text-xl text-gray-800 text-center'>New</h3>
                        <h3 className='w-1/5 font-bold text-sm sm:text-base lg:text-xl text-gray-800 text-center'>Active</h3>
                        <h3 className='w-1/5 font-bold text-sm sm:text-base lg:text-xl text-gray-800 text-center'>Completed</h3>
                        <h3 className='w-1/5 font-bold text-sm sm:text-base lg:text-xl text-gray-800 text-center'>Failed</h3>
                    </div>

                    <div className="h-[450px] sm:h-[500px] lg:h-[600px] overflow-auto custom-scrollbar pr-2 space-y-4">
                        {authData.employee.map((e, index) => (
                            <div 
                                key={index} 
                                className="bg-white/95 flex items-center justify-between rounded-xl py-3 sm:py-4 px-4 sm:px-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg border border-gray-100/50 backdrop-blur-sm group"
                            >
                                <h2 className='w-1/5 text-gray-700 font-semibold text-center text-sm sm:text-base truncate'>{e.firstName}</h2>
                                <h3 className='w-1/5 flex justify-center items-center'>
                                    <span className="bg-purple-100 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-purple-700 font-medium hover:bg-purple-200 transition-colors duration-300 min-w-[40px] sm:min-w-[60px] text-center text-sm sm:text-base group-hover:shadow-md">
                                        {e.taskCounts.isNew}
                                    </span>
                                </h3>
                                <h3 className='w-1/5 flex justify-center items-center'>
                                    <span className="bg-amber-100 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-amber-700 font-medium hover:bg-amber-200 transition-colors duration-300 min-w-[40px] sm:min-w-[60px] text-center text-sm sm:text-base group-hover:shadow-md">
                                        {e.taskCounts.active}
                                    </span>
                                </h3>
                                <h3 className='w-1/5 flex justify-center items-center'>
                                    <span className="bg-emerald-100 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-emerald-700 font-medium hover:bg-emerald-200 transition-colors duration-300 min-w-[40px] sm:min-w-[60px] text-center text-sm sm:text-base group-hover:shadow-md">
                                        {e.taskCounts.completed}
                                    </span>
                                </h3>
                                <h3 className='w-1/5 flex justify-center items-center'>
                                    <span className="bg-rose-100 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-rose-700 font-medium hover:bg-rose-200 transition-colors duration-300 min-w-[40px] sm:min-w-[60px] text-center text-sm sm:text-base group-hover:shadow-md">
                                        {e.taskCounts.failed}
                                    </span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllTask