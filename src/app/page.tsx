'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ShowScore from './components/ShowScore';
import { useTimer } from './hooks/useTimer';
import { CHOICES, useGameLogic } from './hooks/useGameLogic';

const Home = () => {
	const {
		playerAChoice,
		playerBChoice,
		gameResult,
		setGameResult,
		setPlayerAChoice,
		getPlayerBChoice,
		playGame,
	} = useGameLogic();
	const { timer, runTimer, startTimer } = useTimer(3);

	useEffect(() => {
		if (runTimer && !timer) {
			playGame();
		}
	}, [runTimer, timer, playGame]);

	const startGame = () => {
		console.log('FIREEEE');
		setGameResult('');
		startTimer();
		setPlayerAChoice(CHOICES[1]);
		getPlayerBChoice();
	};

	return (
		<div className="mt-20 flex justify-center">
			<div>
				<ShowScore />
				{runTimer && <p>{timer}</p>}
				<button onClick={startGame}>start</button>
				{runTimer ? (
					<>
						<div>Waiting for play</div>
					</>
				) : (
					<div className="flex gap-20">
						<div>
							<Image
								width={100}
								height={100}
								src={playerAChoice.img}
								alt={playerAChoice.name}
							/>
						</div>

						<div>
							<Image
								width={100}
								height={100}
								src={playerBChoice.img}
								alt={playerBChoice.name}
							/>
						</div>
					</div>
				)}
				{gameResult && <div>{gameResult}</div>}
			</div>
		</div>
	);
};

export default Home;
