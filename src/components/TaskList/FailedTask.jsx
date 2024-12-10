import React from 'react'
import { IoClose } from 'react-icons/io5'

const FailedTask = () => {
  return (
    <>
    <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-rotate-2">
        <div className="h-2 bg-rose-300"></div>
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-rose-700 rounded-full">High Priority</span>
                <span className="text-sm text-white">Due: July 25, 2025</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sales Report Analysis</h2>
            <p className="text-white opacity-90 mb-4">Critical deadline missed for Q2 sales report analysis and presentation.</p>

            <div className="flex gap-4">
                <div className="w-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-700 rounded-lg transform transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
                    <IoClose className="w-6 h-6 text-white" />
                    <span className="tracking-wide text-xl">Task Failed</span>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default FailedTask