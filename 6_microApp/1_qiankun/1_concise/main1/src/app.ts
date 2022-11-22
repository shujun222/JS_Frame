import { useState } from 'react'
export function useQiankunStateForSlave() {
	const [masterState, setMasterState] = useState({ a: 1 });
	console.log('mnaster')
	return {
		masterState,
		setMasterState,
	};
}