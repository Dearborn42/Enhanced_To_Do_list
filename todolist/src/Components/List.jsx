import React, {useState} from 'react';

const List = ({ data, updateFunc }) => {
    const [edit, setEdit] = useState(true);
    function update(name, field, value){
        if(value.trim() !== "")
            updateFunc({type: "edit", name, field, value})
    }
  return (
    <>
    <div className="menu">
      {data.map((x) => (
        <>
        {edit ? (
            <div className='box-login'>
                <div className='fieldset-body' id='login_form'>
                    <p className='field'>
                        <label htmlFor='user'>Name</label>
                        <h4 className="item-text">{x.name}</h4>
                        <span id='valida' className='i i-warning'></span>
                    </p>
                    <p className='field'>
                        <label htmlFor='pass'>Description:</label>
                        <p className="item-text">{x.desc}</p>
                        <span id='valida' className='i i-close'></span>
                    </p>
                    <p className='field'>
                        <label htmlFor='pass'>Category:</label>
                        <p className="item-text">{x.category}</p>
                        <span id='valida' className='i i-close'></span>
                    </p>
                    <input 
                        type='submit' 
                        id='do_login' 
                        onClick={() => updateFunc({type: "remove", name: x.name})} 
                        title='Remove' 
                        value='REMOVE'
                    />
                </div>
            </div>
        ) : 
        (
        <div className='box-login'>
                <div className='fieldset-body' id='login_form'>
                    <p className='field'>
                    <label htmlFor='user'>Name</label>
                    <input 
                        type='text'
                        title='Name' 
                        placeholder={x.name} 
                        onBlur={(e) => update(x.name, "name", e.target.value)}
                    />
                    <span id='valida' className='i i-warning'></span>
                    </p>
                    <p className='field'>
                    <label htmlFor='pass'>Description:</label>
                    <input 
                        type='text' 
                        title='Description'  
                        placeholder={x.desc} 
                        onBlur={(e) => update(x.name, "desc", e.target.value)}
                    />
                    <span id='valida' className='i i-close'></span>
                    </p>
                    <p className='field'>
                    <label htmlFor='pass'>Category:</label>
                    <input 
                        type='text'
                        title='Category' 
                        placeholder={x.category} 
                        onBlur={(e) => update(x.name, "category", e.target.value)}
                    />
                    <span id='valida' className='i i-close'></span>
                    </p>
                    <input 
                        type='submit' 
                        id='do_login' 
                        onClick={() => updateFunc({type: "remove", name: x.name})} 
                        title='Remove' 
                        value='REMOVE'
                    />
                </div>
            </div>
          )}
        </>
      ))}
    </div>
    <input 
            type='submit' 
            id='do_login' 
            onClick={() => setEdit((prev) => !prev)}
            title='Edit' 
            value='EDIT'
            className='Edit-btn'
    />
    </>
  );
};

export default List;
