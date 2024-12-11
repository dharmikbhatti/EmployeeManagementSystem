import React from 'react'

const Header = ({ data }) => {
    const handleLogout = () => {
        localStorage.removeItem('employees');
        localStorage.removeItem('admin');
        window.location.href = '/';
    };

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl mx-2 sm:mx-4 md:mx-6">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-3 sm:py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                    {/* Logo and Title */}
                    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                        <div className="flex-shrink-0 mb-2 sm:mb-0">
                            <h1 className="group flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 hover:scale-105 transform transition-all duration-500 ease-out cursor-pointer">
                                <span className="text-lg sm:text-xl text-gray-800 font-bold">Welcome,</span>
                                <span className="relative truncate max-w-[150px] sm:max-w-none">
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-colors duration-300">
                                        {data.role === "admin" ? data.adminName : data.firstName}
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </span>
                            </h1>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={toggleMenu}
                            className="sm:hidden w-full px-3 py-1.5 bg-white/30 rounded-xl mb-2 flex items-center justify-between"
                        >
                            <span className="text-gray-700 text-sm font-medium">Menu</span>
                            <svg 
                                className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <div className={`w-full sm:w-auto sm:ml-8 ${isMenuOpen ? 'block' : 'hidden sm:block'}`}>
                            <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4">
                                <a href="#" className="w-full sm:w-auto text-center px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:scale-105 transition-all duration-300 active:scale-95">Dashboard</a>
                                <a href="#tasklist" className="w-full sm:w-auto text-center px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:scale-105 transition-all duration-300 active:scale-95">Tasks</a>
                                <a href="#" className="w-full sm:w-auto text-center px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:scale-105 transition-all duration-300 active:scale-95">Analytics</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Elements */}
                    <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
                        {/* Profile Section */}
                        <div className="relative">
                            <button className="flex items-center gap-2 bg-gradient-to-r from-white/30 to-white/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-xl hover:from-white/40 hover:to-white/60 transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20 shadow-lg hover:shadow-xl">
                                <img
                                    src="https://api.dicebear.com/6.x/avataaars/svg?seed=Felix"
                                    alt="avatar"
                                    className="w-7 h-7 rounded-lg shadow-md group-hover:shadow-lg transition-all ring-2 ring-white/50 group-hover:ring-white/70"
                                />
                                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 tracking-wide truncate max-w-[80px] sm:max-w-none">
                                    {data.role === "admin" ? data.adminName : data.firstName}
                                </span>
                            </button>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
