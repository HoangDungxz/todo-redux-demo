import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
	const number = useSelector((state) => state.count.number);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>{number}</h1>
				<button
					onClick={() =>
						dispatch({
							type: 'ADD',
							payload: '',
						})
					}
				>
					+
				</button>
			</header>
		</div>
	);
}

export default App;
