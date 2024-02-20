type TitleProps = {
	title: string;
};

const Title = ({ title }: TitleProps) => {
	return <h1 className="md:text-5xl text-3xl">{title}</h1>;
};

export default Title;
