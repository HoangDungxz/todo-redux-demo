const initState = {
	number: 0,
};

const countReducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				number: state.number + 1,
			};

		default:
			return state;
	}
};

export default countReducer;
