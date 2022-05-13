import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../features/counter/counterReducer';

const rootReducer = combineReducers({
	count: countReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
