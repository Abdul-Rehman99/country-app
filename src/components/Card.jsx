import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({flag,name,population,region,capital}) => {
  return (
<Link to={`/country/${name}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
  <img className="w-full h-48 object-cover" src={flag} alt="country-name" />
  <div className="px-6 py-4">
    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{name}</h3>
    <p className="text-gray-700 text-base mb-2 dark:text-gray-300">
      <span className="font-semibold">Population: </span>{population}
    </p>
    <p className="text-gray-700 text-base mb-2 dark:text-gray-300">
      <span className="font-semibold">Region: </span>{region}
    </p>
    <p className="text-gray-700 text-base dark:text-gray-300">
      <span className="font-semibold">Capital: </span>{capital}
    </p>
  </div>
</Link>

  );
}

export default Card