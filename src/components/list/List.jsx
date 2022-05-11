import { React, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import status from '../../constants/status';
import { getList, saveTodo, setTodo } from '../../redux/actions/todoActions';
import Item from './Item';
import ReactLoading from 'react-loading';

function List() {
	const todos = useSelector((state) => {
		return state.todo.todos;
	}, shallowEqual);

	const loading = useSelector((state) => {
		return state.todo.loading;
	});

	const todo = useSelector((state) => {
		return state.todo.todo;
	}, shallowEqual);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList(dispatch));
	}, []);

	const [contextMenu, setContextMenu] = useState({
		visibility: 'hidden',
		top: 0,
		left: 0,
		todo: {
			id: undefined,
			name: '',
			status: undefined,
		},
	});

	const handleOpenContextMenu = (contextMenu) => {
		setContextMenu(contextMenu);
		dispatch(setTodo(contextMenu.todo));
	};
	const handleCloseContextMenu = () => {
		setContextMenu({
			visibility: 'hidden',
			todo: {
				id: undefined,
				name: '',
				status: undefined,
			},
		});

		dispatch(
			setTodo({
				id: undefined,
				name: '',
				status: undefined,
			})
		);
	};

	const handleSaveStatusTodo = (status) => {
		dispatch(
			saveTodo(
				{
					...todo,
					status: status,
				},
				dispatch
			)
		);
		handleCloseContextMenu();
	};
	console.log(loading);

	return (
		<>
			{loading == true ? (
				<div className='loading'>
					<ReactLoading
						type={'cylon'}
						color={'red'}
						height={'20%'}
						width={'20%'}
					/>
				</div>
			) : (
				<ul>
					{todos.length > 0 &&
						todos.map((todo, key) => {
							return (
								<Item
									key={key}
									todo={todo}
									handleOpenContextMenu={
										handleOpenContextMenu
									}
								/>
							);
						})}
				</ul>
			)}

			<div
				className={`status-context-cover ${contextMenu.visibility}`}
				onClick={() => {
					handleCloseContextMenu();
				}}
			></div>
			<div
				className={`status-context-menu ${contextMenu.visibility}`}
				style={{
					top: `${contextMenu.top}px`,
					left: `${contextMenu.left}px`,
					transform: `${
						window.innerHeight - contextMenu.top <= 150
							? 'translateY(-100%)'
							: ''
					}`,
				}}
			>
				<button
					className={`todo-status todo`}
					onClick={() => {
						handleSaveStatusTodo(status.TODO);
					}}
				>
					Todo
				</button>
				<button
					className={`todo-status process`}
					onClick={() => {
						handleSaveStatusTodo(status.PROCESS);
					}}
				>
					Processing
				</button>
				<button
					className={`todo-status completed`}
					onClick={() => {
						handleSaveStatusTodo(status.COMPLETED);
					}}
				>
					Completed
				</button>
			</div>
		</>
	);
}

export default List;
