import {createStore, combineReducers} from 'redux';
import reducer from './reducer';

function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('login-state', serializedState)
    } catch (error) {
        console.log(error)
    }
}

export function loadFromLocalStorage(){
    try {
        const serializedState = localStorage.getItem('login-state');
        if(serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducer);

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;