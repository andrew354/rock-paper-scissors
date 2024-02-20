import { useGetTotalScore } from '../hooks/useGetTotalScore';

const ShowScore = () => {
	const { data } = useGetTotalScore();
	return (
		<div>
			<p>playerAScore: {data?.getTotalScore.playerAScore.toString()}</p>
			<p>playerBScore: {data?.getTotalScore.playerBScore.toString()}</p>
			<p>tieScore: {data?.getTotalScore.tieScore.toString()}</p>
			<p>numberGamePlayed: {data?.getTotalScore.numberGamePlayed.toString()}</p>
			<p>maxGamesNumber: {data?.getTotalScore.maxGamesNumber.toString()}</p>
		</div>
	);
};

export default ShowScore;
