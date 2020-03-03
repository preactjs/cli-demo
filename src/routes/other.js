import { useReducer, useEffect, useState } from 'preact/hooks';

export default function Other() {
	const [count, increment] = useReducer(c => c+1, 0);
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		console.log('setHydrated(true)');
		setHydrated(true);
	}, []);
	return (
		<div style={{ background: hydrated ? 'palegoldenrod' : 'white' }}>
			<h1>Other</h1>
			<p>This is the Other component. <strong>{hydrated?'(hydrated!)':'(unhydrated)'}</strong></p>
			<button onClick={increment}>Count: {count}</button>
		</div>
	);
}
