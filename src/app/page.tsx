'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ShowScore from './components/ShowScore';
import { useGetUpdateTotalScore } from './hooks/useGetUpdateTotalScore';
import { useGetTotalScore } from './hooks/useGetTotalScore';

interface Choice {
	name: string;
	img: string;
}

const CHOICES = [
	{ name: 'rock', img: '/assets/rock.jpeg' },
	{ name: 'paper', img: '/assets/paper.png' },
	{ name: 'scissor', img: '/assets/scissors.jpeg' },
];

const Home = () => {
	const { updateTotalScore } = useGetUpdateTotalScore();
	const { data } = useGetTotalScore();
	const [playerAChoice, setPlayerAChoice] = useState(CHOICES[0]);
	const [playerBChoice, setPlayerBChoice] = useState(CHOICES[0]);
	const [gameResult, setGameResult] = useState('');

	const getPlayerBChoice = () => {
		const randomNumber = Math.floor(Math.random() * 3);
		setPlayerBChoice(CHOICES[randomNumber]);
	};

	const startGame = () => {
		setGameResult('');
		setPlayerAChoice(CHOICES[1]);
		getPlayerBChoice();
		playGame();
	};

	const playGame = () => {
		getGameResult(playerAChoice, playerBChoice);
	};

	const getGameResult = async (
		playerAChoice: Choice,
		playerBChoice: Choice
	) => {
		if (playerAChoice.name === playerBChoice?.name) {
			updateTotalScore({
				variables: {
					tieScore: data.getTotalScore.tieScore + 1,
					numberGamePlayed: data.getTotalScore.numberGamePlayed + 1,
				},
			});
			setGameResult('TIE');
		} else if (playerBChoice?.name === 'rock') {
			updateTotalScore({
				variables: {
					playerAScore: data.getTotalScore.playerAScore + 1,
					numberGamePlayed: data.getTotalScore.numberGamePlayed + 1,
				},
			});
			setGameResult('Player A Wins!');
		} else if (playerBChoice?.name === 'scissor') {
			updateTotalScore({
				variables: {
					playerBScore: data.getTotalScore.playerBScore + 1,
					numberGamePlayed: data.getTotalScore.numberGamePlayed + 1,
				},
			});
			setGameResult('Player B Wins!');
		}
	};

	return (
		<div className="mt-20 flex justify-center">
			<div className="flex flex-col gap-4">
				<ShowScore />
				<button className="border py-2 px-4 text-blue-500" onClick={startGame}>
					start
				</button>
				<div className="flex gap-20">
					<div className="min-h-[200px]">
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
				{gameResult && <div>{gameResult}</div>}
			</div>
		</div>
	);
};

export default Home;
