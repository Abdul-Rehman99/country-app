import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";


const CardList = ({ searchTerm, selectedOption }) => {
  const [countryData, setCountryData] = useState([]); // Full country data
  const [filteredData, setFilteredData] = useState([]); // Filtered country data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCountryData(data);
      setFilteredData(data); // Initially set filtered data to full data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Ensure loading state is updated even on errors
    }
  };

  // Handle search and filter logic
  useEffect(() => {
    let filteredCards = countryData;

    // Filter by selected option (continent)
    if (selectedOption && !searchTerm) {
      const fetchContinent = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectedOption}`
        );
        const data = await response.json();
        setFilteredData(data); // Update filtered data with continent results
      };
      fetchContinent();
    } else if (searchTerm) {
      // Filter by search term
      filteredCards = countryData.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredData(filteredCards); // Update filtered data with search results
    } else {
      // If no search term or option, show full list
      setFilteredData(countryData);
    }
  }, [selectedOption, searchTerm, countryData]); // Watch countryData as well

  return (
    <div className="container mx-auto px-4 py-6 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array(24)
              .fill(0)
              .map((_, i) => <CardSkeleton key={i} />)
          : filteredData.map((country) => (
              <Card
                key={country?.name.common}
                name={country?.name.common}
                flag={country?.flags.svg}
                population={country?.population.toLocaleString("en-IN")}
                region={country?.region}
                capital={country?.capital?.[0]}
              />
            ))}
      </div>
    </div>
  );
};


export default CardList;
