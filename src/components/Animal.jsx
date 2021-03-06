const Animal = ({ animals }) => {
  return (
    <div className="section-center">
      {animals.map((animalSpecies) => {
        const { id, title, img, status, desc } = animalSpecies;
        return (
          <article key={id} className="animal-specie">
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
