import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    post: postReducer,
    users: userReducer
})

export default rootReducer