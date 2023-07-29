import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RESTCountriesAPI from "./projects/RESTCountriesAPI/RESTCountriesAPI";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rest-countries-api" element={<RESTCountriesAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
