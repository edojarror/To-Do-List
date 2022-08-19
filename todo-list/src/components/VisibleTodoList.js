
const VisibleTodoList = ({ style, todo, toggleComplete, handleDeleteTodo }) => {
    return (
        <div>
            <ul>
                <div style={style}>
                    <li 
                        key={todo.id}
                        style={{
                            textAlign: "start", 
                            textDecoration: todo.completed ? "line-through" : "none",
                            marginRight: "8px"
                        }} 
                        onClick={() => toggleComplete(todo.id)} >
                            {todo.text}
                    </li>
                    <button onClick={() => handleDeleteTodo(todo.id)}>x</button> 
                </div>
            </ul>
        </div>
    )
}


export default VisibleTodoList;