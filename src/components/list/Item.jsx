import { React } from 'react';
import { useDispatch } from 'react-redux';
import status from '../../constants/status';
import { deleteTodo, setTodo } from '../../redux/actions/todoActions';
function Item({ todo, handleOpenContextMenu }) {
	const dispatch = useDispatch();

	const handlePrepareUpdate = (todo) => {
		dispatch(setTodo(todo));
	};

	const handleDelete = (todo) => {
		dispatch(deleteTodo(todo));
	};

	return (
		<>
			<li className='todo-item'>
				<div className='todo-content'>{todo.name}</div>
				<div
					className={`todo-status ${status.GET_CLASS(todo.status)}`}
					onClick={(e) => {
						handleOpenContextMenu({
							top: e.clientY,
							left: e.clientX,
							visibility: 'visible',
							todo: todo,
						});
					}}
				>
					{status.GET_DISPLAY_NAME(todo.status)}
				</div>
				<div className='todo-action'>
					<button
						className='todo-edit'
						onClick={(e) => handlePrepareUpdate(todo)}
					>
						Edit
					</button>
					<button
						className='todo-delete'
						onClick={() => handleDelete(todo)}
					>
						Delete
					</button>
				</div>
			</li>
		</>
	);
}

export default Item;
