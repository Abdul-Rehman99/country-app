import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ searchTerm, setSearchTerm, selectedOption, setSelectedOption }) => {
  return (
    <div className="flex flex-col px-24 sm:flex-row mt-20 justify-between items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-md">
      {/* Search Input */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-md w-full sm:max-w-md">
        <IoSearchSharp className="text-gray-500 dark:text-gray-300 mr-2" />
        <input
          type="text"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search a country..."
          className="bg-transparent border-none outline-none w-full text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
      {/* Region Selector */}
      <div className="w-full sm:w-auto">
        <select
          name="region"
          value={selectedOption} 
          onChange={(e) => setSelectedOption(e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-md border-none outline-none w-full sm:w-auto"
        >
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;

