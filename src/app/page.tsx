'use client';
import React, { useEffect } from 'react';
import ShowScore from './components/ShowScore/ShowScore';
import { useTimer } from './hooks/useTimer';
import { useGameLogic } from './hooks/useGameLogic';
import Title from './components/Title/Title';
import { useGetTotalScore } from './hooks/useGetTotalScore';
import PlayersSection from './components/PlayersSelection/PlayersSelections';

export interface IChoice {
	name: string;
	img: string;
}

const Home = () => {
	const { data, loading, getPlayerAScore, getPlayerBScore } =
		useGetTotalScore();
	const {
		playerAChoice,
		playerBChoice,
		gameResult,
		setGameResult,
		getPlayerChoices,
		playGame,
	} = useGameLogic();
	const { timer, runTimer, startTimer } = useTimer(3);

	useEffect(() => {
		if (runTimer && !timer) {
			playGame();
		}
	}, [runTimer, timer, playGame]);

	const startGame = () => {
		setGameResult('');
		startTimer();
		getPlayerChoices();
	};

	return (
		<div className="md:mt-14 mt-5 h-screen relative flex flex-col justify-center items-center">
			<Title title="Rock, Paper, Scissors" />
			{!data && loading ? (
				<div>Loading...</div>
			) : (
				<div>
					<ShowScore />
					{gameResult ? (
						<div className="flex justify-center">
							Final Score: <strong>{gameResult}</strong>
						</div>
					) : (
						<div className="h-6"></div>
					)}
					<PlayersSection
						runTimer={runTimer}
						getPlayerAScore={getPlayerAScore}
						getPlayerBScore={getPlayerBScore}
						timer={timer}
						playerAChoice={playerAChoice}
						playerBChoice={playerBChoice}
					/>
					<div className="flex justify-center md:my-20 my-8">
						<button
							className="min-w-[100px] border bg-blue-500 rounded-md py-5 px-14 font-bold text-white"
							onClick={startGame}
						>
							Play
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
