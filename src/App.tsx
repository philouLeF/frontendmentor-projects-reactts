import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

import RESTCountriesAPI from "./projects/RESTCountriesAPI/RESTCountriesAPI";
import { DarkModeProvider } from "./dark-mode/DarkModeProvider";

const App: React.FC = () => (
  <DarkModeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rest-countries-api" element={<RESTCountriesAPI />} />
      </Routes>
    </Router>
  </DarkModeProvider>
);

export default App;
