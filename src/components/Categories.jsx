

const Categories = ({ filterAnimals }) => {
  return (
    <div className="btn-container">
       <button className="filter-btn" onClick={() => filterAnimals('all')}>
         All
       </button>
       <button className="filter-btn" onClick={() => filterAnimals('mammals')}>
         Mammals
       </button>
    </div>
  );
};

export default Categories;
