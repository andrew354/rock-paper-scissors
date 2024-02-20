import { useState } from 'react';
import { useGetTotalScore } from './useGetTotalScore';
import { useGetUpdateTotalScore } from './useGetUpdateTotalScore';

export const DEFAULT_CHOICES = [
	{
		name: 'default',
		img: '/assets/default.png',
	},
	{
		name: 'default-left',
		img: '/assets/defaultLeft.png',
	},
	{
		name: 'default-right',
		img: '/assets/rock.png',
	},
];

export const CHOICES = [
	{ name: 'rock', img: '/assets/rock.png' },
	{ name: 'paper', img: '/assets/paper.png' },
	{ name: 'scissors', img: '/assets/scissors.png' },
];

export const useGameLogic = () => {
	const [playerAChoice, setPlayerAChoice] = useState(DEFAULT_CHOICES[0]);
	const [playerBChoice, setPlayerBChoice] = useState(DEFAULT_CHOICES[0]);
	const [gameResult, setGameResult] = useState('');
	const { data } = useGetTotalScore();
	const { updateTotalScore } = useGetUpdateTotalScore();

	const getPlayerChoices = () => {
		setPlayerAChoice(CHOICES[1]);
		const randomNumber = Math.floor(Math.random() * CHOICES.length);
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
		} else if (playerBChoice?.name === 'scissors') {
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
		getPlayerChoices,
		playGame,
	};
};
