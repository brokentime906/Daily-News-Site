import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';

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

const NewsList = ({ articles }) => {
  return (
    <NewsListBlock>
      <div>NewsList</div>
      {articles.map(article => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
