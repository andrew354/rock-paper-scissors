import Image from 'next/image';

type PlayerBoxProps = {
	name: string;
	choice: string;
	image: string;
	playerColor: string;
	totalScore: number;
};

const PlayerBox = ({ name, choice, image, totalScore }: PlayerBoxProps) => {
	return (
		<>
			<p className="text-center font-semibold text-base my-3">{name}</p>
			<div className="h-[200px] bg-red-400 flex items-center">
				<Image
					className="bg-red-400 max-h-[100px] object-contain"
					width={270}
					height={200}
					src={image}
					alt={choice}
				/>
			</div>
			<p className="text-center my-3">Total Score: {totalScore}</p>
		</>
	);
};

export default PlayerBox;
