import "./Styles/main.css"
import { useReducer, useEffect } from 'react';
import tasks from './Utils/data.js';
import List from './Components/List.jsx';
import AddForm from './Components/AddForm.js';
import Categories from "./Components/Categories.jsx";

function reducer(state, action){
  const {type} = action;
  if(type === "add"){
    if (state.some(task => task.name !== action.task.name)) 
      localStorage.setItem("tasks", JSON.stringify([...state, action.task]))
      return [...state, action.task]
  }else if(type === "remove"){
      localStorage.setItem("tasks", JSON.stringify(state.filter(x => x.name !== action.name)));
      return state.filter(x => x.name !== action.name)
  }else if(type === "edit"){
      const {name, field, value} = action;
      localStorage.setItem("tasks", JSON.stringify(state.map((obj) =>
        obj.name === name ? { ...obj, [field]: value } : obj
      )))
      return state.map((obj) =>
        obj.name === name ? { ...obj, [field]: value } : obj
      );
  }else if(type === "sort"){
    const {category} = action;
    if(category !== "All")
      return JSON.parse(localStorage.getItem("tasks")).filter(obj => obj.category === category)
    return JSON.parse(localStorage.getItem("tasks"))
  }
}

function App() {
  var taskList = JSON.parse(localStorage.getItem("tasks"));
  useEffect(() => {
    const isItemExists = taskList !== null;
    if (!isItemExists) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskList = JSON.parse(localStorage.getItem("tasks"));
    }
  }, []);
  const [state, dispatch] = useReducer(reducer, taskList);
  var categories = ["All", ...taskList.map(x => x.category)]
  const filter = (category) => dispatch({type: "sort", category})
  return (
     <main>
      <section className="section">
        <div className="title">
          <h2>To-do List</h2>
          <div className="underline"></div>
        </div>
        <AddForm updateFunc={dispatch} />
        <Categories categories={categories} filterItems={filter}/>
        <List data={state} updateFunc={dispatch} />
      </section>
    </main>
        
  );
}

export default App;
