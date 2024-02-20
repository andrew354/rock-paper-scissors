import React from 'react';
import PlayerBox from './PlayerBox';
import { CHOICES } from '../hooks/useGameLogic';
import { Choice } from '../page';

type PlayersSectionProps = {
	runTimer: boolean;
	timer: number;
	playerAChoice: Choice;
	playerBChoice: Choice;
	getPlayerAScore: () => number;
	getPlayerBScore: () => number;
};

const PlayersSection = ({
	runTimer,
	timer,
	playerAChoice,
	playerBChoice,
	getPlayerAScore,
	getPlayerBScore,
}: PlayersSectionProps) => {
	return (
		<div className="flex md:gap-20 items-center">
			<div>
				<PlayerBox
					image={runTimer ? CHOICES[0].img : playerAChoice.img}
					playerColor="blue"
					name="Player A"
					choice={runTimer ? CHOICES[0].name : playerAChoice.name}
					totalScore={getPlayerAScore()}
				/>
			</div>
			<div className="text-center text-3xl md:text-7xl min-w-16">{timer}</div>
			<div>
				<PlayerBox
					image={runTimer ? CHOICES[0].img : playerBChoice.img}
					playerColor="red"
					name="Player B"
					choice={runTimer ? CHOICES[0].name : playerBChoice.name}
					totalScore={getPlayerBScore()}
				/>
			</div>
		</div>
	);
};

export default PlayersSection;
