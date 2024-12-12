import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { IoAddCircleOutline } from "react-icons/io5"

const AllTask = ({ data }) => {
    const authData = useContext(AuthContext)
    const [showCreateTask, setShowCreateTask] = useState(false)
    const [employees, setEmployees] = useState([])
    const [categories, setCategories] = useState([])
    const [taskData, setTaskData] = useState({
        category: '',
        date: '',
        title: '',
        description: '',
        assignedTo: ''
    })

    // Load data on initial render and when localStorage changes
    useEffect(() => {
        const loadData = () => {
            const employeeData = JSON.parse(localStorage.getItem('employees')) || []
            
            // Get any new tasks from newAddedData and merge them
            const newAddedData = JSON.parse(localStorage.getItem('newAddedData')) || []
            
            if (newAddedData.length > 0) {
                newAddedData.forEach(newTask => {
                    const employeeIndex = employeeData.findIndex(emp => emp.firstName === newTask.assignedTo)
                    if (employeeIndex !== -1) {
                        // Check if task already exists to avoid duplicates
                        const taskExists = employeeData[employeeIndex].tasks.some(task => 
                            task.title === newTask.title && 
                            task.date === newTask.date &&
                            task.description === newTask.description
                        )
                        
                        if (!taskExists) {
                            // Add new task and update counts
                            employeeData[employeeIndex].tasks.push(newTask)
                            employeeData[employeeIndex].taskCounts.isNew += 1
                            
                            // Update localStorage immediately
                            localStorage.setItem('employees', JSON.stringify(employeeData))
                        }
                    }
                })
            }
            
            setEmployees(employeeData)

            // Extract unique categories from all tasks
            const allCategories = new Set()
            employeeData.forEach(employee => {
                employee.tasks.forEach(task => {
                    allCategories.add(task.category)
                })
            })
            setCategories(Array.from(allCategories))
        }

        // Load initial data
        loadData()

        // Add event listener for storage changes
        window.addEventListener('storage', loadData)

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('storage', loadData)
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setTaskData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        const data = JSON.parse(localStorage.getItem('employees'))
        
        // Generate new taskId
        const assignedEmployee = data.find(e => e.firstName === taskData.assignedTo)
        const newTaskId = assignedEmployee.tasks.length + 1

        const newTask = {
            ...taskData,
            taskId: newTaskId,
            active: false,
            isNew: true,
            completed: false,
            failed: false
        }

        // Update employee data
        data.forEach(employee => {
            if (employee.firstName === taskData.assignedTo) {
                employee.tasks.push(newTask)
                employee.taskCounts.isNew += 1
            }
        })

        // Store in employees localStorage
        localStorage.setItem('employees', JSON.stringify(data))
        
        // Store in newAddedData localStorage
        const newAddedData = JSON.parse(localStorage.getItem('newAddedData')) || []
        newAddedData.push(newTask)
        localStorage.setItem('newAddedData', JSON.stringify(newAddedData))
        
        // Update state
        setEmployees(data)

        // Reset form
        setTaskData({
            category: '',
            date: '',
            title: '',
            description: '',
            assignedTo: ''
        })

        setShowCreateTask(false)
        
        // Trigger storage event manually since we're in the same window
        window.dispatchEvent(new Event('storage'))
    }

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col items-center gap-8 mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-colors duration-500 animate-gradient">
                            All Tasks Overview
                        </span>
                    </h1>

                    <button
                        onClick={() => setShowCreateTask(true)}
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 active:shadow-inner transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-[1.02] w-full sm:w-auto"
                    >
                        <IoAddCircleOutline className="w-6 h-6" />
                        <span className="text-lg">Add New Task</span>
                    </button>
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
                        {employees.map((e, index) => (
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

            {showCreateTask && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
                    <div className="relative w-full max-w-2xl transform hover:scale-[1.01] transition-transform duration-300">
                        <button
                            onClick={() => setShowCreateTask(false)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 font-medium"
                        >
                            Close
                        </button>
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                            <form className="p-4 sm:p-6 lg:p-8 space-y-6" onSubmit={submitHandler}>
                                <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                                    <select
                                        name="category"
                                        value={taskData.category}
                                        onChange={handleChange}
                                        className="px-4 py-2 text-sm bg-gray-50 text-gray-800 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:bg-gray-100 w-full sm:w-auto border border-gray-200"
                                        required
                                    >
                                        <option value="" className="text-gray-900">Select Category</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category} className="text-gray-900">
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="date"
                                        name="date"
                                        value={taskData.date}
                                        onChange={handleChange}
                                        className="text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:bg-gray-100 w-full sm:w-auto"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    value={taskData.title}
                                    onChange={handleChange}
                                    placeholder="Task Title"
                                    className="w-full text-xl sm:text-2xl font-bold text-gray-800 bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-all duration-300 px-2 py-1 placeholder-gray-400"
                                    required
                                />
                                <textarea
                                    name="description"
                                    value={taskData.description}
                                    onChange={handleChange}
                                    placeholder="Task Description"
                                    className="w-full text-gray-700 bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none h-24 sm:h-32 rounded-lg p-3 placeholder-gray-400 hover:bg-gray-100"
                                    required
                                />

                                <select
                                    name="assignedTo"
                                    value={taskData.assignedTo}
                                    onChange={handleChange}
                                    className="w-full text-gray-800 bg-gray-50 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:bg-gray-100 border border-gray-200"
                                    required
                                >
                                    <option value="" className="text-gray-900">👥 Select team member...</option>
                                    {employees.map((employee, index) => (
                                        <option key={index} value={employee.firstName} className="text-gray-900">
                                            {employee.firstName}
                                        </option>
                                    ))}
                                </select>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 active:shadow-inner transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-[1.02]"
                                >
                                    <IoAddCircleOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                                    <span className="text-sm sm:text-base">Create New Task</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AllTask