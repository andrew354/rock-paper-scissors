'use client';
import React, { useState } from 'react';

import { gql, useQuery } from '@apollo/client';
import ButtonStartGame from './components/Button';
import { GET_TOTAL_SCORE } from './lib/apolloClient/queries';

export type TotalScoreTypeResponse = {
	data: {
		getTotalScore: {
			playerAScore: Number;
			playerBScore: Number;
			tieScore: Number;
			numberGamePlayed: Number;
			maxGamesNumber: Number;
		};
	};
};

export default function Page() {
	const { loading, error, data } = useQuery(GET_TOTAL_SCORE);

	if (loading && !data) {
		return (
			<>
				<h2>Loading...</h2>
			</>
		);
	}

	return (
		<main className="flex justify-center pt-20">
			<div>
				<ButtonStartGame totalScore={data.getTotalScore}>
					start game
				</ButtonStartGame>
				<p>playerAScore: {data.getTotalScore.playerAScore.toString()}</p>
				<p>playerBScore: {data.getTotalScore.playerBScore.toString()}</p>
				<p>tieScore: {data.getTotalScore.tieScore.toString()}</p>
				<p>
					numberGamePlayed: {data.getTotalScore.numberGamePlayed.toString()}
				</p>
				<p>maxGamesNumber: {data.getTotalScore.maxGamesNumber.toString()}</p>
			</div>
		</main>
	);
}
