import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import users from "../../data/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      if (user.role === "Instructor") {
        navigate("/instructor");
      } else if (user.role === "Student") {
        navigate("/student");
      }
      localStorage.setItem("username", username);
      localStorage.setItem("role", user.role);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.formContainer}>
        <label htmlFor="username" className={styles.inputLabet}>
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          className={styles.loginInput}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className={styles.inputLabet}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className={styles.loginInput}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} 
        disabled={!password || !username}
        className={styles.loginBtn}>
          Login
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
