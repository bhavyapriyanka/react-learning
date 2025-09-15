import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./App.css";

function TogglePassword() {
  const [Password, setPassword] = useState("");
  const [ison, setIsOn] = useState("off");
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={ison === "off" ? "password" : "text"}
          id="password"
          placeholder="Enter password"
          value={Password}
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
          className="password-input"
          data-testid="password-input"
        />
        <span className="icon" data-testid="toggle-icon">
          {ison == "off" ? (
            <EyeOff size={18} onClick={() => setIsOn("on")} />
          ) : (
            <Eye size={18} onClick={() => setIsOn("off")}></Eye>
          )}
        </span>
      </div>

      <span className="visibility-label" data-testid="visibility-label">
        {ison === "off" ? "Password Hidden" : "Password Visible"}
      </span>
    </div>
  );
}

export default TogglePassword;
