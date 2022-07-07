import { useState, useEffect } from 'react';

export default function useStateWithStorage(
	key: string,
	defaultValue: string
) {
	const [ storage, setStorage ] = useState({});

	useEffect(() => {

		const savedStorage: {
			[key: string]: string;
		} = {};

		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key !== null) {
				savedStorage[key] = localStorage.getItem(key) as string;
			}
		}

		setStorage(Object.keys(savedStorage).map(key => ({
			[key]: JSON.parse(savedStorage[key])
		})));
	}, [ ]);

	const updateStorage = (key: string, value: unknown) => {
		localStorage.setItem(key, JSON.stringify(value));
		setStorage(prevState => ({
			...prevState,
			[key]: value
		}));
	}

	const clearStorage = localStorage.clear();

	return { storage, updateStorage, clearStorage };
}
