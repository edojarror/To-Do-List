const todos = (state = [{id: 1, text: "asdf", completed : true}], action) => {
    switch(action.type) {
        case "ADD_TODO" : 
            return [
                ...state, 
                {
                    id : action.id, 
                    text: action.text, 
                    completed: false
                }
            ]
        case "TOGGLE_TODO" : 
            return state.map(curr => (curr.id === action.id ) ? {...curr, completed: !curr.completed }: curr)
        case "DELETE_TODO" : 
            return state.filter(curr => curr.id !== action.id)
        case "DELETE_COMPLETED_TODO" :
            return state.filter(curr => curr.completed !== action.completed)
        case "SET_ALL_TODOS" :
            return state.map(curr => (curr.completed === action.completedPropValue ) ?  curr : curr.completed = action.completedPropValue)
        default :
            return state
    }
}

export default todos