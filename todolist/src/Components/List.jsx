import React, {useState} from 'react';

const List = ({ data, updateFunc }) => {
    const [edit, setEdit] = useState(true);
    function update(name, field, value){
        if(value.trim() !== "")
            updateFunc({type: "edit", name, field, value})
    }
  return (
    <div>
      {data.map((x, index) => (
        <div key={index}>
        {edit ? (<><p>Name: {x.name}</p>
          <p>Description: {x.desc}</p>
          <p>Category: {x.category}</p></>) : (
        <><input placeholder={x.name} onBlur={(e) => update(x.name, "name", e.target.value)}/>
          <input placeholder={x.desc} onBlur={(e) => update(x.name, "desc", e.target.value)}/>
          <input placeholder={x.category} onBlur={(e) => update(x.name, "category", e.target.value)}/>
          </>
          )}
          <button onClick={() => updateFunc({type: "remove", name: x.name})}>Remove</button>
        </div>
      ))}
      <button onClick={() => setEdit((prev) => !prev)}>Edit</button>
    </div>
  );
};

export default List;
