import { useState } from "react";

const Login = ({handleLogin}) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
  
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
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            />
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
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </div>
                    <button 
                        className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold tracking-wide hover:opacity-90 transform hover:scale-[0.99] transition-all duration-300 shadow-lg hover:shadow-orange-500/25 mt-8"
                    >
                        Sign In
                    </button>
                </form>            
            </div>
        </div>
    </>
  )
}

export default Login