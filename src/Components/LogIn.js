import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const userInfo = { username, password };

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
    <div className="LogIn">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>password: </label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPending && <button>Sign In</button>}
        {isPending && <button>Signing In</button>}
      </form>
      <div>
        Don't have an account? <Link to="/register"> Sign Up</Link>"{" "}
      </div>
    </div>
  );
};

export default LogIn;
