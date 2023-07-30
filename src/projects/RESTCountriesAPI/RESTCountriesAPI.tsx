import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CountryDetails from "./CountryDetails";

const RESTCountriesAPI = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:cca3" element={<CountryDetails />} />
      </Routes>
    </>
  );
};

export default RESTCountriesAPI;
