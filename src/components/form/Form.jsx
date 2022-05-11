import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveTodo, setTodo } from '../../redux/actions/todoActions';

function Form() {
	const dispatch = useDispatch();

	const todo = useSelector((state) => state.todo.todo);

	const handleNameChange = (e) => {
		dispatch(
			setTodo({
				...todo,
				name: e.currentTarget.value,
				status: 0,
			})
		);
	};

	const handleChangeFormToSave = () => {
		dispatch(
			setTodo({
				id: undefined,
				name: '',
				status: undefined,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(saveTodo(todo, dispatch));
	};

	return (
		<div className='todo-form'>
			{todo.id && (
				<button
					className='edit-tag'
					onClick={() => handleChangeFormToSave()}
				>
					EDIT: {todo.name}
				</button>
			)}
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type='text'
					placeholder=' '
					name='name'
					onChange={(e) => handleNameChange(e)}
					value={todo.name}
				/>
				<button
					className='todo-save'
					placeholder='Input todo'
					type='submit'
				>
					SAVE
				</button>
			</form>
		</div>
	);
}

export default Form;
