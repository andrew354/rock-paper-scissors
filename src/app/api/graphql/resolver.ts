import { TotalGameScoreModel } from './models';

type TotalScore = {
	playerAScore: Number;
	playerBScore: Number;
	tieScore: Number;
	numberGamePlayed: Number;
	maxGamesNumber: Number;
};

const resolvers = {
	Query: {
		getTotalScore: async () => {
			try {
				const totalScore = await TotalGameScoreModel.findOne();
				return totalScore;
			} catch (error) {
				throw new Error('Failed to fetch total score');
			}
		},
	},

	Mutation: {
		createTotalScore: async (root: any, newTotalScore: any) => {
			const totalScore = new TotalGameScoreModel({
				...newTotalScore.newTotalScore,
			});
			await totalScore.save();
			return totalScore;
		},

		updateTotalScore: async (
			root: any,
			{
				playerAScore,
				playerBScore,
				tieScore,
				numberGamePlayed,
				maxGamesNumber,
			}: TotalScore
		) => {
			try {
				let totalScore = await TotalGameScoreModel.findOne();
				if (!totalScore) {
					totalScore = new TotalGameScoreModel({
						playerAScore,
						playerBScore,
						tieScore,
						numberGamePlayed,
						maxGamesNumber,
					});
				} else {
					totalScore.playerAScore = playerAScore || totalScore.playerAScore;
					totalScore.playerBScore = playerBScore || totalScore.playerBScore;
					totalScore.tieScore = tieScore || totalScore.tieScore;
					totalScore.numberGamePlayed =
						numberGamePlayed || totalScore.numberGamePlayed;
					totalScore.maxGamesNumber =
						maxGamesNumber || totalScore.maxGamesNumber;
				}
				await totalScore.save();
				return totalScore;
			} catch (error) {
				throw new Error('Failed to update total score');
			}
		},
	},
};

export default resolvers;
