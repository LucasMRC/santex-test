import { useState, useEffect } from 'react';

export default function useStateWithStorage<T>(
	key: string,
	defaultValue: T
): [ T, (value: T) => void ] {
	const [ value, setValueInState ] = useState(defaultValue);

	useEffect(() => {
		const keyValue = localStorage.getItem(key);
		if (!keyValue) return;
		setValueInState(JSON.parse(keyValue));
	}, [ key ]);

	const setValue = (value: T) => {
		localStorage.setItem(key, JSON.stringify(value));
		return setValueInState(value);
	};

	return [ value, setValue ];
};
