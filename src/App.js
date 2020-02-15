import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsList from "./components/NewsList";
import NewsCategory from "./components/NewsCategory";
import axios from "axios";
const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-15&sortBy=publishedAt&apiKey=935cc395ed714edbaf88ff6947904a57"
      );
      setArticles(data.data.articles);
      console.log(data.data.articles);
      console.log(articles);
    };
    fetchData();
    console.log(articles);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <>
        <NewsCategory key={1} />
        <div>News Loading 중</div>
      </>
    );
  }

  return (
    <div className="App">
      <NewsCategory key={1} />
      <NewsList articles={articles} key={2} />
    </div>
  );
};

export default App;
