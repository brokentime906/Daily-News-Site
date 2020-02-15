import React, { useState, useCallback } from 'react';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <div className="App">
      <Route path="/:category?" component={NewsPage} />
    </div>
  );
};

export default App;
