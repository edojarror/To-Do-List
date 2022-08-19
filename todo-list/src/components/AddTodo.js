
const AddTodo = ({ inputValue, setInputValue, handleClick }) => {
    return (
        <div>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={() => handleClick(inputValue)}>Add Todo</button>
        </div>
    )
}

export default AddTodo