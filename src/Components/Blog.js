import { useNavigate, useParams } from "react-router-dom";
import "./Blog.css";
import useFetch from "./useFetch";

const Blog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("https://localhost:5000/blogs/" + id);

  const handleClick = () => {
    fetch("https://localhost:5000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by {blog.author} {blog.tag}
          </p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default Blog;
