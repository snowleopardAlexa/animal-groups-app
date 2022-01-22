import React from 'react';
import animals from '../data/data';

const Animal = () => {
  return (
    <div className="section-center">
      {animals.map((animalSpecies) => {
        const { id, title, img, desc } = animalSpecies;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
          </article>
        );
      })}
    </div>
  );
};

export default Animal;
