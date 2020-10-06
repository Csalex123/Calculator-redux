import { createStore, combineReducers } from 'redux';
import calculatorReduce from './Calculator/Calculator.reduce';

const rootReducer = combineReducers({
    calculator: calculatorReduce,
});

const store = createStore(rootReducer);

export default store;