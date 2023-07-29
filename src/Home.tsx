import Header from "./Header";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ul>
        <li>
          <Link to="/rest-countries-api">REST Countries API</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
