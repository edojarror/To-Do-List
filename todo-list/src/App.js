import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([{id: 1, text: "asdf", completed : true}]);
  const [whatToFilter, setWhatToFilter] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);
  function clearInput () {
    setInputValue("")
  }
  function createTodoId (todoLength) {
    console.log(todoLength)
    return (todoLength === 0 )? 1 : todoList[todoList.length - 1].id + 1
  }
  const handleClick = () => {
    let isTodoEmpty = todoList.length;
    setTodoList([...todoList, {id: createTodoId(isTodoEmpty), text: inputValue, completed: false}]);
    clearInput()
  }
  const toggleComplete = (currentTodoId) => {
    setTodoList(todoList.map(todo =>  { 
      if(todo.id === currentTodoId) {
        return {
          ...todo,
          completed : !todo.completed
        }
      } else {
        return todo;
      }
    }))

  }
  const handleDeleteTodo = (todoId) => {
    let copyOfTodo = todoList.slice(0, todoList.length);
    let targetedTodo = copyOfTodo.filter((todo ) => { 
      return todo.id !== todoId
    })
    setTodoList(targetedTodo);
    todos = todoList
  }

    let todos = [];
    if(whatToFilter === "all") {
      todos = todoList;
    } else if (whatToFilter === "completed") {
      todos = todoList.filter(todo => todo.completed)
    } else if (whatToFilter === "active") {
      todos = todoList.filter(todo => !todo.completed)
    }

  const deleteAllComplete = () => {
    setTodoList(todoList.filter(todo => !todo.completed))
  }

  const handleToggleAllComplete = () => {
    setTodoList(todoList.map(todo => {
      return {...todo, completed: toggleAllComplete}
    }))
    setToggleAllComplete(!toggleAllComplete)
  }
  
  return (
    <div className="App">
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={handleClick}>Add Todo</button>
      <ul>
        {
         todos.map(todo => 
          <div key={todo.id} style={{display: "flex", justifyContent: "center"}}>
            <li 
              key={todo.id}
              style={
                {
                  textAlign: "start", 
                  textDecoration: todo.completed ? "line-through" : "none",
                  marginRight: "8px"
                }
              } 
              onClick={() => toggleComplete(todo.id)} >
                {todo.text}
            </li>
            <button onClick={() => handleDeleteTodo(todo.id)}>x</button> 
          </div>
         )
        }      
      </ul>
        
      <div>Total Active Todo : 
        {
          todoList.filter(todo => !todo.completed).length
        }
      </div>
      
      <button onClick={() => setWhatToFilter("all")}>All</button>
      <button onClick={() => setWhatToFilter("completed")}>Complete</button>
      <button onClick={() => setWhatToFilter("active")}>Active</button>
      
      {
        todoList.some((todo) => todo.completed === true)
          ? <div>
              <button onClick={() => deleteAllComplete()}>Delete All Complete</button>
            </div> 
          : null
      }
      <div>
        <button onClick={() => handleToggleAllComplete()}>Toggle All Completed : {`${toggleAllComplete}`}</button>
      </div>
    </div>
    
  );
  
}
export default App;
