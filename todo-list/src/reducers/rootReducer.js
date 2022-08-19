import { combineReducers } from 'redux';
import todos from "./todos";
import filter from './filter';
import setAllCompletedProps from './setAllCompletedProps';

export default combineReducers({todos, filter, setAllCompletedProps})