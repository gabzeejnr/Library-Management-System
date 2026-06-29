import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';

function App() {
  return(
    <div id='wrapper'>
      <Header />
      <Content />
    </div>
  )
}

export default App;