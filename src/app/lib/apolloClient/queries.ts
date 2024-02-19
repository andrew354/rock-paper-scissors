import { gql } from '@apollo/client';

export const GET_TOTAL_SCORE = gql`
	query GetTotalScore {
		getTotalScore {
			playerAScore
			playerBScore
			tieScore
			numberGamePlayed
			maxGamesNumber
		}
	}
`;
