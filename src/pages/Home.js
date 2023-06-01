import React from "react";
import { UseFetch } from "../hooks/UseFetch";
import "./Home.css";
export default function Home() {
  const {
    data: articles,
    isLoading,
    error,
  } = UseFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      <h2>Articles</h2>
      {isLoading && <div> Loading... </div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
          </div>
        ))}
    </div>
  );
}
