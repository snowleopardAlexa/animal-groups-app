import React from 'react';
import animals from '../data/data';

const Animal = () => {
  return (
    <div className="section-center">
      {animals.map((animalSpecies) => {
        const { id, title, img, status, desc } = animalSpecies;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="animal-info">
              <header>
                <h4>{title}</h4>
                <h4 className="status">{status}</h4>
              </header>
              <p className="animal-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Animal;
