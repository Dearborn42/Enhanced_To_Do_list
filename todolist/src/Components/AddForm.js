import React, {useState} from 'react'

const AddForm = ({updateFunc}) => {
    const [formData, setFormData] = useState({name: '', desc: '', category: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFunc({type: "add", task: formData})
    setFormData({ name: '', desc: '', category: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="desc" value={formData.desc} onChange={handleChange} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddForm