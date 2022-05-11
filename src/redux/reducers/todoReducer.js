import types from '../../constants/types';

const initState = {
	todos: [],
	loading: false,
	todo: {
		id: undefined,
		name: '',
		status: 0,
	},
};

const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case types.FETCH_TODOS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.FETCH_TODOS_SUCCESS:
			return {
				...state,
				todos: action.payload,
				loading: false,
			};

		case types.SET_TODO:
			return {
				...state,
				todo: action.payload,
			};

		case types.SAVE_TODO_REQUEST:
			return {
				...state,
				loading: true,
			};

		case types.SAVE_TODO_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case types.DELETE_TODO_REQUEST:
			return {
				...state,
				loading: true,
			};

		case types.DELETE_TODO_SUCCESS:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};

export default todoReducer;
