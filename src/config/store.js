import {createStore, combineReducers } from 'redux';
import cartReducer from '../feature/cart/reducer';

const rootReducer = combineReducers({
    cart: cartReducer

})

const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__ ()
)

export default store;