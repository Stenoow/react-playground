import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import {useEffect, useState} from "react";

function App() {
    const [stateInput, setStateInput] = useState('')
    const [stateTodo, setStateTodo] = useState([{
        id: 1,
        title: 'ma super tâche',
        isCompleted : false,
        isEditing: false
    }]);

    let newTo = {
        id: 1,
        title: 'ma super tâche',
        isCompleted : false,
        isEditing: false
    }

    const handleInput = (e) => {
        setStateInput(e.target.value);
        console.log(stateTodo)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStateTodo(prevState => [
            ...prevState,
            {
                id: (prevState.length + 1),
                title: e.target[0].value,
                isCompleted : false,
                isEditing: false
            }

        ]);
        console.log(e.target[0].value);

    }

    useEffect(() => {
        document.querySelector('#title').value = '';
    }, [stateTodo])

  return (
    <div className="App">
      <TodoInput todo={stateInput} handleSubmit={handleSubmit} handleInput={handleInput} />

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
