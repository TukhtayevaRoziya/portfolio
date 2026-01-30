import React, { useEffect, useState } from "react";

import "./Switch.css";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  if (darkMode){
    document.body.className = 'dark';
  }else{
    document.body.classList.remove('dark');
  }

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedModeRaw = localStorage.getItem("dark");
    const savedMode = savedModeRaw ? JSON.parse(savedModeRaw) : false;

    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode((prevMode: any) => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
              aria-label="Check"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
         
        </div>
      </nav>
    </div>
  );
}

export default Switch