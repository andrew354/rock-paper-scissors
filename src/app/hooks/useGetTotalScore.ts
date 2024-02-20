import { useQuery } from '@apollo/client';
import { GET_TOTAL_SCORE } from '../lib/apolloClient/queries';

export const useGetTotalScore = () => {
	const { loading, error, data } = useQuery(GET_TOTAL_SCORE);

	const getPlayerAScore = () => {
		return data?.getTotalScore.playerAScore;
	};
	const getPlayerBScore = () => {
		return data?.getTotalScore.playerBScore;
	};
	const getTieScore = () => {
		return data?.getTotalScore.tieScore;
	};

	return {
		loading,
		error,
		data,
		getPlayerAScore,
		getPlayerBScore,
		getTieScore,
	};
};
