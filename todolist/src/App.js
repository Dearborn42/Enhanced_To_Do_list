import "./Styles/main.css"
import { useReducer } from 'react';
import tasks from './Utils/data.js';
import List from './Components/List.jsx';
import AddForm from './Components/AddForm.js';

function reducer(state, action){
  const {type} = action;
  if(type === "add"){
    if (state.some(task => task.name !== action.task.name)) 
      return [...state, action.task]
  }else if(type === "remove"){
      return state.filter(x => x.name !== action.name)
  }else if(type === "edit"){
    const {name, field, value} = action;
    return state.map((obj) =>
      obj.name === name ? { ...obj, [field]: value } : obj
    );
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, tasks);
  return (
     <main>
      <section className="section">
        <div className="title">
          <h2>To-do List</h2>
          <div className="underline"></div>
        </div>
        <AddForm updateFunc={dispatch} />
        <List data={state} updateFunc={dispatch} />
      </section>
    </main>
        
  );
}

export default App;
