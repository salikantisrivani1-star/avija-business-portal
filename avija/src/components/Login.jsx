import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://avija-backend.onrender.com/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {

        localStorage.setItem("isLoggedIn", "true");

        alert("Login Successful");

        navigate("/admin");

      } else {

        alert("Invalid Email or Password");

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (

    <div
      style={{
        width: "350px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >

      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

      </form>

    </div>

  );

};

export default Login;