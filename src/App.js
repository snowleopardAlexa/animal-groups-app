import { useState } from 'react';
import Animal from './components/Animal';
import Categories from './components/Categories';
import animals from './data/data';
import './App.css';

const allCategories = ['all', ...new Set(animals.map((animal) => animal.category))];

function App() {

  const [animalSpecies, setAnimalSpecies] = useState(animals);
  const [categories] = useState(allCategories);

  const filterAnimals = (category) => {
    if (category === 'all') {
      setAnimalSpecies(animals);
      return;
    }
    const newAnimals = animals.filter((animal) => animal.category === category);
    setAnimalSpecies(newAnimals);
  };

  return (
    <div className="app">
       <div className="title">
         <h2>Animals</h2>
         <div className="underline"></div>
       </div>
       <Categories 
         categories={categories}
         filterAnimals={filterAnimals} 
        />
       <Animal animals={animalSpecies} />
    </div>
  );
}

export default App;
