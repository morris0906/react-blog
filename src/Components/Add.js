import { useState } from "react";
import "./Add.css";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const [tag, setTag] = useState("Tag 1");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, blogBody: body, author, tag };

    setIsPending(true);

    fetch("https://localhost:5000/blog/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="add">
      <h2>Write</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <label>Tag: </label>
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="Tag 1">Tag 1</option>
          <option value="Tag 2">Tag 2</option>
          <option value="Misc">Misc</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Add;
