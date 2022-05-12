import todoApi from '../../apis/todoApi';
import types from '../../constants/types';

export const getList = () => {
	return async (dispatch) => {
		dispatch(getListRequest());
		const payload = await todoApi.GET();

		dispatch(getListSuccess(payload));
	};
};

const getListRequest = () => {
	return {
		type: types.FETCH_TODOS_REQUEST,
	};
};
const getListSuccess = (payload) => {
	return {
		type: types.FETCH_TODOS_SUCCESS,
		payload: payload,
	};
};

export const setTodo = (todo) => {
	return {
		type: types.SET_TODO,
		payload: todo,
	};
};

export const saveTodo = (todo) => {
	return async (dispatch) => {
		dispatch(saveTodoRequest());
		const payload = await todoApi.SAVE(todo);
		dispatch(saveTodoSuccess(payload));
		dispatch(getList());
		dispatch(
			setTodo({
				id: undefined,
				name: '',
				status: undefined,
			})
		);
	};
};

const saveTodoRequest = () => {
	return {
		type: types.SAVE_TODO_REQUEST,
	};
};
const saveTodoSuccess = (payload) => {
	return {
		type: types.SAVE_TODO_SUCCESS,
		payload: { payload: payload },
	};
};

export const deleteTodo = (todo) => {
	return async (dispatch) => {
		dispatch(deleteTodoRequest());
		const payload = await todoApi.DELETE(todo.id);
		dispatch(deleteTodoSuccess(payload));
		dispatch(getList());
	};
};

const deleteTodoRequest = () => {
	return {
		type: types.DELETE_TODO_REQUEST,
	};
};
const deleteTodoSuccess = (payload) => {
	return {
		type: types.DELETE_TODO_SUCCESS,
		payload: { payload: payload },
	};
};
