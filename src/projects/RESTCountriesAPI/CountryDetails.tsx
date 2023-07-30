import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Currency = {
  name: string;
  symbol: string;
};

type Currencies = {
  [key: string]: Currency;
};

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
  subregion: string;
  currencies: Currencies;
  languages: string;
  borders: string[];
  tld: string[];
};

const CountryDetails: React.FC = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const { cca3 } = useParams<{ cca3: string }>();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
      })
      .catch((error) => console.error(error));
  }, [cca3]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} />
      <p>Subregion: {country.subregion}</p>
      <p>Top Level Domain: {country.tld[0]}</p>
      <p>
        Currencies:{" "}
        {Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", ")}
      </p>
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <p>Border Countries: {country.borders.join(", ")}</p>
    </div>
  );
};

export default CountryDetails;
