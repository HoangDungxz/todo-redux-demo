import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.css';
import { incrementAsync, incrementIfOdd } from './counterReducer';

export function Counter() {
	const count = useSelector((state) => state.count.selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState(2);
	const incrementValue = Number(incrementAmount) || 0;

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Decrement'
					onClick={() =>
						dispatch({
							type: 'DECREMENT',
						})
					}
				>
					-
				</button>
				<span className={styles.value}>{count}</span>
				<button
					className={styles.button}
					aria-label='Increment'
					onClick={() =>
						dispatch({
							type: 'INCREMENT',
						})
					}
				>
					+
				</button>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					className={styles.button}
					onClick={() =>
						dispatch({
							type: 'INCREMENT_BY_AMOUNT',
							payload: incrementValue,
						})
					}
				>
					Add Amount
				</button>
				<button
					className={styles.asyncButton}
					onClick={() => dispatch(incrementAsync(incrementValue))}
				>
					Add Async
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch(incrementIfOdd(incrementValue))}
				>
					Add If Odd
				</button>
			</div>
		</div>
	);
}
