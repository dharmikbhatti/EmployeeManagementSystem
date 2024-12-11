import React from 'react'
import { IoCheckmarkSharp } from "react-icons/io5";

const NewTask = ({data}) => {
    return (
        <>
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:rotate-2">
                <div className="h-2 bg-purple-300"></div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-purple-700 rounded-full">{data.category}</span>
                        <span className="text-sm text-white">{data.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{data.title}</h2>
                    <p className="text-white opacity-90 mb-4">{data.description}</p>
                    <div className="flex flex-col gap-4">
                        
                        <button className="w-full px-4 py-2.5 bg-emerald-500 text-white rounded-lg font-medium shadow-lg hover:bg-emerald-600 active:bg-emerald-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">

                            <IoCheckmarkSharp className="w-5 h-5" />
                            Accept Task
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewTask