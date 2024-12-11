import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const Login = ({handleLogin}) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [showInstructions, setShowInstructions] = useState(false)
  
  const sumbitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <>
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200 animate-fadeIn">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-center mb-8 font-serif">Welcome Back</h1>
                <form className="space-y-6" onSubmit={sumbitHandler}>
                    <div className="space-y-2">
                        <label className="text-lg font-medium tracking-wide block text-gray-700">Email</label>
                        <div className="relative">
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}
                                type="email" 
                                placeholder="Enter your email" 
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 pl-12 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            />
                            <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-lg font-medium tracking-wide block text-gray-700">Password</label>
                        <div className="relative">
                            <input 
                                onChange={(e) => setPassword(e.target.value)} 
                                value={password}
                                type="password" 
                                placeholder="Enter Password" 
                                required
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 pl-12 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            />
                            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        </div>
                    </div>
                    <button 
                        className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold tracking-wide hover:opacity-90 transform hover:scale-[0.99] transition-all duration-300 shadow-lg hover:shadow-orange-500/25 mt-8"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6">
                    <button
                        onClick={() => setShowInstructions(!showInstructions)}
                        className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors duration-300 flex items-center justify-center w-full"
                    >
                        {showInstructions ? "Hide Login Instructions" : "Show Login Instructions"}
                    </button>
                    {showInstructions && (
                        <div className="mt-4 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl text-sm space-y-4 border border-orange-100 shadow-inner">
                            <div className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg hover:bg-white transition-colors duration-300">
                                <div className="p-2 bg-orange-100 rounded-lg">
                                    <FaUserCircle className="h-5 w-5 text-orange-600" />
                                </div>
                                <div>
                                    <span className="font-semibold text-orange-600">For Employees:</span>
                                    <p className="text-gray-600">Use employee1@example.com and password "123"</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg hover:bg-white transition-colors duration-300">
                                <div className="p-2 bg-amber-100 rounded-lg">
                                    <MdAdminPanelSettings className="h-5 w-5 text-amber-600" />
                                </div>
                                <div>
                                    <span className="font-semibold text-amber-600">For Admin:</span>
                                    <p className="text-gray-600">Use admin@gmail.com and password "123"</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>            
            </div>
        </div>
    </>
  )
}

export default Login