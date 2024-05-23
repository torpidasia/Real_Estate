import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-600 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <div className="text-2xl font-bold text-white">
            Real Estate
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/home">
            <span className="text-lg text-white hover:text-gray-200">Home</span>
          </Link>
          <Link to="/about">
            <span className="text-lg text-white hover:text-gray-200">About</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 000 14 7 7 0 000-14zM21 21l-4-4"
              />
            </svg>
          </div>

          <Link to="/profile">
            {currentUser ? (
              <img
              src={currentUser?.avatar || 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg'}
                alt="avatar"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
            ) : (
              <button className="bg-white text-gray-800 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                Sign In
              </button>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
