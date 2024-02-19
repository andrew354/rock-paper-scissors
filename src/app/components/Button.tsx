'use client';
import {
	playerAChoice,
	randomChoicePlayerB,
	usePlayGame,
} from '../hooks/usePlayGame';

type ButtonProps = {
	children: string | React.ReactNode;
	totalScore: {
		playerAScore: number;
		playerBScore: number;
		tieScore: number;
		numberGamePlayed: number;
		maxGamesNumber: number;
	};
};

const ButtonStartGame = ({ totalScore, children }: ButtonProps) => {
	const { startGame, gameResult } = usePlayGame({ totalScore });

	return (
		<>
			<button
				className="border py-3 px-4 text-blue-500 my-10"
				onClick={async () =>
					await startGame(playerAChoice, randomChoicePlayerB() as string)
				}
			>
				{children}
			</button>
		</>
	);
};

export default ButtonStartGame;
