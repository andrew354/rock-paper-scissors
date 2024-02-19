import { gql } from '@apollo/client';

export const UPDATE_TOTAL_SCORE = gql`
	mutation UpdateTotalScore(
		$playerAScore: Int
		$playerBScore: Int
		$tieScore: Int
		$numberGamePlayed: Int
		$maxGamesNumber: Int
	) {
		updateTotalScore(
			playerAScore: $playerAScore
			playerBScore: $playerBScore
			tieScore: $tieScore
			numberGamePlayed: $numberGamePlayed
			maxGamesNumber: $maxGamesNumber
		) {
			playerAScore
			playerBScore
			tieScore
			numberGamePlayed
			maxGamesNumber
		}
	}
`;
