import './App.css';
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
    <div className="App">
      <header className="App-header">
        <AddForm updateFunc={dispatch} />
        <List data={state} updateFunc={dispatch} />
      </header>
    </div>
  );
}

export default App;
