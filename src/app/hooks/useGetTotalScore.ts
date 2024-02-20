import { useQuery } from '@apollo/client';
import { GET_TOTAL_SCORE } from '../lib/apolloClient/queries';

export const useGetTotalScore = () => {
	const { loading, error, data } = useQuery(GET_TOTAL_SCORE);

	return {
		loading,
		error,
		data,
	};
};
