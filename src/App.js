import { React } from 'react';
import todoApi from './apis/todoApi';
import './App.scss';
import Form from './components/form/Form';
import List from './components/list/List';

function App() {
	return (
		<div className='App'>
			<div className='title'>
				Todo <strong>list</strong>
			</div>
			<div className='todo-list'>
				<Form />

				<List />
			</div>
		</div>
	);
}

export default App;
