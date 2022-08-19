import { useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import { addTodo, toggleTodo, deleteTodo, filterTodo, deleteAllCompletedTodo, setAllTodos, allCompletedProps } from './actions/rootAction';
import './App.css';

const mapStateToProps = state => ({todosStore : state.todos, whatToFilter: state.filter, allCompletedProps: state.setAllCompletedProps})
const matchDispatchToProps = dispatch => bindActionCreators(
  {
    handleAddTodo : addTodo, 
    handleToggleComplete : toggleTodo, 
    handleDeleteCurrentTodo : deleteTodo,
    handleFilterTodo : filterTodo,
    handleDeleteAllCompleted : deleteAllCompletedTodo,
    setToggleAllTodos : setAllTodos,
    handleAllCompletedProps : allCompletedProps
  }, dispatch
)

function FilteredTodos (todos, whatToFilter) {
  if(whatToFilter === "completed") {
    return todos.filter(todo => todo.completed)
  } else if (whatToFilter === "active") {
    return todos.filter(todo => !todo.completed)
  } else {
    return todos
  }
}

function App(
  { 
    todosStore, 
    handleAddTodo, 
    handleToggleComplete, 
    handleDeleteCurrentTodo, 
    whatToFilter, 
    handleFilterTodo, 
    handleDeleteAllCompleted, 
    setToggleAllTodos, 
    allCompletedProps, 
    handleAllCompletedProps 
  }
) {
  const [inputValue, setInputValue] = useState("");

  function clearInput () {
    setInputValue("")
  }

  const handleClick = (addButtonInputValue) => {
    handleAddTodo(addButtonInputValue)
    clearInput()
  }
  const toggleComplete = (currentTodoId) => {
    handleToggleComplete(currentTodoId)

  }
  const handleDeleteTodo = (todoId) => {
    handleDeleteCurrentTodo(todoId);
  }
  const handleToggleAllTodos = (currentCompletedPropsValue) => {
    setToggleAllTodos(currentCompletedPropsValue)
    handleAllCompletedProps()

  }

  
  return (
    <div className="App">
      <AddTodo inputValue={inputValue} setInputValue={setInputValue} handleClick={handleClick} handleAddTodo={handleAddTodo} />
      <ul>
        {
          FilteredTodos(todosStore, whatToFilter).map(todo => 
            <VisibleTodoList 
              key={todo.id} 
              todo={todo} 
              style={{display: "flex", justifyContent: "center"}} 
              toggleComplete={toggleComplete} 
              handleDeleteTodo={handleDeleteTodo}
              />
          )
        }
      </ul>
        
      <div>Total Active Todo : 
        {
          todosStore.filter(todo => !todo.completed).length
        }
      </div>
      
      <button onClick={() => handleFilterTodo("all")}>All</button>
      <button style={{margin: "auto 12px"}} onClick={() => handleFilterTodo("completed")}>Complete</button>
      <button onClick={() => handleFilterTodo("active")}>Active</button>

      <div>
        <button style={{margin: 12}} onClick={() => handleToggleAllTodos(allCompletedProps)}>Toggle All Completed Todos</button>
      </div>
      
      {
        todosStore.some((todo) => todo.completed === true)
          ? <div>
              <button onClick={() => handleDeleteAllCompleted(true)}>Delete All Completed Todos</button>
            </div> 
          : null
      }
      
    </div>
    
  );
  
}
export default connect(mapStateToProps, matchDispatchToProps) (App);
