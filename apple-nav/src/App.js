import React from 'react';
import NavWrapper from './components/NavWrapper';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Route path="/" component={NavWrapper} />
  );
}

export default App;
