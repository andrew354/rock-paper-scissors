import Image from 'next/image';

type PlayerBoxProps = {
	name: string;
	image: string;
};

const PlayerBox = ({ name, image }: PlayerBoxProps) => {
	return (
		<div>
			<h1>{name}</h1>
			<Image width={100} height={100} src={image} alt={name} />
		</div>
	);
};

export default PlayerBox;
