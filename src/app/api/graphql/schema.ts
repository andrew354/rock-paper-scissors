import { gql } from 'apollo-server-core';

const typeDefs = gql`
	type TotalScore {
		playerAScore: Int
		playerBScore: Int
		tieScore: Int
		numberGamePlayed: Int
		maxGamesNumber: Int
	}

	input TotalScoreInput {
		playerAScore: Int
		playerBScore: Int
		tieScore: Int
		numberGamePlayed: Int
		maxGamesNumber: Int
	}

	input EditTotalScoreInput {
		playerAScore: Int
		playerBScore: Int
		tieScore: Int
		numberGamePlayed: Int
		maxGamesNumber: Int
	}

	type Query {
		getTotalScore: TotalScore
	}

	type Mutation {
		createTotalScore(newTotalScore: TotalScoreInput): TotalScore
		updateTotalScore(
			playerAScore: Int
			playerBScore: Int
			tieScore: Int
			numberGamePlayed: Int
			maxGamesNumber: Int
		): TotalScore
	}
`;

export default typeDefs;
