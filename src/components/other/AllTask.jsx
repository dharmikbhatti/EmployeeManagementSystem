import { useState } from 'react';

const AllTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskData, setTaskData] = useState({
        title: '',
        dueDate: '',
        assignedTo: '',
        category: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(taskData);
        setIsModalOpen(false);
        setTaskData({
            title: '',
            dueDate: '',
            assignedTo: '',
            category: '',
            description: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className="mt-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-black">All Tasks</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
                        >
                            Add New Task
                        </button>
                    </div>

                    <div id="allTask" className="overflow-auto max-h-[600px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Sample Task Cards - Replace with actual data mapping */}
                            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-200">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-black">Website Redesign</h3>
                                    <span className="px-3 py-1 text-sm bg-blue-100 text-black rounded-full">Design</span>
                                </div>
                                <p className="text-black text-sm mb-4">Redesign the company website with modern UI/UX principles and improved user flow.</p>
                                <div className="flex justify-between items-center text-sm text-black">
                                    <span className="text-gray-700 font-medium">Due: Dec 25, 2023</span>
                                    <span className="px-2 py-1 bg-yellow-100 text-black rounded-lg">In Progress</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-black">Assigned to: john@example.com</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-200">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-black">API Integration</h3>
                                    <span className="px-3 py-1 text-sm bg-purple-100 text-black rounded-full">Development</span>
                                </div>
                                <p className="text-black text-sm mb-4">Implement payment gateway API integration for the e-commerce platform.</p>
                                <div className="flex justify-between items-center text-sm text-black">
                                    <span className="text-gray-700 font-medium">Due: Dec 20, 2023</span>
                                    <span className="px-2 py-1 bg-green-100 text-black rounded-lg">Completed</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-black">Assigned to: sarah@example.com</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-200">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-black">Bug Fixes</h3>
                                    <span className="px-3 py-1 text-sm bg-red-100 text-black rounded-full">Testing</span>
                                </div>
                                <p className="text-black text-sm mb-4">Fix reported bugs in the user authentication module and improve error handling.</p>
                                <div className="flex justify-between items-center text-sm text-black">
                                    <span className="text-gray-700 font-medium">Due: Dec 18, 2023</span>
                                    <span className="px-2 py-1 bg-red-100 text-black rounded-lg">Failed</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-black">Assigned to: mike@example.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 backdrop-blur-lg rounded-2xl shadow-xl w-[500px] mx-4 max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Create New Task</h2>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-1">
                                        Task Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={taskData.title}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 shadow-sm"
                                        placeholder='Enter task title..'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="dueDate" className="block text-sm font-semibold text-gray-900 mb-1">
                                        Due Date
                                    </label>
                                    <input
                                        type="date"
                                        id="dueDate"
                                        name="dueDate"
                                        value={taskData.dueDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 shadow-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="assignedTo" className="block text-sm font-semibold text-gray-900 mb-1">
                                        Assign To
                                    </label>
                                    <input
                                        type="email"
                                        id="assignedTo"
                                        name="assignedTo"
                                        value={taskData.assignedTo}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 shadow-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-1">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={taskData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 shadow-sm"
                                        required
                                    >
                                        <option value="" className="text-gray-900">Select a category</option>
                                        <option value="Design" className="text-gray-900">Design</option>
                                        <option value="Development" className="text-gray-900">Development</option>
                                        <option value="Testing" className="text-gray-900">Testing</option>
                                        <option value="Integration" className="text-gray-900">Integration</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={taskData.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 shadow-sm"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-5 py-2.5 mr-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                                    >
                                        Create Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AllTask
