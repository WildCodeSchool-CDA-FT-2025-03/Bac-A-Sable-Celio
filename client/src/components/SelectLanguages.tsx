/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useLanguages from "../services/useLanguages";

type Props = {
	value: string;
	handleNewRepo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectLanguages({ value, handleNewRepo }: Props) {
	const { languages, getAllLanguages } = useLanguages();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getAllLanguages();
	}, []);

	return (
		<label htmlFor="">
			Choix du languages
			<select name="languages" value={value} onChange={handleNewRepo} required>
				{languages.map((lg) => (
					<option value={lg} key={lg.toString()}>
						{lg}
					</option>
				))}
			</select>
		</label>
	);
}
