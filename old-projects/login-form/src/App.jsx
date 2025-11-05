import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(true);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <h2>Hello, welcome to my website</h2>
      <div className="input-container">
        <input placeholder="Email" />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button className="show-button" onClick={toggleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div className="button-container">
        <button className="login-button">Login</button>
        <button className="login-button">Sign Up</button>
      </div>
    </>
  );
}

export default App;
