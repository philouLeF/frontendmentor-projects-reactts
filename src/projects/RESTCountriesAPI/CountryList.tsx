import { useEffect, useState } from "react";
import Country from "./Country";

type Country = {
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

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <Country key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
