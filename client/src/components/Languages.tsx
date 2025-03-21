import type { MyReposType } from "../types/respos.type";

type Props = {
	repo: MyReposType;
};

export default function Languages({ repo }: Props) {
	return (
		<>
			<h4>
				Langage(s) :{" "}
				{repo?.languages.map((lan, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<article key={index}>
						<h4>📜 {lan.node.name}</h4>
					</article>
				))}
			</h4>
		</>
	);
}
