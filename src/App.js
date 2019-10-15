import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import FilePage from './components/FilePage'
import FeedbackPage from './components/FeedbackPage'

const App = () => {
  return (
    <div>
      <HomePage />
      <FilePage />
      <FeedbackPage />
    </div>
  );
};

export default App;
