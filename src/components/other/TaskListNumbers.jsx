

import { IoMdAdd } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const TaskListNumbers = ({data}) => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* New Task Card */}
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-emerald-300/30">
                    <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-emerald-300/30 rounded-xl backdrop-blur-sm">
                            <IoMdAdd className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-base font-semibold text-emerald-50">New Tasks</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">{data.taskCounts.isNew}</h3>
                    <p className="text-emerald-50 text-sm font-medium">Tasks added this week</p>
                </div>

                {/* Accept Task Card */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-blue-300/30">
                    <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-blue-300/30 rounded-xl backdrop-blur-sm">
                            <IoCheckmarkCircleOutline className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-base font-semibold text-blue-50">Accepted</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">{data.taskCounts.active}</h3>
                    <p className="text-blue-50 text-sm font-medium">Tasks in progress</p>
                </div>

                {/* Complete Task Card */}
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-purple-300/30">
                    <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-purple-300/30 rounded-xl backdrop-blur-sm">
                            <IoCheckmarkSharp className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-base font-semibold text-purple-50">Completed</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">{data.taskCounts.completed}</h3>
                    <p className="text-purple-50 text-sm font-medium">Tasks completed</p>
                </div>

                {/* Failed Task Card */}
                <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-rose-300/30">
                    <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-rose-300/30 rounded-xl backdrop-blur-sm">
                            <IoClose className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-base font-semibold text-rose-50">Failed</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">{data.taskCounts.failed}</h3>
                    <p className="text-rose-50 text-sm font-medium">Tasks failed</p>
                </div>
            </div>
        </div>
    );
};

export default TaskListNumbers;
