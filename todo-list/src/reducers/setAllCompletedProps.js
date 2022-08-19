const setAllCompletedProps = (state = true, action) => {
    switch(action.type) {
        case  "SET_ALL_COMPLETED_PROPS": 
            return !state
        default :
            return state
    }
}

export default setAllCompletedProps;