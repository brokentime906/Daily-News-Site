import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import NewsCategory from './components/NewsCategory';
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <div className="App">
      <NewsCategory category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default App;
