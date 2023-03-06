import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailAddress] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (passwordVal !== password) {
      document.getElementById("passwordCheck").innerHTML =
        "Your passwords do not match!";
      alert("Check passwords");
    } else {
      document.getElementById("passwordCheck").innerHTML = "";

      e.preventDefault();
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
    }
  };

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
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Re-enter Password: </label>
        <input
          type="password"
          required
          value={passwordVal}
          onChange={(e) => setPasswordVal(e.target.value)}
        />
        <p id="passwordCheck"></p>
        {!isPending && <button>Submit</button>}
        {isPending && <button>Please wait</button>}
      </form>
    </div>
  );
};

export default Register;
