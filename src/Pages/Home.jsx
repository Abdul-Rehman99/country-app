import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'
import { useState } from 'react'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <>
    <Navbar />
    <SearchBar
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
    />
    <CardList 
        searchTerm={searchTerm} 
        selectedOption={selectedOption}
    />
    </>
  )
}

export default Home