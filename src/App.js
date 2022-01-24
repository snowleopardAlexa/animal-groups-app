import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
//import items from './data/data';
import './App.css';

function App() {
  return (
    <div className="App">
       <Menu />
       <Categories />
    </div>
  );
}

export default App;
