import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const CountryDetail = () => {
  const { name } = useParams();
  const [isLoading,setIsLoading] = useState(true)
  const [countryData,setCountryData] = useState([])

  useEffect(() => {
    fetchDataByName(name)
  },[name])

  const fetchDataByName = async (name) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setCountryData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Ensure loading state is updated even on errors
    }
  };



  return (
    <div className='dark'>
    <Navbar />
    <div className='h-24'></div>
    {
      isLoading ? <h1>Loading.......</h1>:
      countryData.map((country) => {
        return(
          <Card
          key={country?.name.common}
          name={country?.name.common}
          flag={country?.flags.svg}
          population={country?.population.toLocaleString("en-IN")}
          region={country?.region}
          capital={country?.capital?.[0]}
        />
        )
      })

    }
    </div>
  )
}

export default CountryDetail