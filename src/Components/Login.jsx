import React, { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    //  simple login with username and password
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      // Store user information in local storage
      localStorage.setItem("isLoggedIn", "true");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <form style={{ width: "40%", margin: "0 auto" }}>
        <h1 className="h3 mb-3 fw-bold text-center my-5">Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group fw-bold my-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group fw-bold my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-lg btn-primary my-3"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
