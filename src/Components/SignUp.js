import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { username, password, firstName, lastName, emailAddress };

    setIsPending(true);

    //     fetch("https://localhost:5000/blog/add", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(blog),
    //     }).then(() => {
    //       setIsPending(false);
    //       navigate("/");
    //     });
  };

  return (
    <div className="Register">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name: </label>
        <input
          required
          value={password}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Email Address: </label>
        <input
          required
          value={password}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <label>Username: </label>
        <input
          required
          value={password}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPending && <button>Submit</button>}
        {isPending && <button>Please wait</button>}
      </form>
    </div>
  );
};

export default Register;
