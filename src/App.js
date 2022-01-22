import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import animals from './data/data';
import './App.css';

function App() {

  const [animalSpecie, setAnimalSpecies] = useState(animals);
  const [categories, setCategories] = useState([]);

  return (
    <div className="app">
       <div className="title">
         <h2>Animals</h2>
         <div className="underline">

         </div>
         <Categories />
         <Menu />
       </div>
    </div>
  );
}

export default App;
