import React, {useState} from 'react';

const List = ({ data, updateFunc }) => {
    const [edit, setEdit] = useState(true);
    function update(name, field, value){
        if(value.trim() !== "")
            updateFunc({type: "edit", name, field, value})
    }
  return (
    <div className="menu">
      {data.map((x, index) => (
        <article key={index} className="menu-item">
        {edit ? (
            <div className="item-info">
                <h4 className="item-text">Name: {x.name}</h4>
                <p className="item-text">Description: {x.desc}</p>
                <p className="item-text">Category: {x.category}</p>
            </div>) : 
        (<div className="item-info">
            <input 
                className="item-text" 
                placeholder={x.name} 
                onBlur={(e) => update(x.name, "name", e.target.value)}
            />
            <br />
            <input 
                className="item-text" 
                placeholder={x.desc} 
                onBlur={(e) => update(x.name, "desc", e.target.value)}
            />
            <br />
            <input 
                className="item-text" 
                placeholder={x.category} 
                onBlur={(e) => update(x.name, "category", e.target.value)}
            />
            <br />
        </div>
          )}
          <button onClick={() => updateFunc({type: "remove", name: x.name})}>Remove</button>
        </article>
      ))}
      <button className="btn" onClick={() => setEdit((prev) => !prev)}>Edit</button>
    </div>
  );
};

export default List;
