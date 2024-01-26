const Categories = ({categories, filterItems, selected}) => {
  return (
    <div className="btn-contianer flex-btn">
        {categories.map((x, i) => {
            return (
              <button 
                key={i} 
                onClick={() => filterItems(x)} 
                className="filter-btn">{x}
              </button>
            )
        })}
    </div>
  )
}

export default Categories