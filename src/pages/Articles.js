import { useNavigate, useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";
import { useEffect } from "react";
export default function Home() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;

  const { data: article, isLoading, error } = UseFetch(url);
  const nagigate = useNavigate();
  useEffect(() => {
    if (error) {
      setTimeout(() => nagigate("/"), 2000);
    }
  }, [error]);

  return (
    <div>
      {isLoading && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>by: {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
