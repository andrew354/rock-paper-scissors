import { useMutation } from '@apollo/client';
import { UPDATE_TOTAL_SCORE } from '../lib/apolloClient/mutations';
import { GET_TOTAL_SCORE } from '../lib/apolloClient/queries';

export const useGetUpdateTotalScore = () => {
	const [updateTotalScore] = useMutation(UPDATE_TOTAL_SCORE, {
		refetchQueries: [{ query: GET_TOTAL_SCORE }],
	});
	return {
		updateTotalScore,
	};
};
