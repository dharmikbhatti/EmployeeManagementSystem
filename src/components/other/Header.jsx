const Header = ({ data }) => {
    console.log(data.adminName)
    const handleLogout = () => {
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        <header className="bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl m-6">
            <div className="max-w-7xl mx-auto px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Title */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="group flex items-center gap-3 text-4xl font-extrabold text-gray-800 hover:scale-105 transform transition-all duration-500 ease-out cursor-pointer">
                                <span className="text-2xl text-gray-800 font-bold tracking-wide">Welcome,</span>
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-colors duration-300">
                                        {data.role === "admin" ? data.adminName : data.firstName}
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </span>
                            </h1>
                        </div>
                        <div className="hidden md:block ml-16">
                            <div className="flex items-baseline space-x-8">
                                <a href="#" className="px-5 py-2.5 rounded-2xl text-sm font-medium text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:scale-105 transition-all duration-300 active:scale-95">Dashboard</a>
                                <a href="#tasklist" className="px-5 py-2.5 rounded-2xl text-sm font-medium text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:scale-105 transition-all duration-300 active:scale-95">Tasks</a>
                                <a href="#" className="px-5 py-2.5 rounded-2xl text-sm font-medium text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:scale-105 transition-all duration-300 active:scale-95">Analytics</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Elements */}
                    <div className="flex items-center space-x-8">
                        {/* Profile Section */}
                        <div className="relative">
                            <button className="flex items-center space-x-3 bg-gradient-to-r from-white/30 to-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl hover:from-white/40 hover:to-white/60 transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20 shadow-lg hover:shadow-xl">
                                <img
                                    src="https://api.dicebear.com/6.x/avataaars/svg?seed=Felix"
                                    alt="avatar"
                                    className="w-8 h-8 rounded-xl shadow-md group-hover:shadow-lg transition-all ring-2 ring-white/50 group-hover:ring-white/70"
                                />
                                <span className="hidden md:block text-sm font-semibold text-gray-700 group-hover:text-gray-900 tracking-wide">{data.role === "admin" ? data.adminName : data.firstName}</span>
                            </button>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
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
