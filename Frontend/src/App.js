import {useEffect, useState} from "react";

function App() {

  const [todos, setTodos] = useState([])
  const [task, setTask] = useState
  useEffect(()=>{
    const gettodos = async() =>{
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/todos`,
        {method: "GET"},
      );
      const todos = await response.json();
      setTodos(todos);
    };

    gettodos();
  
      
  }, []);
  
  const createTodo = async (e) => {
    e.preventDefault();

    const response = await fetch (`${process.env.REACT_APP_BACKEND_URL}/api/todos`,{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({task}),
    },
  );
  const newTodo = await response.json();
  //setTask("");

  setTodos([...todos, newTodo]);
  
  };
  return (
    
    <div className="App">
      <h1>Task Manager</h1>
      <form className= "form">
        <input
          type="text"
          className = "form_input"
          placeholder="Add a new todo"
          required
          value = {task}
          onChange={(e) => setTask(e.target.value)}

        ></input>
      </form>
    {todos.length > 0 ? (
      todos.map((todo) => (
        <div className = "todos">
          <p>
            {todo.task}
          </p> <p>{todo.status ? "completed" : "pending" }</p>
          <button onClick={() => deleteTodo(todo._id)}>delete</button>
        </div>
      )) 
    ) : (
      <div>
        <p>No todos found</p>
      </div>
    )}
 </div>

  );
}

export default App;
