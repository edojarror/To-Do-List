let nextTodoId = 2;

export const addTodo = text => ({
    type : "ADD_TODO",
    id: nextTodoId++,
    text: text
})


export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id
})

export const deleteTodo = id => ({
    type: "DELETE_TODO",
    id
})

export const filterTodo = filter => ({
    type: "FILTER_TODO",
    filter
})

export const deleteAllCompletedTodo = completed => ({
    type: "DELETE_COMPLETED_TODO",
    completed
})

export const allCompletedProps = () => ({
    type: "SET_ALL_COMPLETED_PROPS"
})

export const setAllTodos = (completedPropValue) => ({
    type: "SET_ALL_TODOS",
    completedPropValue
})