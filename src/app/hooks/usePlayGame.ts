import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TOTAL_SCORE } from '../lib/apolloClient/mutations';
import { GET_TOTAL_SCORE } from '../lib/apolloClient/queries';

type TotalScoreType = {
	totalScore: {
		playerAScore: number;
		playerBScore: number;
		tieScore: number;
		numberGamePlayed: number;
		maxGamesNumber: number;
	};
};

export const CHOICES = [
	{ name: 'rock', img: '' },
	{ name: 'paper', img: '' },
	{ name: 'scissor', img: '' },
];

export const playerAChoice = CHOICES[1].name;

export const randomChoicePlayerB = () => {
	const random = Math.floor(Math.random() * CHOICES.length) + 1;
	switch (random) {
		case 1:
			return CHOICES[0].name;
		case 2:
			return CHOICES[1].name;
		case 3:
			return CHOICES[2].name;
		default:
			return CHOICES[0].name;
	}
};

export const usePlayGame = ({ totalScore }: TotalScoreType) => {
	const [gameResult, setGameResult] = useState<string | null>(null);
	const [updateTotalScore] = useMutation(UPDATE_TOTAL_SCORE, {
		refetchQueries: [{ query: GET_TOTAL_SCORE }],
	});

	const startGame = (choicePlayerA: string, choicePlayerB: string) => {
		if (choicePlayerA === choicePlayerB) {
			console.log('TIE');
			updateTotalScore({
				variables: {
					tieScore: totalScore.tieScore + 1,
					numberGamePlayed: totalScore.numberGamePlayed + 1,
				},
			});
			setGameResult('TIE');
		} else if (choicePlayerB === 'rock') {
			console.log('Player A Wins!');
			updateTotalScore({
				variables: {
					playerAScore: totalScore.playerAScore + 1,
					numberGamePlayed: totalScore.numberGamePlayed + 1,
				},
			});
			setGameResult('Player A Wins!');
		} else if (choicePlayerB === 'scissor') {
			updateTotalScore({
				variables: {
					playerBScore: totalScore.playerBScore + 1,
					numberGamePlayed: totalScore.numberGamePlayed + 1,
				},
			});
			console.log('Player B Wins!');
			setGameResult('Player B Wins!');
		}
	};

	return {
		startGame,
		gameResult,
	};
};
