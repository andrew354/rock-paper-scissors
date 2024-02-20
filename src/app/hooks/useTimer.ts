import { useEffect, useState } from 'react';

export const useTimer = (initialTimer: number) => {
	const [timer, setTimer] = useState(initialTimer);
	const [runTimer, setRunTimer] = useState(false);

	useEffect(() => {
		let timerId: NodeJS.Timeout;
		if (runTimer && timer > 0) {
			timerId = setTimeout(() => {
				setTimer((timer) => timer - 1);
			}, 1000);
		} else if (runTimer && timer < 1) {
			setRunTimer(false);
		}

		return () => clearTimeout(timerId);
	}, [runTimer, timer]);

	const startTimer = () => {
		setRunTimer(true);
		setTimer(initialTimer);
	};

	return { timer, runTimer, startTimer };
};
