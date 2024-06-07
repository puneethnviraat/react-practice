import React from 'react';
import useLocalStorage from './useLocalStorage';
import './theme.css';

const SwitchTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="theme-container">
        <p>Hello world</p>
        <button onClick={handleChangeTheme}>Change theme</button>
      </div>
    </div>
  );
};

export default SwitchTheme;
