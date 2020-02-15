import React from 'react';
import NewsCategory from '../components/NewsCategory';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
      <NewsCategory />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
