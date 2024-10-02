import { MdOutlineDarkMode } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
      <button 
      onClick={() => navigate('/')}
      className="text-lg font-bold text-gray-900 dark:text-white">Where in the world?</button>
      <button className="flex items-center text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
        <MdOutlineDarkMode className="mr-2 text-xl" />
        <span>Dark Mode</span>
      </button>
    </nav>
  );
};

export default Navbar;
