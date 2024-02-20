import { useState } from 'react';
import { useGetTotalScore } from './useGetTotalScore';
import { useGetUpdateTotalScore } from './useGetUpdateTotalScore';

export const CHOICES = [
	{ name: 'rock', img: '/assets/rock.jpeg' },
	{ name: 'paper', img: '/assets/paper.png' },
	{ name: 'scissor', img: '/assets/scissors.jpeg' },
];

export const useGameLogic = () => {
	const [playerAChoice, setPlayerAChoice] = useState(CHOICES[0]);
	const [playerBChoice, setPlayerBChoice] = useState(CHOICES[0]);
	const [gameResult, setGameResult] = useState('');
	const { data } = useGetTotalScore();
	const { updateTotalScore } = useGetUpdateTotalScore();

	const getPlayerBChoice = () => {
		const randomNumber = Math.floor(Math.random() * 3);
		setPlayerBChoice(CHOICES[randomNumber]);
	};

	const playGame = () => {
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

	return {
		playerAChoice,
		playerBChoice,
		gameResult,
		setGameResult,
		setPlayerAChoice,
		getPlayerBChoice,
		playGame,
	};
};
