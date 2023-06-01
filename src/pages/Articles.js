import { useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";
export default function Home() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;

  const { data: article, isLoading, error } = UseFetch(url);

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
