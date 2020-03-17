import {combineReducers} from 'redux';
import cartReducer from '../feature/cart/reducer';
import projectReducer from '../store/reducer/projectReducer';

const rootReducer = combineReducers({
    project: projectReducer
})



export default rootReducer;