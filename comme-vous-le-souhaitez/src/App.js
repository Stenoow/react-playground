import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import {useState} from "react";

function App() {
    const [newTodo, setNewTodo] = useState('Todo');

    handleInput(){

    }

  return (
    <div className="App">
      <TodoInput todo={newTodo}/>

      {

        /* Le composant doit afficher :
        - L'input
        - le composant qui affiche les filtres
        - La liste des todos 
      */}
    </div>
  );
}

export default App;
