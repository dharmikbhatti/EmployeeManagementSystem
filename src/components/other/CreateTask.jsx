import { useState } from 'react';
import moment from 'moment';

const CreateTask = () => {
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
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
                Add New Task
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-bold text-gray-900">Create New Task</h2>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Task Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={taskData.title}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                                        placeholder='Enter task title..'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="dueDate" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Due Date
                                    </label>
                                    <input
                                        type="date"
                                        id="dueDate"
                                        name="dueDate"
                                        value={taskData.dueDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="assignedTo" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Assign To
                                    </label>
                                    <input
                                        type="email"
                                        id="assignedTo"
                                        name="assignedTo"
                                        value={taskData.assignedTo}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={taskData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
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
                                    <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={taskData.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-900"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-6 py-3 mr-4 bg-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-400 transition-colors duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
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
    );
};

export default CreateTask;
