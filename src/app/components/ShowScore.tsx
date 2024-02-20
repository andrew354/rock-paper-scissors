import { useGetTotalScore } from '../hooks/useGetTotalScore';

const ShowScore = () => {
	const { data } = useGetTotalScore();
	return (
		<div className="flex justify-center flex-col items-center md:my-14 my-5">
			<p>
				Total games:{' '}
				{`${data?.getTotalScore.numberGamePlayed.toString()}
				 /	${data?.getTotalScore.maxGamesNumber.toString()}`}
			</p>
			<p>Total tie score: {data?.getTotalScore.tieScore.toString()}</p>
		</div>
	);
};

export default ShowScore;
