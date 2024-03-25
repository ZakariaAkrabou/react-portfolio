import './theme.css'; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { useEffect, useState } from 'react';

const getLocalStorage = () => {
  let theme = localStorage.getItem('theme') || 'light-theme'; 
  return theme;
}

const Theme = () => {
  const [theme, setTheme] = useState(getLocalStorage());

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <span className="Bg-toggler" onClick={toggleTheme}>
      <FontAwesomeIcon icon={faMoon} />
    </span>
  );
};

export default Theme;
