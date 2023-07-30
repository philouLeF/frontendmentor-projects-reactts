import React from "react";
import { Link } from "react-router-dom";

type CountryProps = {
  country: {
    name: {
      common: string;
    };
    flags: {
      png: string;
    };
    population: number;
    region: string;
    capital: string;
    cca3: string;
  };
};

const Country: React.FC<CountryProps> = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div>
        <img src={country.flags.png} alt={country.name.common} />
        <h2>{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </Link>
  );
};

export default Country;
