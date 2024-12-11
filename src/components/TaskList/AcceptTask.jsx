import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:-rotate-2">
                <div className="h-2 bg-pink-300"></div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-pink-700 rounded-full">{data.category}</span>
                        <span className="text-sm text-white">{data.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{data.title}</h2>
                    <p className="text-white opacity-90 mb-4">{data.description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">Mark Complete</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">Mark Incomplete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcceptTask