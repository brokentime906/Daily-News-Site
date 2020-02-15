import React, { useState, useEffet, useEffect } from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 767px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = category === 'all' ? '' : `&category=${category}`;
      const data = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=935cc395ed714edbaf88ff6947904a57`,
      );
      setArticles(data.data.articles);
      console.log(articles);
      console.log(category === 'all' ? '' : `&category=${category}`);
    };
    fetchData();
    setLoading(false);
  }, [category]);

  if (loading) {
    return <div>야 아직 로딩중</div>;
  }
  if (articles === null) {
    return <div>야 데이터 셋 안됫어</div>;
  }
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
