import React from 'react';

const Animal = ({ animals }) => {
  return (
    <div className="section-center">
      {animals.map((animalSpecie) => {
        const {id, title, img, desc} = animalSpecie;
        return (
         <article key={id} className="animal-item">
           <img src={img} alt={title} className="photo" />
         </article>
        );
      })}
    </div>
  );
};

export default Animal;
