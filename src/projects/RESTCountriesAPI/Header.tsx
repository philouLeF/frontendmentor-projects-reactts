import { useContext } from "react";
import { DarkModeContext } from "../../dark-mode/DarkModeContext";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={darkMode ? "dark" : ""}>
      <h1 className="bg-black dark:bg-white">Where in the world?</h1>
      <button onClick={toggleDarkMode}>Switch</button>
    </header>
  );
};

export default Header;
