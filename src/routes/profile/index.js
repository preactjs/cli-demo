import { useEffect, useReducer } from 'preact/hooks';
import Other from '../other';
import style from './style';

// Note: `user` comes from the URL, courtesy of our router
export default function Profile ({ user }) {
	const [time, updateTime] = useReducer(Date.now, Date.now());
	const [count, increment] = useReducer(x => x+1, 10);
	useEffect(() => (
		clearInterval.bind(null, setInterval(updateTime, 1000))
	), []);
	return (
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named { user }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<div class={style.demo}>
				<Other />
			</div>

			<p>
				<button onClick={increment}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>
		</div>
	);
}
