import { fetchCount } from './counterAPI';

const initState = {
	selectCount: 0,
};

export const incrementAsync = (amount) => {
	return async (dispatch) => {
		const response = await fetchCount(amount);

		dispatch({
			type: 'INCREMENT_BY_AMOUNT',
			payload: response.data,
		});
	};
};

const countReducer = (state = initState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				selectCount: state.selectCount + 1,
			};
		case 'DECREMENT':
			return {
				...state,
				selectCount: state.selectCount - 1,
			};

		case 'INCREMENT_BY_AMOUNT':
			return {
				...state,
				selectCount: state.selectCount + action.payload,
			};
		default:
			return state;
	}
};

export const incrementIfOdd = (amount) => {
	return (dispatch, getState) => {
		const currentValue = getState().count.selectCount;

		if (currentValue % 2 === 1) {
			dispatch({
				type: 'INCREMENT_BY_AMOUNT',
				payload: amount,
			});
		}
	};
};

export default countReducer;
