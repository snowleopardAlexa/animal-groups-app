const Categories = ({ categories, filterAnimals }) => {
  return (
    <div className="btn-container">
       {categories.map((category, index) => {
          return (
            <button 
              type="button" 
              className="filter-btn" 
              key={index}
              onClick={() => filterAnimals(category)}
            >
            {category}
            </button>
          );
       })}
    </div>
  );
};

export default Categories;
