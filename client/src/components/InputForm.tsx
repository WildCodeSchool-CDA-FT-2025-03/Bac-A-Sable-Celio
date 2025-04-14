type Props = {
	value: string;
	name: string;
	title: string;
	handleNewRepo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputForm({
	handleNewRepo,
	value,
	name,
	title,
}: Props) {
	return (
		<label>
			{title}
			<input
				type="text"
				name={name}
				value={value}
				onChange={handleNewRepo}
				required
			/>
		</label>
	);
}
