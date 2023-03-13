import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const Register = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChage = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and re-entered passwords do not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please re-enter password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and re-entered passwords do not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailAddress] = useState("");
  // const [passwordVal, setPasswordVal] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let username = input.username;
    let password = input.password;
    const userInfo = { username, password, firstName, lastName, email };
    setIsPending(true);

    fetch("https://localhost:5000/addUser", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then(() => {
      setIsPending(false);
      navigate("/signin");
    });
  };

  // const confirmPassword = () => {
  //   if (passwordVal !== password) {
  //     document.getElementById("passwordCheck").innerHTML =
  //       "Your passwords do not match!";
  //   } else {
  //     document.getElementById("passwordCheck").innerHTML = "";
  //   }
  // };

  return (
    <div className="Register">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name: </label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Email Address: </label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <label>Username: </label>
        <input
          type="text"
          name="username"
          required
          value={input.username}
          onChange={onInputChage}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          required
          value={input.password}
          onChange={onInputChage}
          onBlur={(e) => validateInput(e)}
        />
        {error.password && <span className="err">{error.password}</span>}
        <label>Re-enter Password: </label>
        <input
          type="password"
          name="confirmPassword"
          required
          value={input.confirmPassword}
          onChange={onInputChage}
          onBlur={(e) => validateInput(e)}
        />
        {error.confirmPassword && (
          <span className="err">{error.confirmPassword}</span>
        )}
        {!isPending && <button>Submit</button>}
        {isPending && <button>Please wait</button>}
      </form>
    </div>
  );
};

export default Register;
