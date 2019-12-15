import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
	ADD_DATA,
	REMOVE_DATA,
	ADD_SOME_DATA,
} from './actions';

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_DATA:
			return [...state, action.payload];
		case REMOVE_DATA:
			return state.filter((item) => {
				return item._id !== action.payload.id;
			});
		case ADD_SOME_DATA:
			return [...action.payload];
		default:
			return state;
	}
};

const store = createStore(
	reducer,
	applyMiddleware(ReduxThunk)
);

export default store;















