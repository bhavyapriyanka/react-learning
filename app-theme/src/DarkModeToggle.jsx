import React, { useEffect, useState } from "react";

function DarkModeToggle() {
  const [mode, setMode] = useState(false);
  console.log(mode);

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.checked);
    setMode(e.target.checked);
  };

  return (
    <div className={mode ? "dark-mode container" : "light-mode container"}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={mode} onChange={handleChange} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text"></span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
